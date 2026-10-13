import type { Commodity } from '../types/commodity'

/**
 * The 39 commodities, in the order of etech-final.html.
 * This list is the single source of truth for commodity slugs: routes are prerendered from it.
 * Text is preserved exactly as approved.
 */
export const commodities: readonly Commodity[] = [
  // Minerals & Ores
  {
    slug: 'silica-sand',
    name: 'Silica sand',
    group: 'minerals-ores',
    summary: '99.5–99.7% SiO₂, supplied in bulk.',
    use: 'Premium particles, professional partnerships. Quartz sand for glass, ceramics, filtration, construction, sports surfaces, road markings, rail braking, chemicals, refractories and foundry — shipped from the mine to the mother vessel.',
    specs: {
      'Grade / assay': 'SiO₂ 99.5–99.7%',
      'Form & size': 'Above 40 mesh; mesh customised to buyer requirement',
    },
    highlights: [
      {
        value: '99.5–99.7%',
        label: 'SiO₂ purity',
      },
      {
        value: '40 mesh+',
        label: 'Mesh size',
      },
      {
        value: '35,000 MT+',
        label: 'Supply ability',
      },
    ],
    photos: [
      {
        image: 'silica-sand-1',
        caption: 'Sampling at the silica sand stockpile',
      },
      {
        image: 'silica-sand-2',
        caption: 'Conveyor loading at the jetty',
      },
      {
        image: 'silica-sand-3',
        caption: 'Grab discharge into the mother vessel',
      },
      {
        image: 'silica-sand-4',
        caption: 'Barge transfer at the outer anchorage',
      },
    ],
  },
  {
    slug: 'manganese-ore',
    name: 'Manganese ore',
    group: 'minerals-ores',
    summary: 'Zambian-origin lump ore, Mn 45.3%.',
    use: 'Lump ore for steel and ferroalloy plants. Our earlier shipment to Vizag sold out — book your next one.',
    specs: {
      'Grade / assay': 'Mn 45.3%',
      'Form & size': 'Lump',
      Origin: 'Zambia',
    },
    highlights: [
      {
        value: '45.3%',
        label: 'Manganese (Mn)',
      },
      {
        value: 'Zambia',
        label: 'Origin',
      },
      {
        value: 'Lump',
        label: 'Form',
      },
    ],
    photos: [
      {
        image: 'manganese-ore-1',
        caption: 'Manganese ore stockpile at the port yard',
      },
      {
        image: 'manganese-ore-2',
        caption: 'Lump ore sample, Zambian origin',
      },
    ],
  },
  {
    slug: 'chrome-ore',
    name: 'Chrome ore',
    group: 'minerals-ores',
    summary: 'Lumpy chrome ore and metallurgical chromite from Oman.',
    use: 'Chrome ore for ferrochrome and stainless steel production, supplied from the Sultanate of Oman.',
    specs: {
      'Grade / assay':
        'Lumpy: Cr₂O₃ 32/34% min, Cr/Fe 2.4:1 · Metallurgical: Cr₂O₃ 34%, Cr/Fe 2.2:1',
      'Form & size': '10–300 mm',
      Moisture: 'Below 0.1%',
      Origin: 'Sultanate of Oman',
    },
    highlights: [
      {
        value: '32–34%',
        label: 'Cr₂O₃ min',
      },
      {
        value: '10–300 mm',
        label: 'Size',
      },
      {
        value: 'Oman',
        label: 'Origin',
      },
    ],
    range: {
      title: 'Grades',
      items: [
        {
          code: 'LUMPY',
          name: 'Chrome ore lumpy',
          description: 'Origin: Sultanate of Oman.',
          specs: [
            'Cr₂O₃ 32/34% min',
            'Cr/Fe ratio 2.4:1',
            'SiO₂ 10%',
            'Al₂O₃ 21.3% max',
            'MgO 19.7% max',
            'CaO 1.95% max',
            'P 0.009% max',
            'S 0.006% max',
            'Size 10–300 mm',
            'Moisture below 0.1%',
          ],
        },
        {
          code: 'MET',
          name: 'Metallurgical chromite',
          description: 'Origin: Sultanate of Oman.',
          specs: [
            'Cr₂O₃ 34% min',
            'Cr/Fe ratio 2.2:1',
            'SiO₂ 10%',
            'Al₂O₃ 23% max',
            'MgO 17% max',
            'CaO 1.5% max',
            'P 0.005% max',
            'S 0.006% max',
            'Size 10–300 mm',
            'Moisture below 0.1%',
          ],
        },
      ],
      note: 'Typical analysis. Final specification is confirmed per contract.',
    },
  },
  {
    slug: 'iron-ore-62',
    name: 'Iron ore 62%',
    group: 'minerals-ores',
    summary: 'Fe 62% iron ore from South Africa.',
    use: 'Iron ore for steel mills and pelletising plants.',
    specs: {
      'Grade / assay': 'Fe 62%',
      Origin: 'South Africa',
    },
    highlights: [
      {
        value: '62%',
        label: 'Fe',
      },
      {
        value: 'South Africa',
        label: 'Origin',
      },
    ],
  },
  {
    slug: 'iron-ore-concentrate',
    name: 'Iron ore concentrate',
    group: 'minerals-ores',
    summary: 'Fine powder concentrate from the Philippines.',
    use: 'Iron concentrate (fines) for pelletising plants and steel mills.',
    specs: {
      'Form & size': 'Powder concentrate (fines)',
      Origin: 'Philippines',
    },
    highlights: [
      {
        value: 'Fines',
        label: 'Powder concentrate',
      },
      {
        value: 'Philippines',
        label: 'Origin',
      },
    ],
    licenceNote:
      'Iron ore fines can liquefy at sea; shipments are made with a transportable moisture limit (TML) certificate under the IMSBC Code.',
  },
  {
    slug: 'copper-concentrate',
    name: 'Copper concentrate',
    group: 'minerals-ores',
    summary: 'Powder concentrate from the Philippines.',
    use: 'Copper concentrate powder for smelters and refiners.',
    specs: {
      'Form & size': 'Powder concentrate',
      Origin: 'Philippines',
    },
    highlights: [
      {
        value: 'Powder',
        label: 'Concentrate',
      },
      {
        value: 'Philippines',
        label: 'Origin',
      },
    ],
    licenceNote:
      'Concentrate imports may be subject to impurity limits and the buyer’s import permits in the destination country. MSDS provided on request.',
  },
  {
    slug: 'rutile',
    name: 'Rutile',
    group: 'minerals-ores',
    summary: 'Lump rutile from Burundi.',
    use: 'A titanium mineral for titanium dioxide pigment, welding electrodes and titanium metal.',
    specs: {
      'Form & size': 'Lump',
      Origin: 'Burundi',
    },
    highlights: [
      {
        value: 'Lump',
        label: 'Form',
      },
      {
        value: 'Burundi',
        label: 'Origin',
      },
    ],
  },
  {
    slug: 'limestone',
    name: 'Limestone',
    group: 'minerals-ores',
    summary: 'Omani limestone for cement, steel and lime.',
    use: 'Limestone for cement and clinker production, steel fluxing, lime burning and construction.',
    specs: {
      Origin: 'Oman',
      'Form & size': 'Lumps or crushed sizes to buyer specification',
    },
    highlights: [
      {
        value: 'Oman',
        label: 'Origin',
      },
      {
        value: 'Cement · steel · lime',
        label: 'Uses',
      },
    ],
  },
  {
    slug: 'barite-api-grade',
    name: 'Barite (API grade)',
    group: 'minerals-ores',
    summary: 'API 13A drilling-grade barium sulfate, SG 4.20 and 4.10.',
    use: 'Drilling-grade barium sulfate (BaSO₄) for oil and gas drilling — onshore, offshore, geothermal, horizontal and directional, and high-pressure wells. Suitable for water-based and oil-based drilling fluids, with uniform particle size, low moisture and batch-to-batch consistency.',
    specs: {
      'Grade / assay': 'API 13A; specific gravity 4.20 and 4.10',
      'Form & size': 'Powder, uniform particle size',
      Moisture: 'Low',
      Packing:
        '25 kg or 50 kg PP bags, 1 MT jumbo bags, bulk; custom packing on request',
    },
    highlights: [
      {
        value: 'API 13A',
        label: 'Standard',
      },
      {
        value: '4.20 / 4.10',
        label: 'Specific gravity',
      },
      {
        value: 'WBM & OBM',
        label: 'Drilling fluids',
      },
    ],
    qualityNote:
      'Each batch is tested to customer specifications and API standards. COA, MSDS and third-party inspection reports are available on request.',
  },
  // Agri Commodities
  {
    slug: 'palm-oil-products',
    name: 'Palm oil products',
    group: 'agri-commodities',
    summary: 'CPO, RBD CP10 & CP8, stearin, PAO, PFAD, PKO and PKE.',
    use: 'Global trade, rooted in trust: premium Indonesian palm oil with international certifications, for refineries, food manufacturers, oleochemicals and animal feed.',
    specs: {
      Origin: 'Indonesia',
      'Variety / grade':
        'CPO, RBD palm olein CP10 & CP8, palm stearin, PAO, PFAD, PKO, PKE',
      Packing: 'Bulk vessel, parcel tankers, flexitanks, jerry cans, tins, PET',
      Incoterms:
        'CIF, FOB or CFR to your nominated port; DAP and end-to-end delivery on request',
    },
    highlights: [
      {
        value: 'Indonesia',
        label: 'Origin',
      },
      {
        value: 'CP10 · CP8',
        label: 'RBD olein',
      },
      {
        value: 'GCC & India',
        label: 'Delivery markets',
      },
    ],
    range: {
      title: 'Our palm range',
      items: [
        {
          code: 'CP10 / CP8',
          name: 'RBD Palm Olein',
          description:
            'Cooking and frying oil for food and industrial use, with high clarity and stability.',
          specs: [
            'Cloud point 10°C (CP10)',
            'FFA (as palmitic) 0.1% max',
            'Iodine value 56 min',
          ],
        },
        {
          code: 'CPO',
          name: 'Crude Palm Oil',
          description:
            'Low FFA, moisture and impurities — feedstock for refineries.',
          specs: [
            'FFA (as palmitic) 5% max',
            'DOBI 2.3 min',
            'Iodine value 50–55',
          ],
        },
        {
          code: 'STEARIN',
          name: 'Palm Stearin',
          description:
            'Hard fraction for shortening, margarine and oleochemicals.',
          specs: ['Specification on request'],
        },
        {
          code: 'PAO',
          name: 'Palm Acid Oil',
          description: 'For animal feed and oleochemical producers.',
          specs: ['Specification on request'],
        },
        {
          code: 'PFAD',
          name: 'Palm Fatty Acid Distillate',
          description: 'Refining by-product for soap, oleochemicals and feed.',
          specs: ['FFA (as palmitic) 70% min', 'Saponifiable matter 95% min'],
        },
        {
          code: 'PKO',
          name: 'Palm Kernel Oil',
          description:
            'Lauric oil for bakery fats, confectionery, creamers and ice cream.',
          specs: ['FFA (as lauric) 5% max', 'Iodine value 16–19'],
        },
        {
          code: 'PKE',
          name: 'Palm Kernel Expeller',
          description:
            'Protein-rich feed meal for cattle, poultry and aquafeed.',
          specs: [
            'Crude protein 14% min',
            'Crude fat 8–10%',
            'Moisture 12% max',
            'Crude fibre 20% max',
          ],
        },
      ],
      note: 'Figures are typical. Final specification is agreed with each buyer. Palm oil goes into margarine, chocolate, ice cream, instant noodles and baked goods, as well as soaps, detergents and dishwashing liquids.',
    },
  },
  {
    slug: 'rice',
    name: 'Rice',
    group: 'agri-commodities',
    summary: 'Basmati and Ponni short-grain rice.',
    use: 'Farm-to-fork supply of long-grain basmati and short-grain Ponni rice for importers, wholesalers, retailers and food service.',
    specs: {
      Origin: 'India (other origins on request)',
      'Variety / grade':
        'Basmati and Ponni (short grain); other varieties on request',
      Moisture: 'To buyer specification',
      Packing:
        'Food-grade PP, jute or retail bags (5–50 kg), or customised packing on request',
    },
    highlights: [
      {
        value: 'Basmati',
        label: 'Long grain',
      },
      {
        value: 'Ponni',
        label: 'Short grain',
      },
      {
        value: '5–50 kg',
        label: 'Bag sizes',
      },
    ],
  },
  {
    slug: 'maize',
    name: 'Maize',
    group: 'agri-commodities',
    summary: 'Yellow maize for feed and food.',
    use: 'Maize for animal feed mills, starch and food processing.',
    specs: {
      Origin: 'Multiple origins — ask us for current options',
      'Variety / grade': 'Feed and food grades to buyer specification',
      Packing: 'Bulk or 50 kg bags, customised on request',
    },
    highlights: [
      {
        value: 'Feed & food',
        label: 'Grades',
      },
      {
        value: 'Bulk',
        label: 'or bagged',
      },
    ],
  },
  {
    slug: 'soybean',
    name: 'Soybean',
    group: 'agri-commodities',
    summary: 'Soybeans and soybean meal for food and feed.',
    use: 'Whole soybeans for crushing and food processing, and soybean meal for animal feed.',
    specs: {
      Origin: 'Multiple origins — ask us for current options',
      'Variety / grade': 'Whole soybeans (non-GMO on request) and soybean meal',
      Packing: 'Bulk or 50 kg bags, customised on request',
    },
    highlights: [
      {
        value: 'Beans & meal',
        label: 'Products',
      },
      {
        value: 'Food & feed',
        label: 'Uses',
      },
    ],
  },
  {
    slug: 'wheat',
    name: 'Wheat',
    group: 'agri-commodities',
    summary: 'Milling and feed wheat.',
    use: 'Milling wheat for flour mills and feed wheat for animal feed producers, to the buyer’s protein and quality specification.',
    specs: {
      Origin: 'Multiple origins — ask us for current options',
      'Variety / grade':
        'Milling wheat and feed wheat; protein to buyer specification',
      Packing: 'Bulk vessel or 50 kg bags, customised on request',
    },
    highlights: [
      {
        value: 'Milling',
        label: '& feed grades',
      },
      {
        value: 'Bulk',
        label: 'or bagged',
      },
    ],
  },
  {
    slug: 'lentils',
    name: 'Lentils',
    group: 'agri-commodities',
    summary: 'Red, green and split lentils (dal).',
    use: 'Whole and split lentils for importers, packers and food processors.',
    specs: {
      Origin: 'Multiple origins — ask us for current options',
      'Variety / grade':
        'Red lentils (whole and split), green lentils and other dals',
      Packing:
        'Food-grade PP, jute or retail bags (5–50 kg), or customised packing on request',
    },
    highlights: [
      {
        value: 'Whole & split',
        label: 'Forms',
      },
      {
        value: 'Red · green',
        label: 'Varieties',
      },
    ],
  },
  {
    slug: 'spices',
    name: 'Spices',
    group: 'agri-commodities',
    summary: 'Clove, cinnamon and other spices.',
    use: 'Whole spices for spice traders, food manufacturers and retail packers.',
    specs: {
      Origin: 'India and Southeast Asia (on request)',
      'Variety / grade': 'Clove, cinnamon and other spices on request',
      Packing: 'Food-grade bags or cartons, customised on request',
    },
    highlights: [
      {
        value: 'Clove',
        label: '& cinnamon',
      },
      {
        value: 'Whole',
        label: 'Spices',
      },
    ],
  },
  {
    slug: 'cardamom',
    name: 'Cardamom',
    group: 'agri-commodities',
    summary: 'Green cardamom, graded by size.',
    use: 'Aromatic green cardamom for spice traders, food manufacturers and retail packers.',
    specs: {
      Origin: 'India (other origins on request)',
      'Variety / grade':
        'Green cardamom, graded by pod size (e.g. 6–8 mm and above)',
      Moisture: 'To buyer specification',
      Packing: 'Food-grade bags or cartons, customised on request',
    },
    highlights: [
      {
        value: 'Green',
        label: 'Cardamom',
      },
      {
        value: 'Size-graded',
        label: 'Pods',
      },
    ],
  },
  {
    slug: 'coconut-coconut-oil',
    name: 'Coconut & coconut oil',
    group: 'agri-commodities',
    summary: 'Coconuts and crude, refined or virgin coconut oil.',
    use: 'Whole coconuts and coconut oil for food processing, cosmetics and oleochemicals.',
    specs: {
      Origin: 'India and Southeast Asia (on request)',
      'Variety / grade':
        'Whole coconuts; crude (CNO), refined (RBD) and virgin coconut oil',
      Packing:
        'Bags for coconuts; flexitanks, drums, jerry cans, tins or PET for oil',
    },
    highlights: [
      {
        value: 'Coconuts',
        label: '& oil',
      },
      {
        value: 'Crude · RBD · virgin',
        label: 'Oil grades',
      },
    ],
  },
  {
    slug: 'jaggery',
    name: 'Jaggery',
    group: 'agri-commodities',
    summary: 'Indian cane jaggery and palm jaggery.',
    use: 'Traditional unrefined sweeteners — Indian jaggery and palm jaggery — for retail, health food and food manufacturing buyers.',
    specs: {
      Origin: 'India (other origins on request)',
      'Variety / grade':
        'Indian (cane) jaggery and palm jaggery; blocks or powder',
      Packing: 'Food-grade bags, boxes or retail packs, customised on request',
    },
    highlights: [
      {
        value: 'Cane & palm',
        label: 'Jaggery',
      },
      {
        value: 'Blocks · powder',
        label: 'Forms',
      },
    ],
  },
  {
    slug: 'coffee-beans',
    name: 'Coffee beans',
    group: 'agri-commodities',
    summary: 'Green Arabica and Robusta beans.',
    use: 'Green coffee beans for roasters and importers, graded by size and defect count.',
    specs: {
      Origin: 'Multiple origins — ask us for current options',
      'Variety / grade': 'Arabica and Robusta; grades such as AB',
      Packing: 'Jute or GrainPro-lined bags, or customised on request',
    },
  },
  {
    slug: 'cocoa-beans',
    name: 'Cocoa beans',
    group: 'agri-commodities',
    summary: 'Dried cocoa beans for grinders and chocolatiers.',
    use: 'Fermented, dried cocoa beans for grinders and chocolate manufacturers.',
    specs: {
      Origin: 'Multiple origins — ask us for current options',
      'Variety / grade':
        'Main-crop and mid-crop beans; grade to buyer specification',
      Packing: 'Jute bags or bulk containers, customised on request',
    },
  },
  // Fishery & Meat
  {
    slug: 'fish-seafood',
    name: 'Fish & seafood',
    group: 'fishery-meat',
    summary: 'Sardine and mackerel, frozen for export.',
    use: 'Sardine from the Indian Ocean and Atlantic, and mackerel, supplied to importers, distributors, processors and canners under cold chain.',
    specs: {
      Products:
        'Sardine (Indian Ocean and Atlantic), mackerel; other species on request',
      Form: 'Whole round, gutted or as required',
      Processing: 'Block frozen or IQF; canned on request',
      Origin: 'Indian Ocean and Atlantic',
      Packing: 'Master cartons, glazed to buyer specification',
      Incoterms: 'CIF, FOB or CFR in reefer containers; DAP on request',
    },
    highlights: [
      {
        value: 'Sardine',
        label: '& mackerel',
      },
      {
        value: 'Frozen',
        label: 'Cold chain',
      },
      {
        value: 'Reefer',
        label: 'Shipment',
      },
    ],
  },
  {
    slug: 'halal-meat-poultry',
    name: 'Halal meat & poultry',
    group: 'fishery-meat',
    summary: 'Halal lamb and Brazilian chicken.',
    use: 'Halal lamb with cutting and packing to buyer requirements, and halal Brazilian chicken, for importers, distributors and food service.',
    specs: {
      Products: 'Halal lamb; halal Brazilian chicken',
      Form: 'Cuts and packs to buyer requirement',
      Processing: 'Frozen or chilled',
      Origin: 'Brazil (chicken); lamb origin on request',
      Packing: 'Packaging and cutting to buyer requirement',
      Incoterms: 'CIF, FOB or CFR in reefer containers; DAP on request',
    },
    highlights: [
      {
        value: 'Halal',
        label: 'Certified',
      },
      {
        value: 'Lamb',
        label: '& Brazilian chicken',
      },
      {
        value: 'Custom',
        label: 'Cutting & packing',
      },
    ],
  },
  // Petroleum & Refinery Products
  {
    slug: 'diesel-en590-10-ppm',
    name: 'Diesel EN590 10 ppm',
    group: 'petroleum-refinery-products',
    summary: 'Ultra-low-sulphur diesel to EN590.',
    use: 'EN590 10 ppm diesel for distributors, industry and power generation, from non-sanctioned origins.',
    specs: {
      'Grade / specification': 'EN590, 10 ppm sulphur',
      Origin: 'Non-sanctioned countries',
    },
    highlights: [
      {
        value: 'EN590',
        label: 'Standard',
      },
      {
        value: '10 ppm',
        label: 'Sulphur',
      },
    ],
    licenceNote:
      'Petroleum products are regulated. The buyer must hold a valid import licence or quota for the destination country. Supplied only from non-sanctioned origins with full shipping documentation.',
  },
  {
    slug: 'jet-fuel-a1',
    name: 'Jet fuel A1',
    group: 'petroleum-refinery-products',
    summary: 'Aviation turbine fuel.',
    use: 'Jet A1 aviation fuel for distributors and aviation buyers, from non-sanctioned origins.',
    specs: {
      'Grade / specification': 'Jet A1',
      Origin: 'Non-sanctioned countries',
    },
    highlights: [
      {
        value: 'Jet A1',
        label: 'Aviation fuel',
      },
    ],
    licenceNote:
      'Jet fuel is a regulated dangerous good (UN 1863) shipped under IMDG rules. The buyer must hold the required import licence and aviation fuel approvals.',
  },
  {
    slug: 'lng-lpg',
    name: 'LNG & LPG',
    group: 'petroleum-refinery-products',
    summary: 'Liquefied natural gas and petroleum gas.',
    use: 'LNG and LPG for utilities, industry and distributors, from non-sanctioned origins.',
    specs: {
      'Grade / specification': 'LNG and LPG to buyer specification',
      Origin: 'Non-sanctioned countries',
    },
    highlights: [
      {
        value: 'LNG',
        label: '& LPG',
      },
    ],
    licenceNote:
      'LNG and LPG are dangerous goods (flammable gases) shipped under IMDG/IGC rules. The buyer must hold the required import licence and terminal approvals.',
  },
  {
    slug: 'fuel-oil-d6',
    name: 'Fuel oil D6',
    group: 'petroleum-refinery-products',
    summary: 'Heavy fuel oil D6.',
    use: 'D6 fuel oil for industrial boilers and power generation, from non-sanctioned origins.',
    specs: {
      'Grade / specification': 'D6',
      Origin: 'Non-sanctioned countries',
    },
    highlights: [
      {
        value: 'D6',
        label: 'Fuel oil',
      },
    ],
    licenceNote:
      'Fuel oil imports are regulated and may require the buyer’s import licence and compliance with local sulphur limits.',
  },
  {
    slug: 'bitumen',
    name: 'Bitumen',
    group: 'petroleum-refinery-products',
    summary: '60/70 penetration grade, CFR/CIF Mundra.',
    use: 'Gulf-origin penetration-grade bitumen for road construction, loaded at Sohar and delivered CFR/CIF to Mundra, India. ETECH pioneered bitumen imports through Vizag Port in 1999.',
    specs: {
      'Grade / specification': '60/70 penetration',
      Origin: 'Gulf origin, loaded at Sohar, Oman',
      Packing: 'New steel drums',
      Incoterms:
        'CIF, FOB or CFR (current offer CFR/CIF Mundra); DAP and end-to-end delivery on request',
      'Typical lot size': 'Tailored to your volume',
    },
    highlights: [
      {
        value: '60/70',
        label: 'Penetration grade',
      },
      {
        value: 'Sohar → Mundra',
        label: 'Route',
      },
      {
        value: 'Since 1999',
        label: 'Bitumen trading',
      },
    ],
    licenceNote:
      'Bitumen in drums ships as general cargo. Bulk hot bitumen is a dangerous good (UN 3257). The buyer’s import licence applies where required.',
  },
  {
    slug: 'petroleum-coke',
    name: 'Petroleum coke',
    group: 'petroleum-refinery-products',
    summary: 'Fuel-grade and anode-grade pet coke.',
    use: 'High-calorific fuel for cement plants and power stations, and calcining feed for aluminium anodes.',
    specs: {
      'Grade / specification': 'Fuel grade and anode grade',
      'Key parameters':
        'Sulphur %, calorific value, volatile matter and HGI per lot',
      Origin: 'Non-sanctioned countries',
      Packing: 'Bulk vessel',
    },
    licenceNote:
      'Petroleum coke imports are restricted in some countries and may need the buyer’s import permit or end-use declaration.',
  },
  {
    slug: 'base-oil',
    name: 'Base oil',
    group: 'petroleum-refinery-products',
    summary: 'Group I and II base oils, SN grades.',
    use: 'Base oils for lubricant blenders and grease manufacturers.',
    specs: {
      'Grade / specification':
        'Group I and Group II; SN 150, SN 500 and other viscosity grades',
      Origin: 'Non-sanctioned countries',
      Packing: 'Flexitanks, drums, ISO tanks or bulk',
    },
    licenceNote:
      'Base oil imports may require the buyer’s import licence in some countries. MSDS provided on request.',
  },
  {
    slug: 'sludge-oil',
    name: 'Sludge oil',
    group: 'petroleum-refinery-products',
    summary: 'Supplied under applicable permits.',
    use: 'Waste oil for licensed reprocessors and oil recovery plants.',
    specs: {
      'Grade / specification': 'Water and sediment content per lot',
    },
    licenceNote:
      'Sludge oil can fall under hazardous-waste rules, including the Basel Convention. The buyer must hold a valid licence to import and reprocess waste oil; supply is arranged only with the permits and documentation required in the origin and destination countries.',
  },
  {
    slug: 'granular-sulphur',
    name: 'Granular sulphur',
    group: 'petroleum-refinery-products',
    summary: '99.5% minimum purity, 1 MT jumbo or bulk.',
    use: 'Essential for rubber vulcanisation in automotive, aviation and industrial tyre production, and for fertiliser and sulphuric acid manufacturing.',
    specs: {
      'Grade / specification': '99.5% minimum purity',
      Origin: 'Non-sanctioned countries',
      Packing: '1 MT jumbo bags or bulk vessel, customised on request',
    },
    highlights: [
      {
        value: '99.5%',
        label: 'Minimum purity',
      },
      {
        value: '1 MT jumbo',
        label: 'or bulk vessel',
      },
    ],
    qualityNote: 'MSDS provided on request.',
    licenceNote:
      'Sulphur is a dangerous good for transport (UN 1350, flammable solid). It ships with an MSDS under IMDG/IMSBC rules; the buyer’s import permits apply.',
  },
  // Fertilisers
  {
    slug: 'urea-46-granular',
    name: 'Urea 46% granular',
    group: 'fertilisers',
    summary: 'Prilled and granular urea, now sourcing for Sri Lanka.',
    use: 'Urea with 46% nitrogen for agriculture, in prilled and granular forms, from non-sanctioned origins. Currently sourcing for buyers in Sri Lanka.',
    specs: {
      'Grade / specification': '46% nitrogen',
      Form: 'Prilled and granular',
      Origin: 'Non-sanctioned countries',
    },
    highlights: [
      {
        value: '46%',
        label: 'Nitrogen',
      },
      {
        value: 'Prilled · granular',
        label: 'Forms',
      },
      {
        value: 'Sri Lanka',
        label: 'Now sourcing for',
      },
    ],
  },
  // Construction Materials
  {
    slug: 'aggregates-armour-rock',
    name: 'Aggregates & armour rock',
    group: 'construction-materials',
    summary:
      'Omani 10 mm and 20 mm aggregate, boulders and gabbro armour rock.',
    use: 'Consistently graded aggregates and gabbro rock for construction, breakwaters and marine works, delivered to site.',
    specs: {
      'Sizes / types':
        '10 mm and 20 mm aggregate, all aggregate types, boulders, gabbro armour rock and heavy armour rock (grades 1 to 3); other sizes on request',
      Source: 'Oman',
      Delivery: 'Bahrain, the Maldives, Bangladesh and the GCC',
    },
    highlights: [
      {
        value: '10 / 20 mm',
        label: 'Aggregate sizes',
      },
      {
        value: 'Oman',
        label: 'Origin',
      },
      {
        value: 'Grades 1–3',
        label: 'Gabbro armour rock',
      },
    ],
  },
  {
    slug: 'marine-sand',
    name: 'Marine sand',
    group: 'construction-materials',
    summary: 'Ocean-bed sand for land filling and reclamation.',
    use: 'Excavated ocean-bed sand for land filling, reclamation, port construction and wave-control projects.',
    specs: {
      'Sizes / types':
        'Excavated ocean-bed sand, graded to project specification',
    },
    highlights: [
      {
        value: 'Land filling',
        label: '& reclamation',
      },
      {
        value: 'Wave control',
        label: 'Coastal protection',
      },
    ],
    licenceNote:
      'Marine sand extraction and import need government permits in many countries; supply is arranged with the necessary approvals for each project.',
  },
  {
    slug: 'manufactured-processed-sand',
    name: 'Manufactured & processed sand',
    group: 'construction-materials',
    summary: 'M-sand for concrete, plaster and blockwork.',
    use: 'Manufactured sand and processed sand for concreting, plastering and brick or blockwork.',
    specs: {
      'Sizes / types': 'Manufactured sand (M-sand), processed sand',
    },
  },
  {
    slug: 'shuttering-plywood',
    name: 'Shuttering plywood',
    group: 'construction-materials',
    summary: 'Shuttering and other plywood on request.',
    use: 'Film-faced shuttering plywood for formwork, and other plywood to the buyer’s request.',
    specs: {
      'Sizes / types': 'Shuttering plywood; other plywoods on request',
    },
    highlights: [
      {
        value: 'Formwork',
        label: 'Shuttering',
      },
      {
        value: 'On request',
        label: 'Other plywoods',
      },
    ],
  },
  // Recycled & Biomass
  {
    slug: 'scrap-metals',
    name: 'Scrap metals',
    group: 'recycled-biomass',
    summary: 'HMS 1 & 2, copper, aluminium, UBC and more.',
    use: 'Ferrous and non-ferrous scrap from ETECH Recyclers’ two yards in Chennai and Sri City, for steel mills, foundries and smelters.',
    specs: {
      Grade:
        'HMS 1, HMS 2, copper (incl. millberry), aluminium, UBC, plastics, end-of-life vehicles',
      Origin: 'India (Chennai and Sri City yards)',
    },
    highlights: [
      {
        value: 'HMS 1 & 2',
        label: 'Steel scrap',
      },
      {
        value: 'Copper',
        label: 'incl. millberry',
      },
      {
        value: '2 yards',
        label: 'India',
      },
    ],
  },
  {
    slug: 'wood-pellets',
    name: 'Wood pellets',
    group: 'recycled-biomass',
    summary: 'Biomass fuel pellets from Green Earth Solutions.',
    use: 'Wood pellets from Green Earth Solutions for biomass heating and power generation.',
    specs: {
      Grade: 'Industrial and premium grades to buyer specification',
      Packing: 'Bulk or jumbo bags, customised on request',
    },
    licenceNote:
      'Wood pellets ship under the IMSBC Code with oxygen-depletion and off-gassing precautions; phytosanitary certificates provided where required.',
  },
]

export function findCommodity(slug: string | undefined): Commodity | undefined {
  return commodities.find((commodity) => commodity.slug === slug)
}
