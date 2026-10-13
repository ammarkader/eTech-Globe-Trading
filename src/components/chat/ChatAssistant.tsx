import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { chatContent } from '../../data/chat'
import { assistantFallback, assistantGreeting, faqItems } from '../../data/faq'
import { site } from '../../data/site'
import { useHydrated } from '../../hooks/useHydrated'
import { matchFaq } from '../../lib/faq'
import { mailtoLink } from '../../lib/mail'
import { cn } from '../../lib/utils'
import type { ChatMessage as Message, FollowUpDetails } from '../../types/chat'
import { ChatIcon } from '../icons/ChatIcon'
import { ChatFollowUpForm } from './ChatFollowUpForm'
import { ChatInput } from './ChatInput'
import { ChatMessage } from './ChatMessage'

/** One entry of the conversation: a message, or the follow-up form in its place among them. */
type LogEntry = Message | { id: 'follow-up' }

const PANEL_ID = 'chat-panel'
/** The assistant replies after this pause. */
const REPLY_DELAY_MS = 300
/** After the second answered question the follow-up form is offered, this long after the answer. */
const OFFER_DELAY_MS = 600
const ANSWERS_BEFORE_OFFER = 2

const SUGGESTION =
  'flex-none cursor-pointer rounded-pill border px-3 py-[7px] text-[0.8rem]/[normal] font-medium tracking-normal whitespace-nowrap'

function isMessage(entry: LogEntry): entry is Message {
  return entry.id !== 'follow-up'
}

/**
 * The "Ask ETECH" assistant of etech-final.html: a launcher fixed to the corner of
 * every page, and a panel with a conversation, suggested questions and a question field.
 *
 * It is not an AI chatbot and contacts no service. A suggested question shows its
 * answer; a typed question is matched against the keywords of the FAQ entries
 * (src/lib/faq.ts). When nothing matches, or after two answers, or when the visitor
 * asks for the team, it offers a short optional form inside the conversation, which
 * opens the visitor's email app with their details and the conversation filled in.
 *
 * Only one follow-up form is ever shown: asking for it again moves it to the end of
 * the conversation, where etech-final.html would add a second one.
 *
 * The assistant needs the app to be running, so it is not in the prerendered HTML.
 * The conversation is kept while the visitor moves between pages.
 */
