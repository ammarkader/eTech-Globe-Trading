import { Link } from 'react-router'
import { homeContent } from '../../data/home'
import { latestNews } from '../../data/news'
import { site } from '../../data/site'
import { commodityPath } from '../../lib/paths'
import { cn } from '../../lib/utils'
import { Container } from '../ui/Container'
import { arrowLink, cardHover, cardSurface } from '../ui/styles'

/**
 * "Latest news and updates": three cards, each linking to a commodity page.
 * Three equal columns from 760px. Below that the cards sit in one row that the
 * visitor scrolls sideways, as approved; it is plain scrolling, not a carousel.
 */
export function LatestNews() {
  const { ariaLabel, heading, linkLabel } = homeContent.latest

  return (
    <section id="latest" aria-label={ariaLabel}>
      <Container>
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="text-h2-sub tracking-[-0.03em]">{heading}</h2>
          <a
            href={site.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={arrowLink}
          >
            {linkLabel}
          </a>
        </div>

        <div className="flex snap-x snap-mandatory [scrollbar-width:thin] gap-grid-gap overflow-x-auto px-0.5 pt-0.5 pb-3 from-760:grid from-760:snap-none from-760:grid-cols-3 from-760:overflow-visible from-760:px-0 from-760:pb-1">
          {latestNews.map((item) => (
            <article
              key={item.title}
              className="shrink-0 grow-0 basis-[min(82%,360px)] snap-start from-760:min-w-0"
            >
              <Link
                to={commodityPath(item.commodity)}
                className={cn(
                  cardSurface,
                  cardHover,
                  'flex h-full flex-col p-card no-underline',
                )}
              >
                <span className="mb-2 block text-small/[1.4] font-semibold tracking-[0.01em] text-accent">
                  {item.label}
                </span>
                <h3 className="mb-2 text-title/[1.25] tracking-[-0.02em] text-heading">
                  {item.title}
                </h3>
                <p className="text-card/[1.6] text-copy">{item.summary}</p>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
