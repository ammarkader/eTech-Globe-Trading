import { cn } from '../../lib/utils'
import type { CommodityRange } from '../../types/commodity'
import { cardHover, cardSurface } from '../ui/styles'

interface RangeCardsProps {
  range: CommodityRange
}

/** A commodity's grades or products as cards: code, name, description and key figures. */
export function RangeCards({ range }: RangeCardsProps) {
  return (
    <>
      <div className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-grid-gap">
        {range.items.map((item) => (
          <article
            key={item.code}
            className={cn(cardSurface, cardHover, 'p-card-sm')}
          >
            <span className="text-small/[1.4] font-semibold tracking-[0.01em] text-accent">
              {item.code}
            </span>
            <h3 className="mt-1.5 mb-2 text-title/[1.25] tracking-[-0.02em] text-heading">
              {item.name}
            </h3>
            <p className="mb-2.5 text-card/[1.6] text-copy">
              {item.description}
            </p>
            <ul className="list-disc pl-[18px] text-card/[1.6] text-copy">
              {item.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-3.5 mb-[1em] text-[0.9rem] text-copy">{range.note}</p>
    </>
  )
}
