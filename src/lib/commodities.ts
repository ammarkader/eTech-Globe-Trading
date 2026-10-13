import { commodities } from '../data/commodities'
import {
  DEFAULT_INCOTERMS,
  DEFAULT_PACKING,
  findCommodityGroup,
} from '../data/commodityGroups'
import type { Commodity, SpecField } from '../types/commodity'

export interface SpecRow {
  label: SpecField
  value: string
}

const SPEC_DEFAULTS: Partial<Record<SpecField, string>> = {
  Incoterms: DEFAULT_INCOTERMS,
  Packing: DEFAULT_PACKING,
}

/**
 * Rows of a commodity's specification table, as etech-final.html builds them:
 * the group's fields in order, using the commodity's own value, then the default
 * for Incoterms and Packing. Fields with no value are left out.
 */
export function getSpecRows(commodity: Commodity): SpecRow[] {
  const fields = findCommodityGroup(commodity.group)?.specFields ?? []

  return fields.flatMap((label) => {
    const value = commodity.specs[label] ?? SPEC_DEFAULTS[label]
    return value ? [{ label, value }] : []
  })
}

/** "Licences & compliance" text: the commodity's own note, otherwise its group's. */
export function getLicenceNote(commodity: Commodity): string | undefined {
  return (
    commodity.licenceNote ?? findCommodityGroup(commodity.group)?.licenceNote
  )
}

/**
 * A commodity's name as it reads in the middle of a sentence ("Request silica sand").
 * Only the capital of an ordinary first word is dropped. Everything else stays as the
 * name is written, so abbreviations and grades keep their capitals:
 * "Jet fuel A1" becomes "jet fuel A1", and "LNG & LPG" is left alone.
 */
export function nameInSentence(name: string): string {
  return /^[A-Z][a-z]/.test(name)
    ? name.charAt(0).toLowerCase() + name.slice(1)
    : name
}

/** How many other commodities of the same group a commodity page links to. */
const RELATED_LIMIT = 4

/**
 * The commodities linked at the foot of a commodity page, as etech-final.html picks
 * them: the first four others of the same group, in catalogue order.
 */
export function getRelatedCommodities(commodity: Commodity): Commodity[] {
  return commodities
    .filter((other) => other.group === commodity.group && other !== commodity)
    .slice(0, RELATED_LIMIT)
}
