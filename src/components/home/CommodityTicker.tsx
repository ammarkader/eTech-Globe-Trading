import { commodities } from '../../data/commodities'
import { homeContent } from '../../data/home'

/**
 * The strip of commodity names that scrolls under the hero.
 * The names are rendered twice so the strip can loop without a gap; the second copy
 * is hidden from assistive technology. The movement is a CSS animation and stops
 * when the visitor prefers reduced motion.
 */
export function CommodityTicker() {
  return (
    <div
      role="marquee"
      aria-label={homeContent.ticker.ariaLabel}
      className="overflow-hidden border-y border-line bg-sheet [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] whitespace-nowrap text-heading"
    >
      <div className="inline-flex animate-ticker gap-(--ticker-gap) py-4 [--ticker-gap:48px] motion-reduce:animate-none">
        {[false, true].map((isRepeat) =>
          commodities.map((commodity) => (
            <span
              key={`${commodity.slug}-${isRepeat ? 'repeat' : 'first'}`}
              aria-hidden={isRepeat || undefined}
              className="text-[0.92rem] leading-[normal] font-medium tracking-[-0.01em]"
            >
              <span
                aria-hidden="true"
                className="relative -top-px mr-3 align-middle text-[0.5rem] text-accent"
              >
                ●
              </span>
              {commodity.name}
            </span>
          )),
        )}
      </div>
    </div>
  )
}
