import type { Highlight } from './common'
import type { Photo, SceneId } from './media'

export type CommodityGroupId =
  | 'minerals-ores'
  | 'agri-commodities'
  | 'fishery-meat'
  | 'petroleum-refinery-products'
  | 'fertilisers'
  | 'construction-materials'
  | 'recycled-biomass'

/** Row labels of the specification table. Each group shows its own subset, in its own order. */
export type SpecField =
  | 'Grade / assay'
  | 'Form & size'
  | 'Moisture'
  | 'Origin'
  | 'Packing'
  | 'Incoterms'
  | 'Typical lot size'
  | 'Variety / grade'
  | 'Crop year'
  | 'Grade / specification'
  | 'Key parameters'
  | 'Grade'
  | 'Form'
  | 'Products'
  | 'Processing'
  | 'Sizes / types'
  | 'Source'
  | 'Delivery'

export interface CommodityGroup {
  id: CommodityGroupId
  /** Shown as the filter label, the card label and the page tag. */
  name: string
  /** Specification rows for commodities in this group, in display order. */
  specFields: readonly SpecField[]
  scene: SceneId
  /** Licences & compliance text for the whole group, unless a commodity has its own. */
  licenceNote?: string
}

export interface CommodityRangeItem {
  code: string
  name: string
  description: string
  specs: readonly string[]
}

/** A grade or product range shown as cards on a commodity page. */
export interface CommodityRange {
  title: string
  items: readonly CommodityRangeItem[]
  note: string
}

export interface Commodity {
  slug: string
  name: string
  group: CommodityGroupId
  /** Short line on the commodity card. */
  summary: string
  /** Lead paragraph of the commodity page; also its meta description. */
  use: string
  /** Only the values stated for this commodity. Group defaults are applied when rendering. */
  specs: Partial<Record<SpecField, string>>
  highlights?: readonly Highlight[]
  /** "Quality documents" note. */
  qualityNote?: string
  /** "Licences & compliance" note specific to this commodity. */
  licenceNote?: string
  photos?: readonly Photo[]
  range?: CommodityRange
}
