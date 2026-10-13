import { HOME_PATH } from '../lib/paths'
import { pageTitle } from '../lib/seo'
import { PageMeta } from './seo/PageMeta'
import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'

/**
 * Not-found content, shared by the wildcard route, unknown division and commodity slugs,
 * and the static 404 page.
 *
 * etech-final.html has no such page, so this one uses only what the approved design
 * already has: the white ground and faint grid of the homepage hero, a section heading,
 * a lead paragraph and the primary button. It fills the screen below the site header,
 * with the message in the middle. It is not indexed and has no canonical URL.
 */
export function NotFound() {
  return (
    <main className="pt-header">
      <PageMeta title={pageTitle('Page not found')} noindex />
      <section className="grid-backdrop relative grid min-h-[calc(100svh-var(--spacing-header))] place-items-center overflow-hidden bg-white py-section text-center [--grid-line:rgba(13,23,56,0.045)]">
        <Container className="relative">
          <h1 className="text-h2 text-deep">Page not found</h1>
          <p className="mx-auto mt-4 max-w-[46ch] text-lead text-copy">
            The page you are looking for does not exist.
          </p>
          <ButtonLink to={HOME_PATH} className="mt-8">
            Back to the homepage
          </ButtonLink>
        </Container>
      </section>
    </main>
  )
}
