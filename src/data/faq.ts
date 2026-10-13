import type { FAQItem } from '../types/faq'

/** Questions and answers of the keyword-based FAQ assistant. It is not an AI chatbot. */
export const faqItems: readonly FAQItem[] = [
  {
    question: 'What does ETECH do?',
    keywords: [
      'what does',
      'about',
      'who are',
      'etech do',
      'company',
      'services',
      'divisions',
    ],
    answer:
      'ETECH Group is a Dubai-headquartered international group built on 35 years of experience since ABS Construction was founded in 1989. We work across commodity trading, construction and real estate, oil and gas workforce supply, digital and healthcare IT, recycling and biomass, and industrial solutions, across the UAE, India, Saudi Arabia, Indonesia and the GCC.',
  },
  {
    question: 'Which commodities do you supply?',
    keywords: [
      'commodit',
      'product',
      'supply',
      'sell',
      'mineral',
      'ore',
      'sulphur',
      'sulfur',
      'urea',
      'sand',
      'manganese',
      'chrome',
      'copper',
      'iron',
      'barite',
      'rutile',
      'coffee',
      'cocoa',
      'coke',
      'base oil',
      'sludge',
      'aggregate',
      'scrap',
      'pellet',
    ],
    answer:
      'Energy (diesel EN590, LNG & LPG, jet fuel A1, D6, bitumen, base oil, pet coke, sulphur), minerals (silica sand, manganese, chrome ore, iron ore 62%, iron and copper concentrates, rutile, limestone, API barite), agri and food (palm oil products, basmati and Ponni rice, maize, wheat, soybean, lentils, spices, cardamom, coconut and coconut oil, jaggery, coffee, cocoa), fishery and halal meat, urea 46%, construction materials, scrap metals and wood pellets.',
  },
  {
    question: 'Which Incoterms do you offer?',
    keywords: [
      'incoterm',
      'cif',
      'fob',
      'cfr',
      'dap',
      'terms',
      'delivery term',
      'shipping term',
    ],
    answer:
      'We work on CIF, FOB or CFR. On request we also deliver DAP and provide complete end-to-end support through to your site.',
  },
  {
    question: 'How is cargo packed?',
    keywords: ['pack', 'bag', 'jumbo', 'bulk', 'drum', 'container'],
    answer:
      'Bulk, 1-ton jumbo bags, or customised packing to your requirement. Bitumen ships in new 200 kg steel drums, and palm oil in bulk, flexitanks or retail packs.',
  },
  {
    question: 'Can I get a spec sheet or sample?',
    keywords: [
      'spec',
      'sample',
      'sheet',
      'coa',
      'analysis',
      'inspection',
      'quality',
      'sgs',
    ],
    answer:
      'Yes. Specification sheets and samples are available on request. Independent inspection and a certificate of analysis can be arranged for each shipment.',
  },
  {
    question: 'Which countries do you deliver to?',
    keywords: [
      'countr',
      'deliver to',
      'where',
      'market',
      'region',
      'ship to',
      'gcc',
      'india',
      'saudi',
      'oman',
      'qatar',
      'kuwait',
      'bahrain',
      'sri lanka',
      'maldives',
      'bangladesh',
    ],
    answer:
      'We regularly supply the GCC (UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain), India, Sri Lanka, the Maldives, Bangladesh and Cyprus, and can ship to any nominated port.',
  },
  {
    question: 'How do I request a quote?',
    keywords: [
      'quote',
      'price',
      'rate',
      'offer',
      'cost',
      'how much',
      'buy',
      'order',
    ],
    answer:
      "Tell us the product, quantity, destination port, preferred Incoterm and delivery window. Our team replies with an offer and specification sheet. You can leave your details here and we'll follow up.",
  },
  {
    question: 'Do you supply manpower?',
    keywords: [
      'manpower',
      'workforce',
      'staff',
      'worker',
      'recruit',
      'cv',
      'hire',
      'labour',
      'labor',
      'engineer',
      'technician',
    ],
    answer:
      'Yes. ETECH Workforce Solutions supplies oil and gas, offshore and marine professionals from a database of 20,000+ pre-screened CVs, with end-to-end workforce management from recruitment and visas to onboarding and payroll support.',
  },
  {
    question: 'What construction services and supplies do you offer?',
    keywords: [
      'construction',
      'scaffold',
      'shuttering',
      'plywood',
      'mdf',
      'veneer',
      'fit',
      'geotextile',
      'geomembrane',
      'landscape',
      'coco peat',
      'compost',
      'hydroponic',
      'cctv',
      'fire',
      'safety',
      'surveillance',
      'real estate',
      'facilities',
      'facility management',
      'maintenance',
      'housekeeping',
      'cleaning',
      'security',
    ],
    answer:
      'Construction since 1989, real estate development, masterplanning and facilities management (building maintenance, cleaning, security, landscaping), plus supplies: scaffolding and shuttering, plywood, MDF, veneers and fit-outs; sands, aggregates and gabbro armour rock; geotextiles and soil stabilisers; landscape supplies; fire, safety and surveillance systems; and new or used heavy equipment.',
  },
  {
    question: 'Do you offer digital or healthcare IT services?',
    keywords: [
      'website',
      'digital',
      'seo',
      'marketing',
      'cloud',
      'healthcare',
      'medical',
      'pharma',
      'it service',
      'software',
      'app',
    ],
    answer:
      'Yes. Our digital team builds websites and web apps, runs SEO and digital marketing, and manages cloud infrastructure. For healthcare we provide medical writing, healthcare marketing, scientific writing and medical communications.',
  },
  {
    question: 'Do you supply marine sand for reclamation?',
    keywords: [
      'marine sand',
      'reclamation',
      'dredg',
      'ocean',
      'port project',
      'wave',
    ],
    answer:
      'Yes. We supply excavated ocean-bed marine sand for land reclamation, port construction and wave-control projects, graded to your project specification.',
  },
  {
    question: 'Which armour rock grades do you supply?',
    keywords: [
      'armour',
      'armor',
      'rock',
      'gabbro',
      'boulder',
      'breakwater',
      'grade 1',
      'grade 2',
      'grade 3',
    ],
    answer:
      'Gabbro armour rock and heavy armour rock in grades 1 to 3, plus boulders and all aggregate types, including 10 mm and 20 mm. Delivered to site in Bahrain, the Maldives, Bangladesh and other markets.',
  },
  {
    question: 'Do you supply heavy equipment?',
    keywords: [
      'heavy equipment',
      'machinery',
      'wheel loader',
      'fel',
      'dumper',
      'grader',
      'boom placer',
      'dredger',
      'pontoon',
      'used equipment',
      'new equipment',
    ],
    answer:
      'Yes, new and used: wheel loaders and front-end loaders, dumpers, graders, concrete boom placers, dredgers and pontoons. Tell us the model, condition and location you need.',
  },
  {
    question: 'Which palm oil grades do you offer?',
    keywords: [
      'palm',
      'olein',
      'cp10',
      'cpo',
      'pfad',
      'pko',
      'pke',
      'kernel',
      'edible oil',
      'cooking oil',
    ],
    answer:
      'Five grades from Indonesia: RBD palm olein (CP10), crude palm oil (CPO), palm fatty acid distillate (PFAD), palm kernel oil (PKO) and palm kernel expeller (PKE). Supplied in bulk, flexitanks or retail packs to the GCC and India.',
  },
  {
    question: 'What is your silica sand specification?',
    keywords: ['silica', 'sio2', 'quartz', 'glass sand', 'mesh'],
    answer:
      'SiO₂ purity of 99.5–99.7%, above 40 mesh, with supply ability of 35,000 MT+. Used for glass and solar glass, foundry, construction and filtration. Spec sheet and samples on request.',
  },
  {
    question: 'Do you supply bitumen?',
    keywords: ['bitumen', 'asphalt', '60/70', '85/100', 'penetration', 'road'],
    answer:
      'Yes. Gulf-origin 60/70 penetration-grade bitumen in new steel drums, loaded at Sohar, Oman, with CFR/CIF delivery to Mundra, India and other ports. We pioneered bitumen imports through Vizag Port for India’s east coast in 1999.',
  },
  {
    question: 'Can you staff offshore projects?',
    keywords: [
      'offshore',
      'rig',
      'platform',
      'drilling',
      'onshore',
      'oil and gas',
      'oil & gas',
    ],
    answer:
      'Yes. We supply offshore rig crews, platform personnel, marine vessel crews and onshore and offshore support staff from 20,000+ pre-screened CVs across drilling, production, HSE, engineering and marine disciplines — and handle recruitment, mobilisation, visas, compliance, onboarding and payroll support. We also provide diving support and marine surveys and inspections.',
  },
  {
    question: 'Where is ETECH based?',
    keywords: [
      'based',
      'located',
      'office',
      'address',
      'headquarter',
      'dubai',
      'where are you',
    ],
    answer:
      'Our trading companies are in Dubai: ETECH Globe Trading Co LLC (Office 43–44, Dubai Municipality, Bur Dubai, Al Fahidi) and ETECH Globe Trading FZCO (IFZA Business Park, Dubai Silicon Oasis). ETECH Recyclers has yards in Saligramam, Chennai and Sri City, Andhra Pradesh. Email info@etechglobe.com.',
  },
  {
    question: 'Can you solve an industrial problem for us?',
    keywords: [
      'problem',
      'solution',
      'solve',
      'industrial',
      'custom',
      'special request',
      'help us',
      'source',
    ],
    answer:
      "We always come with a solution. Beyond our listed products, we support construction and real estate work, material sourcing and other industrial requirements based on your request. Tell us the challenge and we'll find the way.",
  },
  {
    question: 'How can I get updates on new cargoes?',
    keywords: [
      'update',
      'newsletter',
      'subscribe',
      'linkedin',
      'follow',
      'news',
    ],
    answer:
      'Sign up to our newsletter on the website for available cargoes and market notes, and follow ETECH on LinkedIn.',
  },
  {
    question: 'Do you supply rice and food products?',
    keywords: [
      'rice',
      'basmati',
      'lentil',
      'dal',
      'soy',
      'wheat',
      'coconut',
      'cardamom',
      'jaggery',
      'food',
      'spice',
      'grain',
      'pulses',
    ],
    answer:
      'Yes. Basmati and Ponni rice, maize, wheat, soybean, lentils, spices (clove, cinnamon, cardamom), coconut and coconut oil, Indian and palm jaggery, coffee and cocoa, plus sardine, mackerel, halal lamb and halal Brazilian chicken. Packing is customised, from retail bags to bulk.',
  },
  {
    question: 'How long has ETECH been in business?',
    keywords: [
      'how long',
      'since',
      'history',
      'founded',
      'years',
      'experience',
      'established',
      'old',
    ],
    answer:
      '35 years. Our heritage began in 1989 with ABS Construction, expanded into trading through ABS Exporters in 1999, and continued through B&A Prime Developers, a Saudi joint venture with Yazdan Real Estate (2013–2017), ETECH Recyclers (2020) and ETECH Globe Trading in the UAE.',
  },
  {
    question: 'Do you buy or sell scrap?',
    keywords: [
      'scrap',
      'hms',
      'recycl',
      'copper scrap',
      'aluminium',
      'aluminum',
      'ubc',
      'millberry',
      'dismantl',
    ],
    answer:
      'Yes. ETECH Recyclers runs two scrap yards (Chennai and Sri City) trading HMS 1 and 2, copper including millberry, aluminium, UBC, plastics and end-of-life vehicles. We also dismantle plants and steel structures for scrap.',
  },
  {
    question: 'Do you supply diesel, jet fuel or LNG?',
    keywords: [
      'diesel',
      'en590',
      'jet',
      'a1',
      'lng',
      'lpg',
      'd6',
      'fuel oil',
      'petroleum',
      'gas',
    ],
    answer:
      'Yes: diesel EN590 10 ppm, jet fuel A1, LNG and LPG, and D6 fuel oil, all from non-sanctioned origins, on CIF, FOB or CFR terms.',
  },
  {
    question: 'Do you supply halal meat or fish?',
    keywords: [
      'meat',
      'halal',
      'chicken',
      'lamb',
      'mutton',
      'fish',
      'sardine',
      'mackerel',
      'seafood',
      'frozen',
    ],
    answer:
      'Yes: sardine (Indian Ocean and Atlantic) and mackerel, halal lamb with cutting and packing to your requirements, and halal Brazilian chicken, shipped under cold chain.',
  },
]

/** First message shown when the assistant is opened. */
export const assistantGreeting =
  'Hello! I’m the ETECH assistant. Tap a question below or type your own.'

/** Reply when no entry matches what the visitor typed. */
export const assistantFallback =
  'Good question — our team can answer that directly. Leave your details below (all optional) or email info@etechglobe.com.'
