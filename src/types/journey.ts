export interface JourneyItem {
  /** A year, a range of years, or a label such as "Today". */
  year: string
  title: string
  description: string
  /** Shown as a highlighted card on the timeline. */
  highlighted?: boolean
}

export interface WhyChooseItem {
  title: string
  description: string
}
