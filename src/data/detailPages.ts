/**
 * Fixed copy of the division and commodity page templates, exactly as in etech-final.html.
 * Text that differs per division or commodity lives in divisions.ts and commodities.ts.
 */
export const detailPageContent = {
  breadcrumbHome: 'Home',
  quote: {
    label: 'Request a quote',
    /** Followed by the division or commodity name in the email subject. */
    subjectPrefix: 'Enquiry: ',
  },
  division: {
    breadcrumbSection: 'What we do',
    photosHeading: 'Our people at work',
    offersHeading: 'What we offer',
    rootsHeading: 'Our roots',
    projectsHeading: 'Joint venture & construction family',
    aside: {
      heading: 'Talk to this division',
      text: 'Tell us what you need and where, and the right team will reply.',
    },
  },
  commodity: {
    breadcrumbSection: 'Commodities',
    photosHeading: 'From the field',
    specsHeading: 'Specifications',
    otherSpecsLabel: 'Other specifications',
    otherSpecsLinkLabel: 'Contact us for the full specification sheet',
    /** Followed by the commodity name in the email subject. */
    specRequestSubjectPrefix: 'Specification request: ',
    specsNote: 'Full specifications are confirmed per contract.',
    inspectionNote:
      'Independent inspection by SGS, Intertek or an equivalent body, with a certificate of analysis, can be arranged for each shipment.',
    qualityHeading: 'Quality documents',
    licenceHeading: 'Licences & compliance',
    aside: {
      /** Followed by the commodity name as it reads in a sentence (nameInSentence). */
      headingPrefix: 'Request ',
      text: 'Send the quantity, destination port, Incoterm and delivery window. We’ll reply with an offer and specification sheet.',
    },
    /** Followed by the group name in lower case. */
    relatedHeadingPrefix: 'More ',
  },
} as const
