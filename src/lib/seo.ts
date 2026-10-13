import { site } from '../data/site'

/** Absolute canonical URL for an application path. */
export function canonicalUrl(path: string): string {
  return new URL(path, site.origin).href
}

/** Document title for an inner page, in the format used by etech-final.html. */
export function pageTitle(name: string): string {
  return `${name} — ${site.name}`
}
