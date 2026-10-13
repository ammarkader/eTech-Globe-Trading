/** "Latest news and updates": each item links to a commodity page. */
export interface NewsItem {
  label: string
  title: string
  summary: string
  /** Slug of the commodity the item links to. */
  commodity: string
}

/** "Market watch": each item links to an external article. */
export interface MarketItem {
  source: string
  title: string
  summary: string
  url: string
  linkLabel: string
}
