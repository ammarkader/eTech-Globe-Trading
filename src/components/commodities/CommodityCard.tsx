import { Link } from 'react-router'
import { commodityPath } from '../../lib/paths'
import { cn } from '../../lib/utils'
import type { Commodity } from '../../types/commodity'
import { arrowLink, cardHover, cardSurface } from '../ui/styles'

interface CommodityCardProps {
  commodity: Commodity
  /** Name of the commodity's group, shown above its name. */
  groupName: string
  /** Text of the link to the commodity page. */
  linkLabel: string
}

/**
 * A commodity in the homepage grid: group, name, summary and a link to its page.
 * The approved card has no photograph.
 */
export function CommodityCard({
  commodity,
  groupName,
  linkLabel,
}: CommodityCardProps) {
  const titleId = `commodity-${commodity.slug}`
  const linkId = `${titleId}-link`

  return (
    <article
      className={cn(cardSurface, cardHover, 'flex flex-col gap-0 p-card-sm')}
    >
      <span className="mb-2 text-small/[1.4] font-semibold tracking-[0.01em] text-accent">
        {groupName}
      </span>
      <h3
        id={titleId}
        className="mb-2 text-title-sm/[1.3] tracking-[-0.015em] text-deep"
      >
        {commodity.name}
      </h3>
      <p className="flex-1 text-card/[1.6] text-copy">{commodity.summary}</p>
      {/* Every card has the same link text, so its accessible name adds the commodity. */}
      <Link
        id={linkId}
        to={commodityPath(commodity.slug)}
        aria-labelledby={`${linkId} ${titleId}`}
        className={cn(arrowLink, 'mt-auto self-start pt-4')}
      >
        {linkLabel}
      </Link>
    </article>
  )
}
