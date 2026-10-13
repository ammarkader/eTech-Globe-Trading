import type { NewsItem } from '../types/news'

/** "Latest news and updates". */
export const latestNews: readonly NewsItem[] = [
  {
    label: 'Supply update',
    title: 'Manganese ore shipment to Vizag sold out',
    summary:
      'Our Zambian lump ore (Mn 45.3%) cargo at Vizag is fully sold. Bookings are open for the next shipment.',
    commodity: 'manganese-ore',
  },
  {
    label: 'Now sourcing',
    title: 'Urea 46% granular for Sri Lanka',
    summary:
      'We are sourcing granular urea for importers in Sri Lanka. Share your volume and delivery window.',
    commodity: 'urea-46-granular',
  },
  {
    label: 'Construction supply',
    title: 'Aggregates and armour rock to Bahrain, Maldives and Bangladesh',
    summary:
      '10 mm and 20 mm aggregate, boulders and gabbro armour rock, grades 1 to 3, delivered to site.',
    commodity: 'aggregates-armour-rock',
  },
]
