import type { JourneyItem } from '../types/journey'

/** "Our journey" milestones, in timeline order. */
export const journey: readonly JourneyItem[] = [
  {
    year: '1989',
    title: 'ABS Construction LLP',
    description:
      'The group’s foundation: civil engineering, road infrastructure and construction.',
  },
  {
    year: '1999',
    title: 'ABS Exporters',
    description:
      'Expansion into trading, including the pioneering import of bitumen through Visakhapatnam (Vizag) Port for India’s east coast.',
  },
  {
    year: '2000',
    title: 'MAK Promoters',
    description:
      'An ABS Construction joint venture delivering the group’s first apartment development in Chennai.',
  },
  {
    year: '2006',
    title: 'B&A Prime Developers Pvt. Ltd.',
    description:
      'Construction and real estate development, including the Crescent townships in Tirunelveli.',
  },
  {
    year: '2013–17',
    title: 'Saudi Arabia joint venture',
    description:
      'ABS Construction LLP × Yazdan Real Estate Company: an international construction and real estate partnership in the Eastern Province, with projects in Dammam.',
    highlighted: true,
  },
  {
    year: '2020',
    title: 'ETECH Recyclers',
    description:
      'Second-generation expansion into scrap trading and recycling, now operating two scrap yards.',
  },
  {
    year: 'UAE',
    title: 'ETECH Globe Trading FZCO & LLC',
    description:
      'International commodity trading and industrial supply from Dubai.',
  },
  {
    year: 'Today',
    title: 'ETECH Group',
    description:
      'Oil and gas workforce supply, industrial services and a new-generation international business platform.',
  },
]
