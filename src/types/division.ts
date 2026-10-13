import type { Highlight } from './common'
import type { CommodityGroupId } from './commodity'
import type { Photo, SceneId } from './media'

/** One row of "What we offer": either a sentence or a list of items. */
export type DivisionOffer =
  | { kind: 'text'; title: string; text: string }
  | { kind: 'list'; title: string; items: readonly string[] }

/** Commodities listed at the foot of a division page. */
export interface DivisionRelated {
  heading: string
  /** Every commodity in these groups is listed. */
  groups?: readonly CommodityGroupId[]
  /** Individual commodity slugs to list as well. */
  commodities?: readonly string[]
}

export interface Division {
  slug: string
  name: string
  /** Text on the division card. */
  summary: string
  /** Lead paragraph of the division page; also its meta description. */
  lead: string
  scene: SceneId
  highlights?: readonly Highlight[]
  offers: readonly DivisionOffer[]
  /** Paragraph shown after the offers. */
  closingNote?: string
  /** "Our roots" paragraph. */
  roots?: string
  photos?: readonly Photo[]
  related?: DivisionRelated
}
