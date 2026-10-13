import { homeContent } from '../../data/home'
import { marketWatch } from '../../data/markets'
import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/utils'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { arrowLabel, cardHover, cardSurface } from '../ui/styles'

/**
 * "Market watch": three cards, each a link to an article on another site, opened
 * in a new tab. Three columns, two up to 899px, one up to 599px. The content is
 * fixed editorial copy; nothing is fetched.
 */
export function MarketWatch() {
  const { heading, intro } = homeContent.markets

  const reveal = useReveal<HTMLDivElement>()

  return (
    <Section id="markets">
      <Container>
        <SectionHeading heading={heading} intro={intro} />
        <div
          {...reveal}
          className="grid grid-cols-3 gap-grid-gap upto-899:grid-cols-2 upto-599:grid-cols-1"
        >
          {marketWatch.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                cardSurface,
                cardHover,
                'group flex flex-col gap-0 p-card no-underline',
              )}
            >
              <span className="mb-2 block text-small/[1.4] font-semibold tracking-[0.01em] text-accent">
                {item.source}
              </span>
              <h3 className="mb-2 text-title/[1.25] tracking-[-0.02em] text-heading">
                {item.title}
              </h3>
              <p className="text-card/[1.6] text-copy">{item.summary}</p>
              <span className={cn(arrowLabel, 'mt-auto self-start pt-5')}>
                {item.linkLabel}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
