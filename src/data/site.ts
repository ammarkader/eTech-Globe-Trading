import type { SiteConfig } from '../types/site'

/** Site-wide facts and navigation, taken from etech-final.html. */
export const site: SiteConfig = {
  name: 'ETECH Group',
  legalName: 'ETECH Group of Companies',
  tagline: 'Excellence Across Horizons',
  origin: 'https://www.etechglobe.com',
  logo: { wordmark: 'ETECH', descriptor: 'GROUP OF COMPANIES' },
  emails: {
    primary: 'info@etechglobe.com',
    secondary: 'admin@etechglobetrading.com',
  },
  linkedInUrl: 'https://www.linkedin.com/company/etech-group-of-companies/',
  // Every item is a section of the homepage, not a page.
  navigation: [
    { label: 'What we do', sectionId: 'divisions' },
    { label: 'Commodities', sectionId: 'commodities' },
    { label: 'About', sectionId: 'about' },
    { label: 'Leadership', sectionId: 'leadership' },
    { label: 'Team', sectionId: 'team' },
    { label: 'Locations', sectionId: 'locations' },
    { label: 'GCC visions', sectionId: 'visions' },
    { label: 'Markets', sectionId: 'markets' },
    { label: 'Contact', sectionId: 'contact' },
  ],
  quoteAction: { label: 'Request a quote', sectionId: 'contact' },
  footer: {
    entities:
      'ETECH Globe Trading FZCO & Co LLC · ABS Construction LLP · B&A Prime Developers · ETECH Recyclers · Green Earth Solutions',
    credit: {
      prefix: 'Website by',
      label: 'Madhras.com',
      url: 'https://www.madhras.com/',
    },
  },
}

/** Homepage document metadata, unchanged from etech-final.html. */
export const homeMeta = {
  title: 'ETECH Group — Trading, Construction, Workforce & Technology',
  description:
    'ETECH Group, Dubai: bulk commodity trading in minerals, ores, palm oil, bitumen and sulphur, plus construction, real estate, workforce solutions and healthcare IT across the GCC, India and Southeast Asia.',
  ogTitle: 'ETECH Group — Excellence Across Horizons',
  ogDescription:
    'Commodity trading, construction, workforce and technology across the Gulf, India, Africa and Southeast Asia.',
} as const

/** Organization structured data (JSON-LD), unchanged from etech-final.html. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ETECH Group of Companies',
  alternateName: 'ETECH Globe Trading FZCO',
  url: 'https://www.etechglobe.com/',
  email: 'info@etechglobe.com',
  slogan: 'Excellence Across Horizons',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  sameAs: ['https://www.linkedin.com/company/etech-group-of-companies/'],
  areaServed: ['AE', 'SA', 'OM', 'IN', 'ID', 'BH', 'QA', 'KW'],
} as const
