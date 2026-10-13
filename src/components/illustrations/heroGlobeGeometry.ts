/**
 * Geometry of the hero globe (HeroGlobe.tsx): a sphere seen straight on, with every
 * dot, grid line and route worked out on that sphere and then flattened onto the page.
 *
 * Drawing units are those of the globe in etech-final.html: the sphere has a radius of
 * 347.6 and sits in the middle of a square 862.1 wide. In the calculations x runs to
 * the right, y down the page and z towards the viewer.
 *
 * The hubs and route points stand where they stood in etech-final.html. They are a
 * schematic of the network, not a map.
 */

type Point = readonly [x: number, y: number]
type Vector = readonly [x: number, y: number, z: number]

/** Radius of the sphere. */
export const GLOBE_RADIUS = 347.6
/** Half the width of the square the globe is drawn in. */
export const GLOBE_EXTENT = 431.05

const R = GLOBE_RADIUS
const DEGREES = Math.PI / 180

/** The north pole leans this far towards the viewer, and this far to the left. */
const TILT = 24 * DEGREES
const ROLL = -9 * DEGREES

const round = (value: number) => Math.round(value * 10) / 10

/** A point of the globe, by latitude and longitude, as seen by the viewer. */
function onGlobe(latitude: number, longitude: number): Vector {
  const x = Math.cos(latitude) * Math.sin(longitude)
  const y = Math.sin(latitude)
  const z = Math.cos(latitude) * Math.cos(longitude)
  // lean the pole towards the viewer, then roll the globe
  const tiltedY = y * Math.cos(TILT) - z * Math.sin(TILT)
  const tiltedZ = y * Math.sin(TILT) + z * Math.cos(TILT)

  return [
    R * (x * Math.cos(ROLL) + tiltedY * Math.sin(ROLL)),
    R * (x * Math.sin(ROLL) - tiltedY * Math.cos(ROLL)),
    R * tiltedZ,
  ]
}

/** The point of the near side of the sphere that is seen at a place on the page. */
function onSurface([x, y]: Point): Vector {
  return [x, y, Math.sqrt(R * R - x * x - y * y)]
}

// ---- Nodes ------------------------------------------------------------------

/** ETECH hubs. */
export const hubs: readonly Point[] = [
  [-54.1, -43.3],
  [136.6, 48.8],
  [-115.7, -43.3],
  [284, 141.7],
]

/** The other ends of the trade routes. */
export const routePoints: readonly Point[] = [
  [-43.9, -36],
  [154.5, 9.3],
  [53.7, -24],
  [-224.5, 216],
  [-181.4, -129.4],
]

// ---- Dots -------------------------------------------------------------------

/** Dots of one size and strength, drawn as a single path of round-capped specks. */
export interface DotLayer {
  path: string
  /** Diameter of the dots. */
  size: number
  opacity: number
}

/** A ring of dots every 5 degrees of latitude, and in a ring a dot every 5 degrees of longitude. */
const RING_STEP = 5
const RING_DOTS = 360 / RING_STEP
const DOT_LEVELS = 6
/** Where the light comes from: above and to the left of the viewer. */
const LIGHT: Vector = [-0.42, -0.5, 0.757]
/** Dots keep this far from the centre of a hub or route point. */
const HUB_CLEARANCE = 21
const POINT_CLEARANCE = 12

function nearNode(x: number, y: number): boolean {
  const within = (nodes: readonly Point[], distance: number) =>
    nodes.some(([nx, ny]) => Math.hypot(x - nx, y - ny) < distance)

  return within(hubs, HUB_CLEARANCE) || within(routePoints, POINT_CLEARANCE)
}

/**
 * How many dots a ring has. Towards the poles a ring keeps every second, fourth or
 * eighth dot, so the spacing stays even while every dot still stands in a column
 * that runs along a meridian.
 */
function dotsInRing(latitude: number): number {
  const fromEquator = Math.abs(latitude)
  if (fromEquator >= 85) return RING_DOTS / 8
  if (fromEquator >= 75) return RING_DOTS / 4
  if (fromEquator >= 60) return RING_DOTS / 2
  return RING_DOTS
}

