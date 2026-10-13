import { type RouteConfig, index, route } from '@react-router/dev/routes'

/** The complete route set. Homepage sections are anchors, not routes. */
export default [
  index('pages/HomePage.tsx'),
  route('divisions/:slug', 'pages/DivisionPage.tsx'),
  route('commodities/:slug', 'pages/CommodityPage.tsx'),
  route('*', 'pages/NotFoundPage.tsx'),
] satisfies RouteConfig
