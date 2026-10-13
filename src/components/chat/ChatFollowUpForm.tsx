import type { FormEvent } from 'react'
import { chatContent } from '../../data/chat'
import { cn } from '../../lib/utils'
import type { FollowUpDetails } from '../../types/chat'
import { fieldFocus, fieldPlaceholder, nativeButtonType } from './styles'

interface ChatFollowUpFormProps {
  onSend: (details: FollowUpDetails) => void
  onDecline: () => void
}

const LABEL = 'grid gap-[3px] text-copy'
const FIELD = cn(
  'rounded-lg border border-line bg-sheet p-2 tracking-normal text-heading',
  fieldFocus,
)

/**
 * The follow-up form the assistant offers inside the conversation. Every field is
 * optional; the browser checks only that an email address, if given, looks like one.
 */
export function ChatFollowUpForm({ onSend, onDecline }: ChatFollowUpFormProps) {
  const text = chatContent.followUp

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const field = (name: string) => String(data.get(name) ?? '')

    onSend({
      name: field('name'),
      company: field('company'),
      phone: field('phone'),
      email: field('email'),
      need: field('msg'),
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-2 rounded-card border border-line bg-page p-3 text-[0.85rem]"
    >
      <p className="text-copy">{text.intro}</p>
      <label className={LABEL}>
        {text.name}
        <input name="name" autoComplete="name" className={FIELD} />
      </label>
      <label className={LABEL}>
        {text.company}
        <input name="company" autoComplete="organization" className={FIELD} />
      </label>
      <label className={LABEL}>
        {text.phone}
        <input name="phone" type="tel" autoComplete="tel" className={FIELD} />
      </label>
      <label className={LABEL}>
        {text.email}
        <input
          name="email"
          type="email"
          autoComplete="email"
          className={FIELD}
        />
      </label>
      <label className={LABEL}>
        {text.need}
        <textarea
          name="msg"
          rows={2}
          placeholder={text.needPlaceholder}
          className={cn(FIELD, fieldPlaceholder, 'resize')}
        />
      </label>
      <div className="flex gap-2">
        <button
          type="submit"
          className={cn(
            nativeButtonType,
            'flex-1 cursor-pointer rounded-pill bg-accent p-[9px] font-semibold text-white hover:bg-accent-hover',
          )}
        >
          {text.send}
        </button>
        <button
          type="button"
          onClick={onDecline}
          className={cn(
            nativeButtonType,
            'cursor-pointer rounded-pill border border-line px-3 py-[9px] text-copy',
          )}
        >
          {text.decline}
        </button>
      </div>
    </form>
  )
}
