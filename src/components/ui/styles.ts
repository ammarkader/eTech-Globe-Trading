/**
 * Class lists shared by elements that look the same but are different tags
 * (a card may be a link, an article or a list item).
 */

/** The standard card: white, hairline border, 14px radius, soft shadow. */
export const cardSurface = 'rounded-card border border-line bg-white shadow-sm'

/**
 * The one hover treatment for cards: a 4px lift, a slightly deeper shadow and a faint
 * violet border, over 240ms. Not for large feature panels. Hover applies only on
 * devices that can hover, and nothing moves under reduced motion.
 */
export const cardHover =
  'transition-[translate,box-shadow,border-color,background-color] hover:-translate-y-lift hover:border-card-hover-line hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0'

/**
 * The violet "Learn more ›" label at the foot of a card that is itself a link.
 * The arrow nudges right when the card (marked `group`) is hovered.
 */
export const arrowLabel =
  "inline-flex items-center gap-1.5 text-card font-semibold tracking-[-0.005em] text-accent after:text-[1.25em] after:leading-none after:transition-[translate] after:content-['›'] group-hover:after:translate-x-[3px] motion-reduce:after:transition-none"

/**
 * The pill-shaped control used for filters and tabs. Combine with `pillIdle` or
 * `pillSelected`; the selected pill is solid violet and has no hover change.
 * Letter-spacing is normal, as browsers give buttons by default.
 */
export const pillControl =
  'min-h-10 cursor-pointer rounded-pill border px-[18px] py-2.5 text-small/[1.2] font-medium tracking-normal shadow-[0_1px_2px_rgba(13,23,56,0.04)] transition-[background-color,border-color,color] motion-reduce:transition-none'

export const pillIdle =
  'border-deep/12 bg-white text-copy hover:border-accent/40 hover:text-deep'

export const pillSelected = 'border-accent bg-accent text-white'

/** Shape and movement of a text link followed by a "›" that nudges right on hover. */
const arrowLinkBase =
  "inline-flex items-center gap-1.5 text-card font-semibold tracking-[-0.005em] whitespace-nowrap no-underline transition-[color] after:text-[1.25em] after:leading-none after:transition-[translate] after:content-['›'] hover:after:translate-x-[3px] motion-reduce:transition-none motion-reduce:after:transition-none"

/** The arrow link in violet, for light backgrounds. */
export const arrowLink = `${arrowLinkBase} text-accent hover:text-accent-hover`

/** The arrow link in pale lilac, for deep navy panels. */
export const arrowLinkOnDeep = `${arrowLinkBase} text-surface hover:text-white`