/**
 * The dotted surface: a lattice of dots on the parallels and meridians of the globe,
 * one every 5 degrees, so that the lines drawn every 30 degrees run through every
 * sixth row and column of it. Only the near side is drawn. A dot is larger and
 * stronger the more it faces the viewer and the light, so the field thins out and
 * tightens towards the edge as a sphere does.
 */
function buildDots(): DotLayer[] {
  const paths = Array.from({ length: DOT_LEVELS }, () => '')

  for (let latitude = RING_STEP - 90; latitude < 90; latitude += RING_STEP) {
    const count = dotsInRing(latitude)

    for (let index = 0; index < count; index++) {
      const [x, y, z] = onGlobe(
        latitude * DEGREES,
        (index / count) * 2 * Math.PI,
      )
      if (z < R * 0.035 || nearNode(x, y)) continue

      const facing = z / R
      const lit = (x * LIGHT[0] + y * LIGHT[1] + z * LIGHT[2]) / R
      const strength = Math.min(1, Math.max(0, 0.72 * facing + 0.28 * lit))
      const level = Math.min(DOT_LEVELS - 1, Math.floor(strength * DOT_LEVELS))
      paths[level] += `M${round(x)} ${round(y)}h.01`
    }
  }

  return paths.map((path, level) => {
    const strength = (level + 0.5) / DOT_LEVELS
    return {
      path,
      size: round(1.3 + 2.1 * strength),
      opacity: Math.round((0.11 + 0.36 * strength) * 100) / 100,
    }
  })
}

export const dotLayers = buildDots()

// ---- Parallels and meridians ------------------------------------------------

/**
 * A circle on the sphere, as two elliptical arcs: the part on the near side and the
 * part on the far side. `centre` is the middle of the circle; `along` and `across`
 * are two radii of it at right angles.
 */
function circleArcs(centre: Vector, along: Vector, across: Vector) {
  const at = (angle: number): Point => [
    centre[0] + Math.cos(angle) * along[0] + Math.sin(angle) * across[0],
    centre[1] + Math.cos(angle) * along[1] + Math.sin(angle) * across[1],
  ]
  // the ellipse the circle makes on the page
  const a = along[0] ** 2 + across[0] ** 2
  const b = along[0] * along[1] + across[0] * across[1]
  const c = along[1] ** 2 + across[1] ** 2
  const spread = Math.hypot((a - c) / 2, b)
  const radiusX = round(Math.sqrt((a + c) / 2 + spread))
  const radiusY = round(Math.sqrt(Math.max(0, (a + c) / 2 - spread)))
  const rotation = round((0.5 * Math.atan2(2 * b, a - c)) / DEGREES)
  const clockwise = along[0] * across[1] - along[1] * across[0] > 0 ? 1 : 0

  const arc = (from: number, to: number) => {
    const [x0, y0] = at(from)
    const [x1, y1] = at(to)
    // An arc of exactly half the circle (every meridian) must come out the same wherever
    // this runs, so a hair over a half does not count as the larger arc.
    const large = to - from > Math.PI + 1e-9 ? 1 : 0
    return `M${round(x0)} ${round(y0)}A${radiusX} ${radiusY} ${rotation} ${large} ${clockwise} ${round(x1)} ${round(y1)}`
  }

  // where the circle crosses from the near side to the far side
  const reach = Math.hypot(along[2], across[2])
  const nearest = Math.atan2(across[2], along[2])
  const cut = reach === 0 ? 2 : -centre[2] / reach

  if (cut >= 1)
    return { near: '', far: arc(0, Math.PI) + arc(Math.PI, 2 * Math.PI) }
  if (cut <= -1)
    return { near: arc(0, Math.PI) + arc(Math.PI, 2 * Math.PI), far: '' }

  const half = Math.acos(cut)
  return {
    near: arc(nearest - half, nearest + half),
    far: arc(nearest + half, nearest - half + 2 * Math.PI),
  }
}

const scale = (vector: Vector, factor: number): Vector => [
  vector[0] * factor,
  vector[1] * factor,
  vector[2] * factor,
]

