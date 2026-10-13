import { site } from '../data/site'

/**
 * A link that opens an email to the group's main address with the subject, and
 * optionally the text, filled in.
 */
export function mailtoLink(subject: string, body?: string): string {
  const link = `mailto:${site.emails.primary}?subject=${encodeURIComponent(subject)}`
  return body === undefined ? link : `${link}&body=${encodeURIComponent(body)}`
}
