import type { Config } from '@react-router/dev/config'
import { rename, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { commodities } from './src/data/commodities'
import { divisions } from './src/data/divisions'
import { site } from './src/data/site'
import { validateData } from './src/data/validate'
import { commodityPath, divisionPath, HOME_PATH } from './src/lib/paths'

// Stops the build and the dev server if the content data is inconsistent.
validateData()

// Every known URL. The paths come from the application data, the single source of truth for slugs.
const pagePaths = [
  HOME_PATH,
  ...divisions.map((division) => divisionPath(division.slug)),
  ...commodities.map((commodity) => commodityPath(commodity.slug)),
]

export default {
  appDirectory: 'src',

  // Static deployment: no runtime server rendering.
  ssr: false,

  // Every known URL is prerendered to its own HTML file at build time.
  prerender: pagePaths,

  // The build also writes a page that can start the app at any URL. It is only ever
  // needed for unknown URLs, so publish it as 404.html, the file a static host
  // serves (with HTTP status 404) when no file matches the request.
  async buildEnd({ reactRouterConfig }) {
    const clientDirectory = join(reactRouterConfig.buildDirectory, 'client')
    await rename(
      join(clientDirectory, '__spa-fallback.html'),
      join(clientDirectory, '404.html'),
    )

    // For search engines: the list of pages, with the same addresses as their canonical
    // links, and a robots.txt that allows everything and points to that list.
    const pageUrls = pagePaths.map((path) => new URL(path, site.origin).href)
    await writeFile(
      join(clientDirectory, 'sitemap.xml'),
      [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...pageUrls.map((url) => `  <url><loc>${url}</loc></url>`),
        '</urlset>',
        '',
      ].join('\n'),
    )
    await writeFile(
      join(clientDirectory, 'robots.txt'),
      `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site.origin).href}\n`,
    )
  },
} satisfies Config
