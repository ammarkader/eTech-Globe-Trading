import type { CSSProperties } from 'react'
import { cn } from '../../lib/utils'
import {
  dotLayers,
  GLOBE_EXTENT,
  GLOBE_RADIUS,
  grid,
  HUB_RING,
  hubs,
  routePoints,
  routes,
} from './heroGlobeGeometry'
import { land } from './heroGlobeLand'

interface HeroGlobeProps {
  className?: string
}

/** How far the haze around the sphere reaches, as a share of the sphere's radius. */
const HAZE_REACH = 1.044

/**
 * A light travels along each route in turn, one starting every 1.6s (16 tenths of a
 * second); these are the routes' places in that order. A light takes two places'
 * time to arrive, so a route that continues another from the hub where it ends
 * comes two places after it, and the light seems to pass through the hub and go on:
 * Dubai to India to Indonesia and back to Dubai, then on to Saudi Arabia.
 */
const PULSE_ORDER = [6, 5, 0, 3, 7, 2, 4, 1]
const PULSE_STAGGER_TENTHS = 16

/**
 * The globe of the homepage hero: ETECH hubs in navy, trade routes and their far ends
 * in violet, on a dotted sphere with its parallels and meridians and, faintly, the
 * continents, so each marker stands on the place it is named for.
 *
 * It is a flat drawing: SVG from geometry worked out on a sphere (heroGlobeGeometry.ts)
 * and a land outline made for the same view (heroGlobeLand.ts).
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
        {/* The land is drawn past the edge of the sphere and cut off at it. */}
        <clipPath id="hero-globe-disc">
          <circle r={GLOBE_RADIUS} />
        </clipPath>
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
      {/* The continents: a soft tint with a fine coastline, under the dots, the lines and the network. */}
      <path
        d={land}
        clipPath="url(#hero-globe-disc)"
        fillRule="evenodd"
        className="fill-accent stroke-accent"
        fillOpacity=".07"
        strokeWidth=".7"
        strokeOpacity=".2"
        strokeLinejoin="round"
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
          <path
            key={route.path}
            d={route.path}
            strokeWidth="1.5"
            strokeOpacity=".62"
          />
        ))}
        {routes.map((route, index) => (
          <path
            key={route.path}
            d={route.path}
            pathLength={1}
            strokeWidth="2.6"
            className="globe-pulse"
            style={
              {
                '--light': route.light,
                animationDelay: `${(PULSE_ORDER[index] * PULSE_STAGGER_TENTHS) / 10}s`,
              } as CSSProperties
            }
          />
        ))}
      </g>

      {/* ETECH hubs are a navy point in a white ring, inside a fine outer ring where the routes stop. The outer rings go first. */}
      <g
        fill="#fff"
        fillOpacity=".55"
        className="stroke-deep"
        strokeOpacity=".2"
      >
        {hubs.map(([x, y]) => (
          <circle key={`${x} ${y}`} cx={x} cy={y} r={HUB_RING} />
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
