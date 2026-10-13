/** One entry of the assistant's conversation. */
export interface ChatMessage {
  id: number
  from: 'assistant' | 'visitor'
  text: string
}

/** What the visitor entered in the follow-up form. Every field is optional. */
export interface FollowUpDetails {
  name: string
  company: string
  phone: string
  email: string
  need: string
}
