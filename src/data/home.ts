import type { ImageKey } from '../types/media'
import type { InternalLink } from '../types/site'

/** A figure in the counters row. Values of 10,000 and above are shown with a thousands separator. */
interface Counter {
  value: number
  suffix?: string
  label: string
}

const heroActions: readonly InternalLink[] = [
  { kind: 'section', label: 'Explore commodities', sectionId: 'commodities' },
  { kind: 'section', label: 'Our divisions', sectionId: 'divisions' },
]

const counters: readonly Counter[] = [
  { value: 1989, label: 'Founded' },
  { value: 39, label: 'Commodities supplied' },
  { value: 6, label: 'Business divisions' },
  { value: 20000, suffix: '+', label: 'Workforce CVs' },
]

const closingActions: readonly InternalLink[] = [
  { kind: 'section', label: 'Contact us', sectionId: 'contact' },
  {
    kind: 'division',
    label: 'Join our workforce',
    slug: 'workforce-solutions',
  },
]

/**
 * One-off copy of the homepage sections, in page order, exactly as in etech-final.html.
 * Repeated items (divisions, commodities, team and so on) live in their own data modules.
 */
export const homeContent = {
  hero: {
    eyebrow: '35 years of experience',
    headingLead: 'Moving the materials',
    headingAccent: 'that build economies.',
    text: 'For 35 years — since 1989 — ETECH has connected mines, refineries, plantations and project sites across the Gulf, India, Africa and Southeast Asia: trading commodities, building, staffing and supporting the industries that depend on them.',
    actions: heroActions,
    legend: { hubs: 'ETECH hubs', routes: 'Trade routes' },
  },
  ticker: {
    ariaLabel: 'Commodities we trade',
  },
  latest: {
    ariaLabel: 'Latest news',
    heading: 'Latest news and updates',
    linkLabel: 'More on LinkedIn',
  },
  supplyChain: {
    heading: 'From mine and plantation to your port',
    intro:
      'Every cargo follows the same disciplined path: verified source, inspected quality, documented shipment, on-time delivery.',
    steps: [
      { title: 'Source', text: 'Mine or plantation' },
      { title: 'Inspect & load', text: 'Port and survey' },
      { title: 'Ship', text: 'Your Incoterm' },
      { title: 'Deliver', text: 'Buyer’s port or site' },
    ],
    counters,
  },
  divisions: {
    heading: 'One group, six lines of business',
    intro:
      'Each division runs on its own expertise and shares the group’s network of suppliers, ports and partners.',
    cardLinkLabel: 'Learn more',
  },
  commodities: {
    heading: 'Commodities we supply',
    intro:
      'Specifications, origins and Incoterms are confirmed per contract. Ask for a full specification sheet on any product.',
    filterAriaLabel: 'Filter commodities',
    allLabel: 'All',
    cardLinkLabel: 'View specifications',
  },
  insideEtech: {
    heading: 'Inside ETECH',
    intro:
      'Three decades of construction, trading and industrial work — explore what sits behind every ETECH cargo, project and crew.',
    tabsAriaLabel: 'Explore ETECH',
  },
  about: {
    year: '1989',
    heading: 'Built on experience. Moving towards the future.',
    paragraphs: [
      'ETECH Group is a new-generation international business group built on more than three decades of collective experience across construction, infrastructure, commodity trading, real estate development, recycling and industrial services.',
      'Our heritage began in 1989 with ABS Construction and grew into commodity trading through ABS Exporters in 1999. Today ETECH connects that operating experience with new-generation international trade, creating reliable supply solutions for businesses across global markets.',
    ],
    places: [
      'United Arab Emirates',
      'India',
      'Saudi Arabia',
      'Indonesia',
      'GCC',
    ],
    motto: [
      { keyword: 'Experience', text: 'gives us the foundation.' },
      { keyword: 'Trust', text: 'defines our relationships.' },
      { keyword: 'Execution', text: 'moves our business forward.' },
    ],
    aim: {
      label: 'Our aim:',
      text: 'to build a trusted international business platform that connects reliable producers, suppliers and buyers across global markets — creating long-term value through responsible sourcing, transparent commercial practices, efficient supply chains and dependable execution.',
    },
  },
  journey: {
    heading: 'Our journey',
    intro:
      'From civil engineering in 1989 to a new-generation international group.',
  },
  whyChoose: {
    heading: 'Why choose ETECH?',
    intro:
      'More than three decades across construction, infrastructure, trading, development, recycling and industrial services.',
  },
  leadership: {
    heading: 'Leadership messages',
    intro: 'A word from the people who lead ETECH.',
  },
  team: {
    heading: 'Core professional team',
    intro:
      'Multidisciplinary expertise across architecture, urban design, construction and infrastructure, oil and gas, international trade, and marine and industrial services.',
  },
  locations: {
    heading: 'We operate across a global network',
    intro:
      'Offices and yards in the UAE and India, project experience in Saudi Arabia, and supply corridors linking Indonesia, the GCC, India and Africa.',
    corridors: {
      label: 'Supply corridors:',
      text: 'Indonesia · GCC · India · Africa · Southeast Asia',
    },
  },
  visions: {
    heading: 'Aligned with the Gulf’s national visions',
    intro:
      'Every GCC economy is diversifying, building and localising. ETECH’s materials, projects and people support the goals each country has set.',
    note: 'ETECH supports these national goals through its trade and services; it is not an official partner of the government programmes named.',
  },
  closing: {
    heading: 'Have an industrial challenge? Talk to us.',
    text: 'Commodities, construction, workforce or a problem nobody else could solve — our team replies within one business day.',
    /** The photograph behind the banner (set by script in etech-final.html). */
    image: 'workforce-4' satisfies ImageKey,
    actions: closingActions,
  },
  markets: {
    heading: 'Market watch',
    intro:
      'Selected reading on the markets we trade in, from the Financial Times and Investing.com.',
  },
  linkedIn: {
    heading: 'Follow ETECH on LinkedIn',
    text: 'Supply updates, new cargoes and market notes from our trading desk.',
    actionLabel: 'Follow us',
  },
  contact: {
    heading: 'Tell us what you need to source, build or staff.',
    text: 'Send the product, quantity, destination port and Incoterm, and our team will come back with an offer.',
    trust:
      'All our products meet international standards, with inspection reports from SGS, Intertek or an equivalent independent body.',
    actionLabel: 'Email our team',
    emailHeading: 'Email',
    officesHeading: 'Offices',
    officesLinkLabel: 'See all locations',
  },
} as const
