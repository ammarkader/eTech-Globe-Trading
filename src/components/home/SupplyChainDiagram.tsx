/** The dashed route from source to delivery. The two dots travel along it. */
const ROUTE =
  'M110 110 C 260 30, 360 30, 380 110 S 600 170, 630 110 S 840 40, 890 110'

/** One trip along the route. The second dot sets off half a trip after the first. */
const TRIP_SECONDS = 7

/**
 * The supply-chain diagram of etech-final.html: mine, crane, ship and warehouse joined
 * by a dashed route, with two dots travelling along it.
 *
 * The dots move with SVG's own animateMotion, exactly as in the original; there is no
 * script. As there, the second dot waits in the top-left corner until it sets off.
 * Visitors who prefer reduced motion get two still dots instead (the original kept moving).
 */
export function SupplyChainDiagram() {
  return (
    <svg
      viewBox="0 0 1000 180"
      aria-hidden="true"
      className="block h-auto w-full"
    >
      <path
        d={ROUTE}
        fill="none"
        strokeWidth="2"
        strokeDasharray="6 8"
        className="stroke-accent"
      />
      <g
        fill="none"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-deep"
      >
        <path d="M70 140 l40-60 l40 60 z M92 140 l18-26 l18 26" />
        <path d="M350 140 v-60 h30 v60 M380 90 h40 M415 90 v30" />
        <rect x="345" y="140" width="80" height="6" />
        <path d="M590 120 h90 l-12 18 h-66 z M610 120 v-18 h20 v18 M634 120 v-14 h18 v14" />
        <path d="M850 140 v-50 l40-22 l40 22 v50 z M875 140 v-26 h30 v26" />
      </g>

      <g className="motion-reduce:hidden">
        <circle r="9" className="fill-accent">
          <animateMotion
            path={ROUTE}
            dur={`${TRIP_SECONDS}s`}
            repeatCount="indefinite"
            rotate="auto"
          />
        </circle>
        <circle r="5" className="fill-accent-soft">
          <animateMotion
            path={ROUTE}
            dur={`${TRIP_SECONDS}s`}
            begin={`${TRIP_SECONDS / 2}s`}
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Reduced motion: the same two dots, at rest at the start and half-way along the route. */}
      <g className="hidden motion-reduce:inline">
        <circle cx="110" cy="110" r="9" className="fill-accent" />
        <circle cx="491.6" cy="162.8" r="5" className="fill-accent-soft" />
      </g>
    </svg>
  )
}
