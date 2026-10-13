import type { InsideETECHItem } from '../types/insideEtech'

/** Tabs of the "Inside ETECH" section. */
export const insideEtech: readonly InsideETECHItem[] = [
  {
    id: 'story',
    tab: 'Our story',
    image: 'crescent-county',
    heading: 'From civil engineering to international trade',
    text: 'Founded in 1989 as ABS Construction, the group grew into bitumen trading in 1999, townships across Tamil Nadu, a Saudi joint venture and, today, ETECH Globe Trading in Dubai.',
    link: {
      kind: 'section',
      label: 'Read our journey',
      sectionId: 'journey',
    },
  },
  {
    id: 'quality',
    tab: 'Compliance & quality',
    image: 'silica-sand-3',
    heading: 'Every cargo inspected and documented',
    text: 'Non-sanctioned origins only, with inspection by SGS, Intertek or an equivalent body, certificates of analysis and the licences each product requires.',
    link: {
      kind: 'division',
      label: 'How we trade',
      slug: 'commodity-trading',
    },
  },
  {
    id: 'people',
    tab: 'Our people',
    image: 'workforce-2',
    heading: 'Crews that keep rigs running',
    text: 'More than 20,000 pre-screened professionals across drilling, production, HSE, engineering and marine — mobilised end to end, onshore and offshore.',
    link: {
      kind: 'division',
      label: 'Workforce solutions',
      slug: 'workforce-solutions',
    },
  },
  {
    id: 'projects',
    tab: 'Projects',
    image: 'dammam',
    heading: 'Homes, townships and joint ventures',
    text: 'From Crescent Mega City’s 250 homes to projects in Dammam with Yazdan Real Estate and a 34-hectare masterplan in London.',
    link: {
      kind: 'division',
      label: 'See our projects',
      slug: 'construction-real-estate',
    },
  },
]