/** Parallels every 30 degrees and meridians every 30 degrees. */
function buildGrid() {
  const pole = scale(onGlobe(Math.PI / 2, 0), 1 / R)
  const east = scale(onGlobe(0, Math.PI / 2), 1 / R)
  const front = scale(onGlobe(0, 0), 1 / R)
  let near = ''
  let far = ''
  const add = (arcs: { near: string; far: string }) => {
    near += arcs.near
    far += arcs.far
  }

  for (let degrees = -60; degrees <= 60; degrees += 30) {
    const latitude = degrees * DEGREES
    const radius = R * Math.cos(latitude)
    add(
      circleArcs(
        scale(pole, R * Math.sin(latitude)),
        scale(east, radius),
        scale(front, radius),
      ),
    )
  }
  for (let degrees = 0; degrees < 180; degrees += 30) {
    const longitude = degrees * DEGREES
    const through = scale(onGlobe(0, longitude), 1)
    add(circleArcs([0, 0, 0], through, scale(pole, R)))
  }

  return { near, far }
}

export const grid = buildGrid()

// ---- Routes -----------------------------------------------------------------

interface RoutePlan {
  from: Point
  to: Point
  /** How far the route swings out sideways at its middle, to keep it clear of a neighbour. */
  sway?: number
}

const [dubai, india, saudi, indonesia] = hubs
const [gulf, bay, sea, south, west] = routePoints

/** The nine routes of etech-final.html, between the same nodes. */
const ROUTES: readonly RoutePlan[] = [
  { from: dubai, to: india, sway: -9 },
  { from: dubai, to: saudi, sway: 9 },
  { from: dubai, to: indonesia, sway: -26 },
  { from: indonesia, to: gulf, sway: -15 },
  { from: south, to: bay },
  { from: gulf, to: sea, sway: 8 },
  { from: dubai, to: west, sway: -12 },
  { from: india, to: indonesia, sway: 9 },
  { from: saudi, to: west, sway: 10 },
]

/**
 * A route: the shortest way round the sphere between two nodes, lifted off the
 * surface in an arc that is higher the longer the route. Returned as a smooth curve.
 */
function buildRoute({ from, to, sway = 0 }: RoutePlan): string {
  const start = onSurface(from)
  const end = onSurface(to)
  const dot =
    (start[0] * end[0] + start[1] * end[1] + start[2] * end[2]) / (R * R)
  const angle = Math.acos(Math.min(1, dot))
  const lift = 0.04 + 0.24 * (angle / Math.PI)
  // sideways, across the line from one node to the other
  const length = Math.hypot(to[0] - from[0], to[1] - from[1])
  const side: Point = [-(to[1] - from[1]) / length, (to[0] - from[0]) / length]

  const at = (t: number): Point => {
    const s0 = Math.sin((1 - t) * angle) / Math.sin(angle)
    const s1 = Math.sin(t * angle) / Math.sin(angle)
    const arch = Math.sin(Math.PI * t)
    const height = 1 + lift * arch
    return [
      (s0 * start[0] + s1 * end[0]) * height + side[0] * sway * arch,
      (s0 * start[1] + s1 * end[1]) * height + side[1] * sway * arch,
    ]
  }

  // a smooth curve through evenly spaced points of the route
  const STEPS = 8
  const points = Array.from({ length: STEPS + 1 }, (_, index) =>
    at(index / STEPS),
  )
  let path = `M${round(points[0][0])} ${round(points[0][1])}`
  for (let index = 0; index < STEPS; index++) {
    const before = points[Math.max(0, index - 1)]
    const p0 = points[index]
    const p1 = points[index + 1]
    const after = points[Math.min(STEPS, index + 2)]
    path += `C${round(p0[0] + (p1[0] - before[0]) / 6)} ${round(p0[1] + (p1[1] - before[1]) / 6)} ${round(p1[0] - (after[0] - p0[0]) / 6)} ${round(p1[1] - (after[1] - p0[1]) / 6)} ${round(p1[0])} ${round(p1[1])}`
  }

  return path
}

export const routes: readonly string[] = ROUTES.map(buildRoute)
