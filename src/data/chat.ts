/**
 * Interface text of the FAQ assistant, exactly as in etech-final.html.
 * The questions, answers, greeting and fallback reply are in faq.ts.
 */
export const chatContent = {
  launcher: { label: 'Ask ETECH', ariaLabel: 'Open chat with ETECH' },
  panel: {
    ariaLabel: 'ETECH assistant',
    title: 'ETECH assistant',
    status: 'Usually answers instantly',
    closeLabel: 'Close chat',
  },
  input: {
    label: 'Type your question',
    placeholder: 'Type a question…',
    sendLabel: 'Send',
  },
  team: {
    /** The last suggestion: it asks for a follow-up instead of a question. */
    suggestion: 'Talk to our team',
    /** What the visitor is shown to have said after choosing it. */
    message: 'Talk to your team',
  },
  followUp: {
    intro:
      'Would you like our team to follow up? All fields are optional — share only what you’re comfortable with.',
    name: 'Name',
    company: 'Company',
    phone: 'Phone / WhatsApp',
    email: 'Email',
    need: 'What do you need?',
    needPlaceholder: 'Product, quantity, port…',
    send: 'Send to ETECH',
    decline: 'No thanks',
    /** Followed by the group's email address and a full stop. */
    declinedPrefix: 'No problem. You can also email us anytime at ',
    sent: 'Thanks — your email app has opened with the details. Just press send.',
    emailSubject: 'Website chat enquiry',
  },
  /** How each side is named in the conversation copied into the email. */
  transcript: { assistant: 'ETECH: ', visitor: 'Visitor: ' },
} as const
