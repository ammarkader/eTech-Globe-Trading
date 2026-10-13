import { homeContent } from '../../data/home'
import { site } from '../../data/site'
import { useReveal } from '../../hooks/useReveal'
import { LinkedInIcon } from '../icons/LinkedInIcon'
import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

/**
 * The LinkedIn strip: one card inviting visitors to follow ETECH, with a button
 * to the company's LinkedIn page. It is fixed copy, not a feed.
 */
export function LinkedInStrip() {
  const { heading, text, actionLabel } = homeContent.linkedIn

  const reveal = useReveal<HTMLDivElement>()

  return (
    <Section id="linkedin" flushTop>
      <Container>
        <div
          {...reveal}
          className="flex flex-wrap items-center gap-6 rounded-card border border-line bg-sheet px-8 py-7 shadow-sm upto-640:p-6"
        >
          <LinkedInIcon
            size={40}
            className="size-[60px] flex-none rounded-[12px] bg-surface p-3 text-accent"
          />
          <div className="min-w-[220px] flex-1">
            <h2 className="text-h3/[1.2] tracking-[-0.025em]">{heading}</h2>
            <p className="mt-1 text-lead/[1.6] text-copy">{text}</p>
          </div>
          <ButtonLink href={site.linkedInUrl} external variant="dark">
            {actionLabel}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}
