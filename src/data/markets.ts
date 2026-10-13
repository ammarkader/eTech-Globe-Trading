import type { MarketItem } from '../types/news'

/** "Market watch": links to external articles. */
export const marketWatch: readonly MarketItem[] = [
  {
    source: 'Investing.com · 30 Sep 2026',
    title: 'Why oil prices stay high as Gulf exports recover',
    summary:
      'Goldman Sachs analysis: Gulf crude exports are back to last year’s levels, but a risk premium keeps futures elevated.',
    url: 'https://investing.com/news/commodities-news/why-are-oil-futures-still-so-high-if-middle-east-exports-have-recovered-4925072',
    linkLabel: 'Read on Investing.com',
  },
  {
    source: 'Financial Times',
    title: 'Copper supply gap expected from 2027',
    summary:
      'FT coverage of analysts warning of a widening copper shortfall as mine discoveries slow and data-centre demand grows.',
    url: 'https://www.ft.com/commodities',
    linkLabel: 'Read on FT.com',
  },
  {
    source: 'Investing.com',
    title: 'Latest commodities news',
    summary:
      'Daily coverage of metals, energy and agricultural markets, including palm oil and crude.',
    url: 'https://www.investing.com/news/commodities-news',
    linkLabel: 'Read on Investing.com',
  },
]
