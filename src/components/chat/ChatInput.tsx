import type { FormEvent, Ref } from 'react'
import { chatContent } from '../../data/chat'
import { cn } from '../../lib/utils'
import { fieldFocus, fieldPlaceholder, nativeButtonType } from './styles'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  /** Called with the trimmed text; never with an empty question. */
  onSend: (question: string) => void
  inputRef: Ref<HTMLInputElement>
}

const INPUT_ID = 'chat-question'

/** The question field and its send button, at the foot of the assistant. */
export function ChatInput({
  value,
  onChange,
  onSend,
  inputRef,
}: ChatInputProps) {
  const { label, placeholder, sendLabel } = chatContent.input

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const question = value.trim()
    if (question) onSend(question)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-1.5 border-t border-line px-3 py-2.5"
    >
      <label htmlFor={INPUT_ID} className="sr-only">
        {label}
      </label>
      <input
        ref={inputRef}
        id={INPUT_ID}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete="off"
        placeholder={placeholder}
        className={cn(
          'min-w-0 flex-1 rounded-pill border border-line bg-page px-3.5 py-2.5 text-[0.92rem] tracking-normal text-heading',
          fieldFocus,
          fieldPlaceholder,
        )}
      />
      <button
        aria-label={sendLabel}
        className={cn(
          nativeButtonType,
          'w-[42px] cursor-pointer rounded-[50%] bg-accent px-1.5 py-px text-white hover:bg-accent-hover',
        )}
      >
        ➤
      </button>
    </form>
  )
}
