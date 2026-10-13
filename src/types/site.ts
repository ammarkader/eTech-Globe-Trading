/** Anchor ids of the homepage sections. These are sections, not routes. */
export type SectionId =
  | 'latest'
  | 'how'
  | 'divisions'
  | 'commodities'
  | 'explore'
  | 'about'
  | 'journey'
  | 'why'
  | 'leadership'
  | 'team'
  | 'locations'
  | 'visions'
  | 'getintouch'
  | 'markets'
  | 'linkedin'
  | 'contact'

export interface NavItem {
  label: string
  sectionId: SectionId
}

/** A link to a homepage section or to a division page. */
export type InternalLink =
  | { kind: 'section'; label: string; sectionId: SectionId }
  | { kind: 'division'; label: string; slug: string }

export interface SiteConfig {
  name: string
  legalName: string
  tagline: string
  origin: string
  logo: { wordmark: string; descriptor: string }
  emails: { primary: string; secondary: string }
  linkedInUrl: string
  navigation: readonly NavItem[]
  quoteAction: { label: string; sectionId: SectionId }
  /** Text of the full-screen menu shown at or below 1180px. */
  menu: {
    eyebrow: string
    globeLabel: string
    globeText: string
    tagline: string
    strapline: string
  }
  footer: {
    entities: string
    credit: { prefix: string; label: string; url: string }
  }
}
