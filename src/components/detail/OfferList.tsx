import type { DivisionOffer } from '../../types/division'

interface OfferListProps {
  offers: readonly DivisionOffer[]
}

/**
 * "What we offer" on a division page: one row per offer, with either a sentence
 * or a set of items shown as pills.
 */
export function OfferList({ offers }: OfferListProps) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line shadow-sm">
      {offers.map((offer) => (
        <li key={offer.title} className="bg-sheet px-6 py-[22px]">
          <strong className="mb-1 block text-title-sm/[1.3] font-semibold tracking-[-0.015em] text-heading">
            {offer.title}
          </strong>
          {offer.kind === 'list' ? (
            <ul className="mt-2 flex flex-wrap gap-2">
              {offer.items.map((item) => (
                <li
                  key={item}
                  className="rounded-pill border border-[rgba(83,58,253,0.08)] bg-[rgba(226,228,255,0.55)] px-3 py-[5px] text-[0.85rem] text-heading"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-body/[1.65] text-copy">{offer.text}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
