import { Link } from 'react-router'
import { findCommodityGroup } from '../../data/commodityGroups'
import { commodityPath } from '../../lib/paths'
import { cn } from '../../lib/utils'
import type { Commodity } from '../../types/commodity'
import { cardHover, cardSurface } from '../ui/styles'

interface RelatedCommoditiesProps {
  commodities: readonly Commodity[]
}

/** A grid of links to commodity pages: each shows the commodity's group and its name. */
export function RelatedCommodities({ commodities }: RelatedCommoditiesProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-grid-gap">
      {commodities.map((commodity) => (
        <Link
          key={commodity.slug}
          to={commodityPath(commodity.slug)}
          className={cn(cardSurface, cardHover, 'p-card-sm no-underline')}
        >
          <small className="text-small/[1.4] font-semibold tracking-[0.01em] text-accent">
            {findCommodityGroup(commodity.group)?.name}
          </small>
          <b className="mt-1.5 block text-title-sm/[1.3] font-semibold tracking-[-0.015em] text-heading">
            {commodity.name}
          </b>
        </Link>
      ))}
    </div>
  )
}
