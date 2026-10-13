import { detailPageContent } from '../../data/detailPages'
import { mailtoLink } from '../../lib/mail'
import { ButtonLink } from '../ui/ButtonLink'

interface QuoteAsideProps {
  heading: string
  text: string
  /** The division or commodity the enquiry is about; it completes the email subject. */
  subjectName: string
}

/**
 * The enquiry panel beside the main column of a detail page. It stays in view while
 * the column scrolls. Its button opens an email to the group with the subject filled in.
 */
export function QuoteAside({ heading, text, subjectName }: QuoteAsideProps) {
  const { label, subjectPrefix } = detailPageContent.quote

  return (
    <aside className="sticky top-24 rounded-card border border-[rgba(83,58,253,0.16)] bg-[linear-gradient(180deg,rgba(226,228,255,0.7)_0%,var(--color-sheet)_75%)] p-card shadow-sm">
      <h3 className="mb-2.5 text-h3/[1.2] tracking-[-0.02em] text-heading">
        {heading}
      </h3>
      <p className="mb-[18px] text-card/[1.6] text-copy">{text}</p>
      <ButtonLink
        variant="dark"
        href={mailtoLink(`${subjectPrefix}${subjectName}`)}
      >
        {label}
      </ButtonLink>
    </aside>
  )
}
