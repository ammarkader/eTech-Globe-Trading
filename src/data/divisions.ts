import type { Division } from '../types/division'

/**
 * The six divisions, in the order of etech-final.html.
 * This list is the single source of truth for division slugs: routes are prerendered from it.
 * Text is preserved exactly as approved.
 */
export const divisions: readonly Division[] = [
  {
    slug: 'commodity-trading',
    name: 'Commodity Trading',
    summary:
      'Energy, minerals, agri and food commodities, fertilisers and construction materials — from non-sanctioned origins, with independent inspection reports.',
    lead: 'ETECH Globe Trading supplies industrial commodities and raw materials to customers worldwide through trusted sourcing partners and established international trade networks — the bridge between mine and market.',
    scene: 'ship',
    highlights: [
      {
        value: '1999',
        label: 'Trading since',
      },
      {
        value: 'SGS · Intertek',
        label: 'or equivalent reports',
      },
      {
        value: 'Indonesia · GCC · India',
        label: 'Core corridors',
      },
    ],
    offers: [
      {
        kind: 'list',
        title: 'Energy & petroleum products',
        items: [
          'Diesel EN590 10 ppm',
          'LNG & LPG',
          'Jet fuel A1',
          'Fuel oil D6',
          'Bitumen',
          'Base oil',
          'Petroleum coke',
          'Granular sulphur',
        ],
      },
      {
        kind: 'list',
        title: 'Minerals & ores',
        items: [
          'Silica sand',
          'Manganese ore',
          'Chrome ore (Oman)',
          'Iron ore 62% (South Africa)',
          'Iron & copper concentrate (Philippines)',
          'Rutile (Burundi)',
          'Limestone (Oman)',
          'API barite',
        ],
      },
      {
        kind: 'list',
        title: 'Agri, food, fishery & meat',
        items: [
          'Palm oil products (Indonesia)',
          'Basmati & Ponni rice',
          'Maize, wheat & soybean',
          'Lentils',
          'Spices & cardamom',
          'Coconut & coconut oil',
          'Jaggery',
          'Coffee & cocoa',
          'Sardine & mackerel',
          'Halal lamb & Brazilian chicken',
        ],
      },
      {
        kind: 'list',
        title: 'Fertilisers & construction materials',
        items: [
          'Urea 46% (prilled & granular)',
          'Aggregates (Oman)',
          'M-sand & marine sand',
          'Shuttering plywood',
        ],
      },
      {
        kind: 'text',
        title: 'Shipping on your terms',
        text: 'CIF, FOB or CFR to the buyer’s port, with DAP and complete end-to-end support on request.',
      },
      {
        kind: 'text',
        title: 'Packed your way',
        text: 'Bulk, 1-ton jumbo bags, or customised packing on request.',
      },
      {
        kind: 'text',
        title: 'Quality & compliance',
        text: 'Non-sanctioned origins only. Inspection reports from SGS, Intertek, Sucofindo or an equivalent independent body; COA and MSDS on request. Buyers hold the import licences required for regulated products.',
      },
    ],
    related: {
      heading: 'Products',
      groups: [
        'minerals-ores',
        'agri-commodities',
        'fishery-meat',
        'petroleum-refinery-products',
        'fertilisers',
        'construction-materials',
      ],
    },
  },
  {
    slug: 'construction-real-estate',
    name: 'Construction, Real Estate & Masterplanning',
    summary:
      'Since 1989: civil engineering, real estate development, masterplanning, facilities management, marine construction and construction supply.',
    lead: 'From ABS Construction’s first projects in 1989 to townships, a Saudi joint venture and international masterplans — materials, equipment and services for every stage of a project, tailored to each client.',
    scene: 'crane',
    highlights: [
      {
        value: '1989',
        label: 'ABS Construction founded',
      },
      {
        value: 'KSA JV',
        label: 'with Yazdan Real Estate',
      },
      {
        value: '32 acres',
        label: 'Largest township layout',
      },
    ],
    offers: [
      {
        kind: 'text',
        title: 'Saudi Arabia joint venture',
        text: 'ABS Construction LLP × Yazdan Real Estate Company (2013–2017): an international construction and real estate partnership in the Eastern Province, with projects in Dammam.',
      },
      {
        kind: 'text',
        title: 'Real estate & land development',
        text: 'Apartments, villas, commercial buildings and township layouts through B&A Prime Developers, plus dry-land trading, farm promotion and bulk land sourcing for power projects across Tamil Nadu, Karnataka and Kerala.',
      },
      {
        kind: 'text',
        title: 'Masterplanning & urban design',
        text: 'Site analysis, layouts and masterplans led by registered architects and urban designers — from Tamil Nadu townships to a 34-hectare concept in London.',
      },
      {
        kind: 'list',
        title: 'Marine construction & dredging',
        items: [
          'Land reclamation and beach creation',
          'Port approach, channel, basin and berth maintenance',
          'Beach nourishment for coastal defence',
          'Sand filling with cutter suction dredgers and boosters',
          'Dredging spares: suction and discharge pipes, hydraulic and mechanical parts',
        ],
      },
      {
        kind: 'list',
        title: 'Facilities management',
        items: [
          'Building maintenance — MEP, HVAC and civil',
          'Cleaning and housekeeping',
          'Security services',
          'Landscaping maintenance',
          'Pest control and waste management',
          'Planned and reactive maintenance',
        ],
      },
      {
        kind: 'list',
        title: 'Interior design',
        items: ['Handcrafted masjid doors', 'Modular kitchens and wardrobes'],
      },
      {
        kind: 'list',
        title: 'General materials',
        items: [
          'Scaffolding and shuttering (all types)',
          'Shuttering plywood',
          'Structural steel',
          'MDF boards',
          'Veneers',
          'All types of finishes and fit-outs',
        ],
      },
      {
        kind: 'list',
        title: 'Construction materials',
        items: [
          '10 mm and 20 mm aggregate (Oman)',
          'Silica sand',
          'M-sand for concrete, plaster and blockwork',
          'Processed sand',
          'Marine sand for land filling and reclamation',
          'Gabbro armour rock, grades 1 to 3',
        ],
      },
      {
        kind: 'list',
        title: 'Infrastructure products',
        items: ['Geotextiles', 'Geomembranes', 'Soil stabilisers'],
      },
      {
        kind: 'list',
        title: 'Landscape',
        items: [
          'Soil-less base preparation',
          'Coco peat',
          'Vermicompost',
          'Aquaponic and hydroponic irrigation systems',
        ],
      },
      {
        kind: 'list',
        title: 'Safety & surveillance',
        items: [
          'Fire extinguishers, alarms and safety doors',
          'Detectors and sensors',
          'CCTV and all types of surveillance systems',
          'Access control, including rail and MRT platform screen systems',
        ],
      },
      {
        kind: 'list',
        title: 'Heavy equipment, new and used',
        items: [
          'Wheel loaders and front-end loaders',
          'Dumpers and graders',
          'Concrete boom placers',
          'Dredgers and pontoons',
        ],
      },
    ],
    closingNote: 'Every supply and service is tailored to client requirements.',
    roots:
      'The group’s construction story began in 1989 with ABS Construction LLP — civil engineering, road infrastructure and building. MAK Promoters, an ABS joint venture, delivered our first apartment development in Chennai in 2000, and B&A Prime Developers followed in 2006 with homes, townships and commercial projects across Tamil Nadu. From 2013 to 2017, ABS Construction partnered with Yazdan Real Estate Company in Saudi Arabia’s Eastern Province.',
    related: {
      heading: 'Products',
      groups: ['construction-materials'],
    },
  },
  {
    slug: 'workforce-solutions',
    name: 'Workforce Solutions',
    summary:
      'Specialist oil and gas, offshore and marine workforce from 20,000+ pre-screened CVs — plus diving support and marine surveys.',
    lead: 'Skilled professionals for the demanding environment of rig work — supplied and managed end to end for oil and gas platforms, offshore operations and marine operators, from a multinational database of more than 20,000 CVs.',
    scene: 'offshore',
    highlights: [
      {
        value: '20,000+',
        label: 'Pre-screened professional CVs',
      },
      {
        value: 'Multinational',
        label: 'Talent pool',
      },
      {
        value: 'Onshore & offshore',
        label: 'Oil, gas & marine',
      },
    ],
    offers: [
      {
        kind: 'text',
        title: '20,000+ CV database',
        text: 'A continuously refreshed, pre-screened database across drilling, production, HSE, engineering and marine disciplines, for rapid access to qualified talent.',
      },
      {
        kind: 'list',
        title: 'Workforce supply',
        items: [
          'Offshore rig crewing',
          'Platform personnel',
          'Marine vessel crewing',
          'Onshore & offshore support staff',
          'Project-based mobilisation',
        ],
      },
      {
        kind: 'list',
        title: 'Workforce management',
        items: [
          'Recruitment & screening',
          'Mobilisation',
          'Visa processing',
          'Compliance management',
          'Onboarding',
          'Payroll support',
          'Client coordination',
        ],
      },
      {
        kind: 'list',
        title: 'Industries we serve',
        items: [
          'Oil & gas',
          'Offshore operations',
          'Marine & shipping',
          'Refineries',
          'Construction',
          'Mining',
          'Industrial projects',
        ],
      },
      {
        kind: 'list',
        title: 'Diving support',
        items: [
          'Marine construction',
          'In-water solutions',
          'Underwater repair',
          'Salvaging',
          'Underwater cleaning',
          'Hull cleaning',
        ],
      },
      {
        kind: 'list',
        title: 'Marine surveys & inspections',
        items: [
          'Ex-rated equipment inspections',
          'AtoN inspections',
          'Rig leg positioning inspections',
          'SPM inspections',
          'Electrical data collection & CBM analysis',
          'Condition, damage and on/off-hire surveys',
          'Drilling and well control equipment surveys',
          'Jacking system, engine room, safety and barge equipment surveys',
        ],
      },
      {
        kind: 'text',
        title: 'Multinational talent pool',
        text: 'Candidates from many nationalities, matched to each project’s skills, language and visa requirements.',
      },
    ],
    closingNote:
      'Our vision: to be the leading manpower supply partner in the oil and gas industry — recognised for excellence, innovation and sustainable practice. Our aim: a deep, pre-screened talent pool with end-to-end workforce management, so clients spend less time on recruitment administration and more time on operations. Led in the field by Larson Pinto, our oil and gas drilling specialist, and his team.',
    photos: [
      {
        image: 'workforce-1',
        caption: 'Rig floor crew servicing drilling slips',
      },
      {
        image: 'workforce-2',
        caption: 'Night shift on the drilling deck, working at height',
      },
      {
        image: 'workforce-3',
        caption: 'Thread cleaning on drill collars and tool joints',
      },
      {
        image: 'workforce-4',
        caption: 'Pressure-control and wellhead equipment work',
      },
      {
        image: 'workforce-5',
        caption: 'Confined-space tank inspection on board',
      },
    ],
    related: {
      heading: 'Related supply',
      commodities: ['barite-api-grade'],
    },
  },
  {
    slug: 'it-healthcare',
    name: 'Digital & Healthcare IT',
    summary:
      'Websites, cloud and digital marketing for businesses, plus specialist medical writing and communications for healthcare.',
    lead: 'A hybrid team of software engineers and industry specialists building secure, high-performance digital ecosystems — with dedicated services for healthcare and life sciences.',
    scene: 'pulse',
    offers: [
      {
        kind: 'text',
        title: 'Websites & web applications',
        text: 'Marketing sites built with Astro and Tailwind; portals and complex applications in React and Next.js.',
      },
      {
        kind: 'text',
        title: 'Search engine optimisation',
        text: 'Technical SEO, search strategy and local visibility for sustainable organic growth.',
      },
      {
        kind: 'text',
        title: 'Digital marketing & content',
        text: 'Paid campaigns, conversion optimisation, lead generation and expert-led content.',
      },
      {
        kind: 'text',
        title: 'Cloud, infrastructure & AI',
        text: 'Secure hosting and infrastructure management, with practical AI integrations.',
      },
      {
        kind: 'text',
        title: 'Medical writing',
        text: 'Patient materials, health website content and material for healthcare professionals.',
      },
      {
        kind: 'text',
        title: 'Digital marketing for healthcare',
        text: 'SEO, Google Business Profile, ads, newsletters and reputation management for doctors, clinics and hospitals.',
      },
      {
        kind: 'text',
        title: 'Scientific writing',
        text: 'Manuscripts, literature reviews, abstracts and posters, from first draft to journal submission.',
      },
      {
        kind: 'text',
        title: 'Medical communications & pharma',
        text: 'Medical education, product launch content and sales training for pharma, biotech and device companies.',
      },
    ],
    closingNote:
      'Serving doctors, clinics, hospitals, healthcare institutions and startups, and businesses in architecture, logistics, energy, infrastructure and professional services.',
  },
  {
    slug: 'recycling-biomass',
    name: 'Recycling & Biomass',
    summary:
      'ETECH Recyclers (est. 2020) runs two scrap yards for ferrous and non-ferrous metals; Green Earth Solutions supplies wood pellets.',
    lead: 'Established in 2020 by the second generation, ETECH Recyclers sources, collects, segregates, processes and trades ferrous and non-ferrous recyclables from two scrap yards — with a focus on efficiency and environmental responsibility.',
    scene: 'gears',
    highlights: [
      {
        value: '2020',
        label: 'Established',
      },
      {
        value: '2',
        label: 'Scrap yards',
      },
      {
        value: 'Chennai · Sri City',
        label: 'Yard locations',
      },
    ],
    offers: [
      {
        kind: 'list',
        title: 'Scrap we trade',
        items: [
          'HMS 1 heavy melting steel',
          'HMS 2 heavy melting steel',
          'Copper, including millberry',
          'Aluminium',
          'UBC (used beverage cans)',
          'Plastics',
          'End-of-life vehicles',
        ],
      },
      {
        kind: 'text',
        title: 'Dismantling',
        text: 'Dismantling of plants and steel structures for scrap recovery.',
      },
      {
        kind: 'text',
        title: 'Green Earth Solutions',
        text: 'Wood pellets for biomass heating and power generation.',
      },
    ],
    closingNote:
      'Our commitment is to promote sustainable recycling practices while delivering dependable services to our clients.',
    related: {
      heading: 'Products',
      groups: ['recycled-biomass'],
    },
  },
  {
    slug: 'other-services',
    name: 'Industrial Solutions & Other Services',
    summary:
      'Have an industrial problem? We always come with a solution — construction, real estate, material sourcing and industrial works on request.',
    lead: 'We always come with a solution. If you have an industrial problem, we are there for you.',
    scene: 'gears',
    offers: [
      {
        kind: 'text',
        title: 'Construction support',
        text: 'Support across all kinds of construction activities, from materials to site services.',
      },
      {
        kind: 'text',
        title: 'Real estate activities',
        text: 'Development, project and property support based on your requirement.',
      },
      {
        kind: 'text',
        title: 'Material sourcing',
        text: 'Finding and delivering the materials your project needs, wherever they come from.',
      },
      {
        kind: 'text',
        title: 'Industrial works',
        text: 'Other industrial works and services, scoped and delivered on request.',
      },
    ],
    closingNote: 'Tell us the challenge — we’ll find the way.',
  },
]

export function findDivision(slug: string | undefined): Division | undefined {
  return divisions.find((division) => division.slug === slug)
}
