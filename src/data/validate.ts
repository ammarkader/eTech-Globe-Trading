import { commodities } from './commodities'
import { commodityGroups } from './commodityGroups'
import { divisions } from './divisions'
import { faqItems } from './faq'
import { insideEtech } from './insideEtech'
import { journey } from './journey'
import { leadershipMessages } from './leadership'
import { locations } from './locations'
import { marketWatch } from './markets'
import { latestNews } from './news'
import { projects } from './projects'
import { team } from './team'
import { visions } from './visions'
import { whyChoose } from './whyChoose'

/** Item counts fixed by the approved migration specification. */
const EXPECTED_COUNTS = [
  ['divisions', divisions, 6],
  ['commodities', commodities, 39],
  ['commodity groups', commodityGroups, 7],
  ['projects', projects, 13],
  ['journey items', journey, 8],
  ['why-choose items', whyChoose, 8],
  ['leadership messages', leadershipMessages, 2],
  ['team members', team, 7],
  ['locations', locations, 5],
  ['GCC visions', visions, 5],
  ['latest-news items', latestNews, 3],
  ['market-watch items', marketWatch, 3],
  ['Inside ETECH tabs', insideEtech, 4],
  ['FAQ entries', faqItems, 25],
] as const

const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/

function duplicates(values: readonly string[]): string[] {
  return values.filter((value, index) => values.indexOf(value) !== index)
}

/**
 * The slug etech-final.html derives from a commodity's name. Old links of the form
 * #/commodity/<slug> are redirected by it, so the two must not drift apart.
 */
function slugFromName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Checks the content data for the mistakes that are easy to make when editing it.
 * Called when the React Router config loads, so a problem stops the build and the dev server.
 * It never changes the data.
 */
export function validateData(): void {
  const problems: string[] = []

  for (const [label, items, expected] of EXPECTED_COUNTS) {
    if (items.length !== expected) {
      problems.push(`Expected ${expected} ${label}, found ${items.length}.`)
    }
  }

  const divisionSlugs = divisions.map((division) => division.slug)
  const commoditySlugs = commodities.map((commodity) => commodity.slug)
  const groupIds: readonly string[] = commodityGroups.map((group) => group.id)

  for (const slug of [...divisionSlugs, ...commoditySlugs]) {
    if (!SLUG_PATTERN.test(slug)) problems.push(`Invalid slug "${slug}".`)
  }
  for (const [label, values] of [
    ['division slug', divisionSlugs],
    ['commodity slug', commoditySlugs],
    ['commodity group id', groupIds],
    ['FAQ question', faqItems.map((item) => item.question)],
    ['Inside ETECH tab id', insideEtech.map((item) => item.id)],
  ] as const) {
    for (const value of duplicates(values)) {
      problems.push(`Duplicate ${label} "${value}".`)
    }
  }

  for (const commodity of commodities) {
    const group = commodityGroups.find((item) => item.id === commodity.group)
    if (!group) {
      problems.push(
        `Commodity "${commodity.slug}" has unknown group "${commodity.group}".`,
      )
      continue
    }
    for (const field of Object.keys(commodity.specs)) {
      if (!(group.specFields as readonly string[]).includes(field)) {
        problems.push(
          `Commodity "${commodity.slug}" has the specification "${field}", which its group does not show.`,
        )
      }
    }
  }
  // Everything a commodity page needs to render.
  for (const commodity of commodities) {
    const { slug } = commodity
    if (slug !== slugFromName(commodity.name)) {
      problems.push(
        `Commodity "${slug}" should have the slug "${slugFromName(commodity.name)}", from its name.`,
      )
    }
    if (!commodity.name.trim() || !commodity.use.trim()) {
      problems.push(`Commodity "${slug}" needs a name and a lead text.`)
    }
    for (const code of duplicates(
      (commodity.range?.items ?? []).map((item) => item.code),
    )) {
      problems.push(`Commodity "${slug}" lists the range code "${code}" twice.`)
    }
    for (const item of commodity.range?.items ?? []) {
      for (const spec of duplicates(item.specs)) {
        problems.push(
          `Commodity "${slug}", range item "${item.code}": "${spec}" is listed twice.`,
        )
      }
    }
    for (const image of duplicates(
      (commodity.photos ?? []).map((photo) => photo.image),
    )) {
      problems.push(`Commodity "${slug}" shows the image "${image}" twice.`)
    }
  }
  for (const group of commodityGroups) {
    if (!commodities.some((commodity) => commodity.group === group.id)) {
      problems.push(`Commodity group "${group.id}" has no commodities.`)
    }
  }

  // Everything a division page needs to render.
  for (const division of divisions) {
    const { slug } = division
    if (!division.name.trim() || !division.lead.trim()) {
      problems.push(`Division "${slug}" needs a name and a lead text.`)
    }
    if (division.offers.length === 0) {
      problems.push(`Division "${slug}" has nothing under "What we offer".`)
    }
    for (const title of duplicates(
      division.offers.map((offer) => offer.title),
    )) {
      problems.push(`Division "${slug}" lists the offer "${title}" twice.`)
    }
    for (const offer of division.offers) {
      if (offer.kind !== 'list') continue
      for (const item of duplicates(offer.items)) {
        problems.push(
          `Division "${slug}", offer "${offer.title}": "${item}" is listed twice.`,
        )
      }
    }
    for (const image of duplicates(
      (division.photos ?? []).map((photo) => photo.image),
    )) {
      problems.push(`Division "${slug}" shows the image "${image}" twice.`)
    }
  }
  for (const [label, items] of [
    ['division', divisions],
    ['commodity', commodities],
  ] as const) {
    for (const item of items) {
      for (const text of duplicates(
        (item.highlights ?? []).map((highlight) => highlight.label),
      )) {
        problems.push(
          `The ${label} "${item.slug}" has two headline figures labelled "${text}".`,
        )
      }
    }
  }
  for (const name of duplicates(projects.map((project) => project.name))) {
    problems.push(`Duplicate project name "${name}".`)
  }

  for (const division of divisions) {
    for (const groupId of division.related?.groups ?? []) {
      if (!groupIds.includes(groupId)) {
        problems.push(
          `Division "${division.slug}" lists unknown commodity group "${groupId}".`,
        )
      }
    }
    for (const slug of division.related?.commodities ?? []) {
      if (!commoditySlugs.includes(slug)) {
        problems.push(
          `Division "${division.slug}" lists unknown commodity "${slug}".`,
        )
      }
    }
  }

  for (const project of projects) {
    if (!divisionSlugs.includes(project.division)) {
      problems.push(
        `Project "${project.name}" belongs to unknown division "${project.division}".`,
      )
    }
  }
  for (const item of latestNews) {
    if (!commoditySlugs.includes(item.commodity)) {
      problems.push(
        `News item "${item.title}" links to unknown commodity "${item.commodity}".`,
      )
    }
  }
  for (const item of insideEtech) {
    if (
      item.link.kind === 'division' &&
      !divisionSlugs.includes(item.link.slug)
    ) {
      problems.push(
        `Inside ETECH tab "${item.id}" links to unknown division "${item.link.slug}".`,
      )
    }
  }

  const years = visions.map((vision) => vision.year)
  if (years.some((year, index) => index > 0 && year < years[index - 1])) {
    problems.push('GCC visions must be in ascending order of year.')
  }

  if (problems.length > 0) {
    throw new Error(`Content data is invalid:\n- ${problems.join('\n- ')}`)
  }
}
