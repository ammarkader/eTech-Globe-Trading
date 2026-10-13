/** One entry of the keyword-based FAQ assistant. It is not an AI chatbot. */
export interface FAQItem {
  question: string
  /** Lower-case fragments matched against what the visitor types. */
  keywords: readonly string[]
  answer: string
}
