import type { ReactNode } from 'react'
import { Links, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { SiteLayout } from './components/layout/SiteLayout'
import { NotFound } from './components/NotFound'
import { organizationSchema, site } from './data/site'
import { useHydrated } from './hooks/useHydrated'
import { useLegacyHashRedirect } from './hooks/useLegacyHashRedirect'
import './styles/index.css'

/**
 * Document shell for every page. It has no <title> or description:
 * each route renders its own through PageMeta.
 */
export function Layout({ children }: { children: ReactNode }) {
  // Smooth scrolling is switched on in CSS once the app is running, so restoring the
  // scroll position when a page is reloaded stays instant.
  const hydrated = useHydrated()

  return (
    <html lang="en" data-hydrated={hydrated ? '' : undefined}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..800&display=swap"
        />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  useLegacyHashRedirect()

  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  )
}

/**
 * Rendered into the static 404 page. Every known URL is prerendered, so the only
 * documents that start without a matched route are requests for unknown URLs.
 */
export function HydrateFallback() {
  return (
    <SiteLayout solidHeader>
      <NotFound />
    </SiteLayout>
  )
}
