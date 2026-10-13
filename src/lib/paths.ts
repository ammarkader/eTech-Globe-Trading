import { href } from 'react-router'
import type { SectionId } from '../types/site'

/**
 * URL builders for the application routes. `href` is checked against src/routes.ts,
 * so a path that no longer matches a route is a type error.
 * Convention: no trailing slash, except the homepage.
 */
export const HOME_PATH = href('/')

export function divisionPath(slug: string): string {
  return href('/divisions/:slug', { slug })
}

export function commodityPath(slug: string): string {
  return href('/commodities/:slug', { slug })
}

/** A section of the homepage. Sections are anchors on the homepage, not routes. */
export function sectionPath(sectionId: SectionId): string {
  return `${HOME_PATH}#${sectionId}`
}
