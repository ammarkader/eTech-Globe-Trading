import { faqItems } from '../data/faq'

/**
 * Finds the FAQ entry that best fits what the visitor typed, as etech-final.html does:
 * every keyword found in the text scores its own length, and the entry with the
 * highest total wins (the earlier one on a tie). Returns -1 when no keyword is found.
 */
export function matchFaq(text: string): number {
  const question = text.toLowerCase()
  let best = -1
  let bestScore = 0

  faqItems.forEach((item, index) => {
    const score = item.keywords.reduce(
      (total, keyword) =>
        question.includes(keyword) ? total + keyword.length : total,
      0,
    )
    if (score > bestScore) {
      bestScore = score
      best = index
    }
  })

  return best
}
