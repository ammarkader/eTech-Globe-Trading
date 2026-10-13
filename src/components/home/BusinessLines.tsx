import { Link } from 'react-router'
import { divisions } from '../../data/divisions'
import { homeContent } from '../../data/home'
import { useReveal } from '../../hooks/useReveal'
import { divisionPath } from '../../lib/paths'
import { cn } from '../../lib/utils'
import { DivisionIcon } from '../illustrations/DivisionIcon'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { arrowLabel, cardHover, cardSurface } from '../ui/styles'

/**
 * "One group, six lines of business": one card per division, each linking to its page.
 * A plain grid: three columns from 900px, two from 600px, one below. Not a carousel.
 */
export function BusinessLines() {
  const { heading, intro, cardLinkLabel } = homeContent.divisions

  const reveal = useReveal<HTMLDivElement>()

  return (
    <Section id="divisions">
      <Container>
        <SectionHeading heading={heading} intro={intro} />

        <div
          {...reveal}
          className="grid grid-cols-3 gap-grid-gap upto-899:grid-cols-2 upto-599:grid-cols-1"
        >
          {divisions.map((division) => (
            <article key={division.slug} className="min-w-0">
              <Link
                to={divisionPath(division.slug)}
                className={cn(
                  cardSurface,
                  cardHover,
                  'group flex h-full flex-col gap-0 p-card no-underline',
                )}
              >
                <DivisionIcon slug={division.slug} />
                <h3 className="mb-2 text-title/[1.25] tracking-[-0.02em] text-heading">
                  {division.name}
                </h3>
                <p className="flex-1 text-card/[1.6] text-copy">
                  {division.summary}
                </p>
                <span className={cn(arrowLabel, 'mt-5 self-start')}>
                  {cardLinkLabel}
                </span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
