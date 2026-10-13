import type { CommodityGroup, CommodityGroupId } from '../types/commodity'

/**
 * The seven commodity groups, in filter order.
 * `name` is the exact label shown on the filter, the cards and the page tag.
 */
export const commodityGroups: readonly CommodityGroup[] = [
  {
    id: 'minerals-ores',
    name: 'Minerals & Ores',
    specFields: [
      'Grade / assay',
      'Form & size',
      'Moisture',
      'Origin',
      'Packing',
      'Incoterms',
      'Typical lot size',
    ],
    scene: 'mine',
  },
  {
    id: 'agri-commodities',
    name: 'Agri Commodities',
    specFields: [
      'Origin',
      'Variety / grade',
      'Crop year',
      'Moisture',
      'Packing',
      'Incoterms',
      'Typical lot size',
    ],
    scene: 'ship',
    licenceNote:
      'Food and agri imports need the destination country’s import permits. We provide phytosanitary or health certificates and certificates of origin per shipment; the buyer provides its import licence or registration where required.',
  },
  {
    id: 'fishery-meat',
    name: 'Fishery & Meat',
    specFields: [
      'Products',
      'Form',
      'Processing',
      'Origin',
      'Packing',
      'Incoterms',
      'Typical lot size',
    ],
    scene: 'ship',
    licenceNote:
      'Fish and meat imports require veterinary health certificates, halal certificates where applicable, and the buyer’s import permit or establishment approval in the destination country. Shipped under cold chain.',
  },
  {
    id: 'petroleum-refinery-products',
    name: 'Petroleum & Refinery Products',
    specFields: [
      'Grade / specification',
      'Key parameters',
      'Origin',
      'Packing',
      'Incoterms',
      'Typical lot size',
    ],
    scene: 'rig',
  },
  {
    id: 'fertilisers',
    name: 'Fertilisers',
    specFields: [
      'Grade / specification',
      'Form',
      'Origin',
      'Packing',
      'Incoterms',
      'Typical lot size',
    ],
    scene: 'ship',
    licenceNote:
      'Fertiliser imports may require the buyer’s import licence or product registration in the destination country.',
  },
  {
    id: 'construction-materials',
    name: 'Construction Materials',
    specFields: [
      'Sizes / types',
      'Source',
      'Delivery',
      'Packing',
      'Incoterms',
      'Typical lot size',
    ],
    scene: 'crane',
  },
  {
    id: 'recycled-biomass',
    name: 'Recycled & Biomass',
    specFields: ['Grade', 'Origin', 'Packing', 'Incoterms', 'Typical lot size'],
    scene: 'gears',
    licenceNote:
      'Scrap imports often require the buyer’s import licence and a pre-shipment inspection certificate from an approved agency. Shipments are declared radiation-free and free of hazardous material.',
  },
]

/** Used for the Incoterms row when a commodity in a group with that row does not state its own. */
export const DEFAULT_INCOTERMS =
  'CIF, FOB or CFR; DAP and full end-to-end delivery on request'

/** Used for the Packing row when a commodity in a group with that row does not state its own. */
export const DEFAULT_PACKING =
  'Bulk, 1-ton jumbo bags, or customised packing on request'

export function findCommodityGroup(
  id: CommodityGroupId,
): CommodityGroup | undefined {
  return commodityGroups.find((group) => group.id === id)
}