export function ChatAssistant() {
  const hydrated = useHydrated()
  const [open, setOpen] = useState(false)
  const [log, setLog] = useState<LogEntry[]>([])
  const [draft, setDraft] = useState('')

  const launcher = useRef<HTMLButtonElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const conversation = useRef<HTMLDivElement>(null)
  const nextId = useRef(0)
  const answered = useRef(0)
  const offered = useRef(false)
  const timers = useRef(new Set<number>())

  // The newest entry is kept in view.
  useEffect(() => {
    const element = conversation.current
    if (element) element.scrollTop = element.scrollHeight
  }, [log])

  // Opening the panel puts the cursor in the question field.
  useEffect(() => {
    if (open) input.current?.focus()
  }, [open])

  useEffect(() => {
    const pending = timers.current
    return () => pending.forEach((timer) => window.clearTimeout(timer))
  }, [])

  function later(action: () => void, delay: number) {
    const timer = window.setTimeout(() => {
      timers.current.delete(timer)
      action()
    }, delay)
    timers.current.add(timer)
  }

  function say(from: Message['from'], text: string) {
    const id = nextId.current++
    setLog((entries) => [...entries, { id, from, text }])
  }

  /** Shows the follow-up form at the end of the conversation. Unless forced, only once. */
  function offerFollowUp(force: boolean) {
    if (offered.current && !force) return
    offered.current = true
    setLog((entries) => [...entries.filter(isMessage), { id: 'follow-up' }])
  }

  function removeFollowUp() {
    setLog((entries) => entries.filter(isMessage))
  }

  /** A question from a suggestion (with its entry) or typed by the visitor (matched here). */
  function ask(question: string, entry = matchFaq(question)) {
    say('visitor', question)

    if (entry > -1) {
      later(() => {
        say('assistant', faqItems[entry].answer)
        answered.current++
        if (answered.current >= ANSWERS_BEFORE_OFFER && !offered.current) {
          later(() => offerFollowUp(false), OFFER_DELAY_MS)
        }
      }, REPLY_DELAY_MS)
      return
    }

    later(() => {
      say('assistant', assistantFallback)
      offerFollowUp(true)
    }, REPLY_DELAY_MS)
  }

  function openPanel() {
    setOpen(true)
    if (log.length === 0) say('assistant', assistantGreeting)
  }

  function closePanel() {
    setOpen(false)
    launcher.current?.focus()
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') closePanel()
  }

  /** Opens the visitor's email app with their details and the conversation so far. */
  function sendFollowUp(details: FollowUpDetails) {
    const { transcript, followUp } = chatContent
    const lines = log
      .filter(isMessage)
      .map(
        (message) =>
          (message.from === 'assistant'
            ? transcript.assistant
            : transcript.visitor) + message.text,
      )
    const body = `Name: ${details.name}\nCompany: ${details.company}\nPhone: ${details.phone}\nEmail: ${details.email}\nNeed: ${details.need}\n\nChat:\n${lines.join('\n')}`

    window.location.assign(mailtoLink(followUp.emailSubject, body))
    removeFollowUp()
    say('assistant', followUp.sent)
  }

  function declineFollowUp() {
    removeFollowUp()
    say(
      'assistant',
      `${chatContent.followUp.declinedPrefix}${site.emails.primary}.`,
    )
  }

  if (!hydrated) return null

  const { launcher: launcherText, panel, team } = chatContent
  const started = log.length > 0

  return (
    <>
      <button
        ref={launcher}
        aria-label={launcherText.ariaLabel}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        onClick={open ? closePanel : openPanel}
        className={cn(
          'fixed right-5 bottom-[calc(20px+env(safe-area-inset-bottom,0px))] z-60 flex cursor-pointer items-center gap-2 rounded-pill border border-[rgba(255,255,255,0.16)] px-[18px] py-3 text-[0.95rem]/[normal] font-semibold tracking-normal text-white [box-shadow:0_14px_30px_-10px_rgba(83,58,253,0.6),0_4px_10px_-4px_rgba(13,23,56,0.3)] transition-[background-color,box-shadow] duration-200 ease-[ease] motion-reduce:transition-none upto-700:p-3',
          open ? 'bg-deep' : 'bg-accent hover:bg-accent-hover',
        )}
      >
        <ChatIcon />
        <span className="upto-520:hidden">{launcherText.label}</span>
      </button>

      {/*
       * On small screens the height follows the visible part of the screen (dvh) where
       * the browser can measure it, so the header and its close button are never cut off.
       */}
      <section
        id={PANEL_ID}
        role="dialog"
        aria-label={panel.ariaLabel}
        hidden={!open}
        onKeyDown={onKeyDown}
        className="fixed right-5 bottom-[calc(84px+env(safe-area-inset-bottom,0px))] z-60 flex h-[min(600px,calc(100vh-120px))] w-[min(380px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-line bg-sheet text-heading [box-shadow:0_30px_70px_-20px_rgba(13,23,56,0.45)] supports-[height:1dvh]:h-[min(600px,calc(100dvh-120px))] upto-520:inset-x-3 upto-520:bottom-[calc(80px+env(safe-area-inset-bottom,0px))] upto-520:h-[calc(100vh-110px-env(safe-area-inset-top,0px))] upto-520:w-auto upto-520:supports-[height:1dvh]:h-[calc(100dvh-110px-env(safe-area-inset-top,0px))]"
      >
        <header className="flex items-center justify-between bg-deep bg-[radial-gradient(80%_140%_at_100%_0%,rgba(83,58,253,0.45),transparent_65%)] px-4 py-3.5 text-white">
          <div>
            <b>{panel.title}</b>
            <small className="block text-[0.75rem] text-on-deep-3">
              {panel.status}
            </small>
          </div>
          <button
            aria-label={panel.closeLabel}
            onClick={closePanel}
            className="size-10 cursor-pointer px-1.5 py-px [font-family:revert] text-[1.6rem]/[1] tracking-normal text-white"
          >
            ×
          </button>
        </header>

        <div
          ref={conversation}
          aria-live="polite"
          className="flex flex-1 flex-col gap-2 overflow-y-auto p-3.5"
        >
          {log.map((entry) =>
            isMessage(entry) ? (
              <ChatMessage key={entry.id} message={entry} />
            ) : (
              <ChatFollowUpForm
                key={entry.id}
                onSend={sendFollowUp}
                onDecline={declineFollowUp}
              />
            ),
          )}
        </div>

        <div className="flex gap-1.5 overflow-x-auto border-t border-line px-3 py-2">
          {/* The suggestions appear with the greeting, the first time the panel is opened. */}
          {started && (
            <>
              {faqItems.map((item, index) => (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => ask(item.question, index)}
                  className={cn(
                    SUGGESTION,
                    'border-line bg-sheet text-heading hover:border-accent hover:text-accent',
                  )}
                >
                  {item.question}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  say('visitor', team.message)
                  offerFollowUp(true)
                }}
                className={cn(
                  SUGGESTION,
                  'border-accent bg-accent text-white hover:bg-accent-hover',
                )}
              >
                {team.suggestion}
              </button>
            </>
          )}
        </div>

        <ChatInput
          value={draft}
          onChange={setDraft}
          onSend={(question) => {
            setDraft('')
            ask(question)
          }}
          inputRef={input}
        />
      </section>
    </>
  )
}
