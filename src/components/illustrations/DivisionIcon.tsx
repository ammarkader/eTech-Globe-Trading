import type { ReactElement } from 'react'

interface DivisionIconProps {
  /** Slug of the division whose icon to draw. */
  slug: string
}

/** One arrow of the recycling sign: an arc of the circle and its head. The sign is three of them. */
const RECYCLING_ARROW =
  'M5.82 8.71A7 7 0 0 1 14.62 5.51M13.85 2.82L14.62 5.51L11.93 6.28'

/**
 * The six division icons. They are drawn to one standard: a 24-unit square of which
 * the drawing fills the middle 18, one stroke width, round ends and corners.
 *
 * They are still. One part of each (the classes below) moves a little while its
 * card is hovered or holds keyboard focus: src/styles/illustrations.css.
 */
const ICONS: Record<string, ReactElement> = {
  // Cargo ship on the water. The ship lifts its bow and the water slides under it.
  'commodity-trading': (
    <>
      <g className="icon-tilt">
        <path d="M3.5 11.75h17l-2.7 5H6.2z" />
        <path d="M7.5 11.75v-4H12v4M12 9.5h4.25v2.25" />
        <path d="M9.75 7.75V4.5" />
      </g>
      <path
        className="icon-drift"
        d="M3 20.25q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0"
      />
    </>
  ),
  // Tower crane over a building. The hook lowers its load.
  'construction-real-estate': (
    <>
      <path d="M6.5 20.5v-17M3.5 3.75h17M6.5 7.75l4-4M16.5 3.75v3" />
      <g className="icon-lower">
        <path d="M16.5 6v3" />
        <path d="M14.75 9h3.5v2.5h-3.5z" />
      </g>
      <path d="M3 20.5h18" />
      <path d="M11 20.5v-5.25h7.5v5.25" />
    </>
  ),
  // Hard hat with a drop of oil beneath it. The drop falls a little.
  'workforce-solutions': (
    <>
      <path d="M5 11.5a7 7 0 0 1 14 0" />
      <path d="M3 11.5h18" />
      <path d="M12 4.5v3.25M8.9 5.4l.9 2.5M15.1 5.4l-.9 2.5" />
      <path
        className="icon-fall"
        d="M12 14.2c-1.6 2.1-2.5 3.3-2.5 4.3a2.5 2.5 0 0 0 5 0c0-1-.9-2.2-2.5-4.3z"
      />
    </>
  ),
  // Monitor showing a heartbeat. The line runs off and is traced again.
  'it-healthcare': (
    <>
      <rect x="3" y="4" width="18" height="12.5" rx="2" />
      <path
        className="icon-trace"
        pathLength={1}
        d="M6 10.5h2.6l1.4-2.8 2 5.6 1.4-2.8H18"
      />
      <path d="M12 16.5v4M8 20.5h8" />
    </>
  ),
  // Recycling arrows. They turn a third of the way round, onto each other's places.
  'recycling-biomass': (
    <g className="icon-turn">
      <path d={RECYCLING_ARROW} />
      <path d={RECYCLING_ARROW} transform="rotate(120 12 12)" />
      <path d={RECYCLING_ARROW} transform="rotate(240 12 12)" />
    </g>
  ),
  // Gear. It turns by one tooth.
  'other-services': (
    <g className="icon-turn icon-turn-tooth">
      <path d="M10.66 5.95L10.86 3.37L13.14 3.37L13.34 5.95L15.33 6.77L17.3 5.1L18.9 6.7L17.23 8.67L18.05 10.66L20.63 10.86L20.63 13.14L18.05 13.34L17.23 15.33L18.9 17.3L17.3 18.9L15.33 17.23L13.34 18.05L13.14 20.63L10.86 20.63L10.66 18.05L8.67 17.23L6.7 18.9L5.1 17.3L6.77 15.33L5.95 13.34L3.37 13.14L3.37 10.86L5.95 10.66L6.77 8.67L5.1 6.7L6.7 5.1L8.67 6.77z" />
      <circle cx="12" cy="12" r="2.9" />
    </g>
  ),
}

/** A division's icon: violet line art on a soft lilac tile. Decorative, so hidden from assistive technology. */
export function DivisionIcon({ slug }: DivisionIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="division-icon mb-5 size-12 overflow-hidden rounded-xl bg-surface fill-none stroke-accent stroke-[1.5] p-2.5 [stroke-linecap:round] [stroke-linejoin:round]"
    >
      {ICONS[slug]}
    </svg>
  )
}
