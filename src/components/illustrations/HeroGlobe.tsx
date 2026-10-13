import { cn } from '../../lib/utils'
import {
  dotLayers,
  GLOBE_EXTENT,
  GLOBE_RADIUS,
  grid,
  hubs,
  routePoints,
  routes,
} from './heroGlobeGeometry'

interface HeroGlobeProps {
  className?: string
}

/** How far the haze around the sphere reaches, as a share of the sphere's radius. */
const HAZE_REACH = 1.044

/** A light travels along each route in turn; these are the routes' places in that order. */
const PULSE_ORDER = [0, 4, 2, 7, 5, 1, 8, 3, 6]

/**
 * The globe of the homepage hero: ETECH hubs in navy, trade routes and their far ends
 * in violet, on a dotted sphere with its parallels and meridians.
 *
 * It is drawn as SVG from geometry worked out on a sphere (heroGlobeGeometry.ts).
 * It is decorative: the legend beside it and the hero text say what it shows, so the
 * hero hides it from assistive technology.
 *
 * It moves in two quiet ways (src/styles/illustrations.css): a faint light travels
 * along each route now and then, and a soft patch of light crosses the sphere
 * slowly, strengthening the dots it passes over. Neither runs for visitors who
 * prefer reduced motion.
 */
export function HeroGlobe({ className }: HeroGlobeProps) {
  const size = GLOBE_EXTENT * 2

  return (
    <svg
      viewBox={`${-GLOBE_EXTENT} ${-GLOBE_EXTENT} ${size} ${size}`}
      width={Math.round(size)}
      height={Math.round(size)}
      className={cn('hero-globe', className)}
    >
      <defs>
        {/* The body of the sphere: lit from the upper left, faintly lilac towards the edge. */}
        <radialGradient id="hero-globe-body" cx="37%" cy="31%" r="76%">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".6" stopColor="#f8f7ff" />
          <stop offset="1" stopColor="#f0eeff" />
        </radialGradient>
        {/* A violet tint that gathers at the very edge, where the surface turns away. */}
        <radialGradient id="hero-globe-limb">
          <stop
            offset=".8"
            className="[stop-color:var(--color-accent)]"
            stopOpacity="0"
          />
          <stop
            offset="1"
            className="[stop-color:var(--color-accent)]"
            stopOpacity=".06"
          />
        </radialGradient>
        {/* A thin haze just outside the sphere. It ends short of the legend below the globe. */}
        <radialGradient id="hero-globe-haze">
          <stop
            offset=".954"
            className="[stop-color:var(--color-accent)]"
            stopOpacity="0"
          />
          <stop
            offset=".961"
            className="[stop-color:var(--color-accent)]"
            stopOpacity=".1"
          />
          <stop
            offset="1"
            className="[stop-color:var(--color-accent)]"
            stopOpacity="0"
          />
        </radialGradient>
        {/* The outline is stronger on the side away from the light. */}
        <linearGradient id="hero-globe-rim" x1="18%" y1="12%" x2="82%" y2="88%">
          <stop
            offset="0"
            className="[stop-color:var(--color-accent-soft)]"
            stopOpacity=".28"
          />
          <stop
            offset="1"
            className="[stop-color:var(--color-accent)]"
            stopOpacity=".4"
          />
        </linearGradient>
        {/* A soft patch of light that crosses the sphere (moved by CSS). It shows the second layer of dots. */}
        <radialGradient id="hero-globe-glow">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask
          id="hero-globe-light"
          maskUnits="userSpaceOnUse"
          x={-GLOBE_RADIUS}
          y={-GLOBE_RADIUS}
          width={GLOBE_RADIUS * 2}
          height={GLOBE_RADIUS * 2}
        >
          <circle
            r={GLOBE_RADIUS * 0.62}
            fill="url(#hero-globe-glow)"
            className="globe-light"
          />
        </mask>
      </defs>

      <circle r={GLOBE_RADIUS * HAZE_REACH} fill="url(#hero-globe-haze)" />
      <circle r={GLOBE_RADIUS} fill="url(#hero-globe-body)" />

      {/* Parallels and meridians, kept fainter than the dots: the far side, then the dots, then the near side. */}
      <path
        d={grid.far}
        fill="none"
        className="stroke-accent"
        strokeWidth=".8"
        strokeOpacity=".04"
      />
      <g
        id="hero-globe-dots"
        fill="none"
        strokeLinecap="round"
        className="stroke-accent"
      >
        {dotLayers.map((layer) => (
          <path
            key={layer.size}
            d={layer.path}
            strokeWidth={layer.size}
            strokeOpacity={layer.opacity}
          />
        ))}
      </g>
      {/* The same dots once more, seen only where the travelling light falls: there they are stronger. */}
      <use href="#hero-globe-dots" mask="url(#hero-globe-light)" />
      <path
        d={grid.near}
        fill="none"
        className="stroke-accent"
        strokeWidth=".8"
        strokeOpacity=".1"
      />

      <circle r={GLOBE_RADIUS} fill="url(#hero-globe-limb)" />
      <circle
        r={GLOBE_RADIUS}
        fill="none"
        stroke="url(#hero-globe-rim)"
        strokeWidth="1.2"
      />

      {/* Trade routes, and the light that travels along each. */}
      <g fill="none" strokeLinecap="round" className="stroke-accent">
        {routes.map((route) => (
          <path key={route} d={route} strokeWidth="1.5" strokeOpacity=".62" />
        ))}
        {routes.map((route, index) => (
          <path
            key={route}
            d={route}
            pathLength={1}
            strokeWidth="2.6"
            className="globe-pulse"
            style={{ animationDelay: `${PULSE_ORDER[index] * 1.6}s` }}
          />
        ))}
      </g>

      {/* ETECH hubs are a navy point in a white ring, inside a fine outer ring. The outer rings go first. */}
      <g
        fill="#fff"
        fillOpacity=".55"
        className="stroke-deep"
        strokeOpacity=".2"
      >
        {hubs.map(([x, y]) => (
          <circle key={`${x} ${y}`} cx={x} cy={y} r="16" />
        ))}
      </g>

      {/* The far ends of the routes. */}
      <g className="fill-accent" stroke="#fff" strokeWidth="2.2">
        {routePoints.map(([x, y]) => (
          <circle key={`${x} ${y}`} cx={x} cy={y} r="5.6" />
        ))}
      </g>

      <g className="fill-deep" stroke="#fff" strokeWidth="2.8">
        {hubs.map(([x, y]) => (
          <circle key={`${x} ${y}`} cx={x} cy={y} r="8" />
        ))}
      </g>
    </svg>
  )
}
