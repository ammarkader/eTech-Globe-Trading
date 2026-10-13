import type { ReactElement } from 'react'
import { cn } from '../../lib/utils'
import type { SceneId } from '../../types/media'

interface SceneProps {
  scene: SceneId
  className?: string
}

/**
 * The seven illustrated scenes of etech-final.html, with the same drawing data.
 * They sit behind the header of a division or commodity page, and the crane also
 * fills the tile of a project that has no photograph.
 *
 * The two colours are the ones etech-final.html resolves the artwork to: the pale
 * lilac of --color-surface (#e2e4ff) and --color-accent-soft (#9386fe).
 * The movement is CSS animation (src/styles/illustrations.css) and stops when the
 * visitor prefers reduced motion.
 */
const SCENES: Record<SceneId, ReactElement> = {
  // Cargo ship crossing moving water, with a gull.
  ship: (
    <>
      <g className="sc-waves">
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".5"
          d="M-600 240 q25-12 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0"
        />
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".25"
          d="M-600 262 q25-10 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0"
        />
      </g>
      <g className="sc-ship">
        <g className="sc-bob">
          <path
            stroke="#e2e4ff"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M0 220 h210 l-22 26 h-170 z"
          />
          <rect
            stroke="#9386fe"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            x="30"
            y="196"
            width="34"
            height="24"
          />
          <rect
            stroke="#9386fe"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            x="68"
            y="196"
            width="34"
            height="24"
          />
          <rect
            stroke="#e2e4ff"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            x="106"
            y="196"
            width="34"
            height="24"
          />
          <rect
            stroke="#9386fe"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            x="49"
            y="172"
            width="34"
            height="24"
          />
          <rect
            stroke="#e2e4ff"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            x="87"
            y="172"
            width="34"
            height="24"
          />
          <path
            stroke="#e2e4ff"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M160 220 v-46 h30 v46 M168 174 v-14 h14 v14"
          />
        </g>
      </g>
      <g className="sc-gull">
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M0 0 q8-8 16 0 q8-8 16 0"
        />
      </g>
    </>
  ),
  // Tower crane with a swinging jib and hook, and floors rising beneath it.
  crane: (
    <>
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M380 290 V60 M396 290 V60 M380 60 h16"
      />
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".5"
        d="M380 100 l16 30 M396 130 l-16 30 M380 160 l16 30 M396 190 l-16 30 M380 220 l16 30"
      />
      <g className="sc-jib">
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M388 60 L240 60 M388 60 L560 60 M388 60 L388 40 L250 60 M388 40 L540 60"
        />
        <rect
          stroke="#9386fe"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          x="530"
          y="62"
          width="26"
          height="18"
        />
        <g className="sc-hook">
          <path
            stroke="#9386fe"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M300 60 V150"
          />
          <rect
            stroke="#9386fe"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            x="284"
            y="150"
            width="32"
            height="20"
          />
        </g>
      </g>
      <g className="sc-build">
        <rect
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          x="200"
          y="210"
          width="120"
          height="80"
        />
        <rect
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sc-floor f1"
          x="200"
          y="170"
          width="120"
          height="40"
        />
        <rect
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sc-floor f2"
          x="200"
          y="130"
          width="120"
          height="40"
        />
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".4"
          d="M220 290 v-120 M260 290 v-120 M300 290 v-120"
        />
      </g>
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M120 290 h460"
      />
    </>
  ),
  // Pumpjack nodding beside a derrick with a flickering flare.
  rig: (
    <>
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M440 290 L480 70 L520 290 M450 240 h60 M458 190 h44 M466 140 h28 M472 105 h16 M450 240 l52-50 M458 190 l36-50"
      />
      <path
        stroke="#9386fe"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M480 70 v-20"
      />
      <circle className="sc-flare" cx="480" cy="44" r="6" fill="#9386fe" />
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M150 290 L210 160 L270 290"
      />
      <g className="sc-beam">
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M110 150 L330 150"
        />
        <path
          stroke="#9386fe"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M110 150 q-26 6 -26 30 v18"
        />
        <path
          stroke="#9386fe"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M96 198 V270"
        />
        <circle
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="320"
          cy="150"
          r="7"
        />
      </g>
      <circle
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="300"
        cy="230"
        r="26"
      />
      <g className="sc-crank">
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M300 230 L322 214"
        />
      </g>
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M60 290 h520"
      />
      <circle
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="210"
        cy="160"
        r="5"
      />
    </>
  ),
  // Network of nodes pinging around a heartbeat trace.
  pulse: (
    <>
      <g opacity=".7">
        <circle className="sc-node n1" cx="430" cy="70" r="7" fill="#e2e4ff" />
        <circle className="sc-node n2" cx="520" cy="120" r="7" fill="#9386fe" />
        <circle className="sc-node n3" cx="470" cy="190" r="7" fill="#e2e4ff" />
        <circle className="sc-node n4" cx="360" cy="140" r="7" fill="#9386fe" />
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".4"
          d="M430 70 L520 120 L470 190 L360 140 Z M430 70 L470 190 M520 120 L360 140"
        />
      </g>
      <path
        className="sc-ecg"
        stroke="#9386fe"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M40 240 h120 l14-30 l16 60 l18-110 l18 120 l14-40 h80 l12-20 l12 20 h240"
      />
    </>
  ),
  // Two turning gears over a moving conveyor.
  gears: (
    <>
      <g className="sc-gear g1" style={{ transformOrigin: '420px 140px' }}>
        <circle
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="420"
          cy="140"
          r="58"
        />
        <circle
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="420"
          cy="140"
          r="16"
        />
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M420 70 v-14 M420 210 v14 M350 140 h-14 M490 140 h14 M370 90 l-10-10 M470 190 l10 10 M370 190 l-10 10 M470 90 l10-10"
        />
      </g>
      <g className="sc-gear g2" style={{ transformOrigin: '518px 230px' }}>
        <circle
          stroke="#9386fe"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="518"
          cy="230"
          r="34"
        />
        <circle
          stroke="#9386fe"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="518"
          cy="230"
          r="10"
        />
        <path
          stroke="#9386fe"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M518 186 v-10 M518 274 v10 M474 230 h-10 M562 230 h10"
        />
      </g>
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M60 280 h300"
      />
      <g className="sc-belt">
        <rect
          stroke="#9386fe"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          x="70"
          y="262"
          width="22"
          height="16"
        />
        <rect
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          x="140"
          y="262"
          width="22"
          height="16"
        />
        <rect
          stroke="#9386fe"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          x="210"
          y="262"
          width="22"
          height="16"
        />
      </g>
    </>
  ),
  // Open-pit mine with ore travelling up a conveyor.
  mine: (
    <>
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M120 280 L470 110"
      />
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M120 292 L470 122"
      />
      <circle
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="125"
        cy="286"
        r="9"
      />
      <circle
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="465"
        cy="116"
        r="9"
      />
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M470 116 v174 M450 290 l20-60 l20 60"
      />
      <g className="sc-ore">
        <circle cx="0" cy="0" r="7" fill="#9386fe" />
        <circle cx="-60" cy="29" r="6" fill="#e2e4ff" />
        <circle cx="-120" cy="58" r="8" fill="#9386fe" />
        <circle cx="-180" cy="87" r="6" fill="#e2e4ff" />
      </g>
      <path
        stroke="#9386fe"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M480 290 q50-80 100 0 z"
        opacity=".8"
      />
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 290 h580"
      />
    </>
  ),
  // Offshore platform with a working drill string, a flare and a passing supply boat.
  offshore: (
    <>
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M300 150 h230 v14 h-230 z"
      />
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M320 164 V300 M380 164 V300 M470 164 V300 M510 164 V300"
      />
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".45"
        d="M320 200 L380 240 M380 200 L320 240 M470 200 L510 240 M510 200 L470 240"
      />
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M395 150 L425 40 L455 150 M403 120 h44 M411 90 h28 M418 64 h14 M403 120 l36-30 M411 90 l22-26"
      />
      <g className="sc-drill">
        <path
          stroke="#9386fe"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M425 46 V178"
        />
        <rect
          stroke="#9386fe"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          x="418"
          y="60"
          width="14"
          height="10"
        />
      </g>
      <rect
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        x="470"
        y="122"
        width="44"
        height="28"
      />
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M478 130 h28 M478 138 h28"
      />
      <ellipse
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="335"
        cy="146"
        rx="26"
        ry="5"
      />
      <path
        stroke="#9386fe"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M329 144 v-4 M341 144 v-4 M329 142 h12"
      />
      <path
        stroke="#e2e4ff"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M530 152 L585 112"
      />
      <path
        className="sc-flare"
        fill="#9386fe"
        d="M585 112 q-8-14 2-26 q2 12 10 14 q-2 10-12 12z"
      />
      <g className="sc-waves">
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".55"
          d="M-600 236 q25-12 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0"
        />
        <path
          stroke="#e2e4ff"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".25"
          d="M-600 262 q25-10 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0"
        />
      </g>
      <g className="sc-boat">
        <g className="sc-bob">
          <path
            stroke="#e2e4ff"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M0 244 h120 l-14 18 h-96 z"
          />
          <path
            stroke="#e2e4ff"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 244 v-22 h34 v22 M20 222 v-10 h10 v10"
          />
          <path
            stroke="#9386fe"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M60 244 h44 M60 236 h40"
          />
        </g>
      </g>
    </>
  ),
}

export function Scene({ scene, className }: SceneProps) {
  return (
    <svg
      viewBox="0 0 600 300"
      aria-hidden="true"
      className={cn('scene', className)}
    >
      {SCENES[scene]}
    </svg>
  )
}
