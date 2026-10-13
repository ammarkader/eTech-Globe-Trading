import { cn } from '../../lib/utils'
import type { ChatMessage as Message } from '../../types/chat'

interface ChatMessageProps {
  message: Message
}

/** One bubble of the conversation: the assistant's on the left, the visitor's on the right. */
export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={cn(
        'max-w-[85%] rounded-card px-[13px] py-[9px] text-[0.92rem]/[1.45] whitespace-pre-line',
        message.from === 'assistant'
          ? 'self-start rounded-bl-[4px] border border-line bg-page text-heading'
          : 'self-end rounded-br-[4px] bg-accent text-white',
      )}
    >
      {message.text}
    </div>
  )
}
