import { commodities } from '../data/commodities'
import { projects } from '../data/projects'
import type { Commodity } from '../types/commodity'
import type { Division } from '../types/division'
import type { Project } from '../types/project'

/**
 * The commodities listed at the foot of a division page, as etech-final.html picks
 * them: every commodity in the division's groups or named by it, in catalogue order.
 */
export function getDivisionCommodities(division: Division): Commodity[] {
  const groups = division.related?.groups ?? []
  const slugs = division.related?.commodities ?? []

  return commodities.filter(
    (commodity) =>
      groups.includes(commodity.group) || slugs.includes(commodity.slug),
  )
}

/** The projects shown on a division page, in catalogue order. */
export function getDivisionProjects(division: Division): Project[] {
  return projects.filter((project) => project.division === division.slug)
}
