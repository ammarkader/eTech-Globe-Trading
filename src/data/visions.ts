import type { Vision } from '../types/vision'

/** GCC national visions, ascending by year. Saudi Arabia precedes Bahrain for 2030, as approved. */
export const visions: readonly Vision[] = [
  {
    country: 'sa',
    year: 2030,
    name: 'Saudi Vision 2030',
    summary: 'Giga-projects, housing and a stronger local private sector.',
    points: [
      'Construction experience in Dammam through the ABS × Yazdan joint venture',
      'Construction materials, equipment and facilities management',
      'Oil and gas workforce from 20,000+ CVs',
    ],
  },
  {
    country: 'bh',
    year: 2030,
    name: 'Bahrain Economic Vision 2030',
    summary: 'Sustainable growth, infrastructure and coastal development.',
    points: [
      'Aggregates and gabbro armour rock delivered to site',
      'Marine sand for reclamation works',
      'Construction materials supply',
    ],
  },
  {
    country: 'ae',
    year: 2031,
    name: 'UAE · We the UAE 2031',
    summary: 'A global trade and logistics hub on the road to Net Zero 2050.',
    points: [
      'Dubai-based trading through ETECH Globe Trading FZCO & LLC',
      'Recycled metals and biomass supply',
      'Digital and healthcare services',
    ],
  },
  {
    country: 'kw',
    year: 2035,
    name: 'New Kuwait 2035',
    summary:
      'A diversified economy with major infrastructure and energy projects.',
    points: [
      'Oil and gas manpower, onshore and offshore',
      'Construction materials and heavy equipment',
      'Palm oil, rice and food supply to the GCC',
    ],
  },
  {
    country: 'om',
    year: 2040,
    name: 'Oman Vision 2040',
    summary:
      'Diversification through mining, logistics and ports such as Sohar.',
    points: [
      'Bitumen loaded at Sohar for India',
      'Omani chrome ore, limestone and aggregates',
      'Industrial supply and workforce',
    ],
  },
]
