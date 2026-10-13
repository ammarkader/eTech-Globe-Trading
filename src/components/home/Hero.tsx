import { homeContent } from '../../data/home'
import { divisionPath, sectionPath } from '../../lib/paths'
import type { InternalLink } from '../../types/site'
import { HeroGlobe } from '../illustrations/HeroGlobe'
import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'

function linkPath(link: InternalLink): string {
  return link.kind === 'section'
    ? sectionPath(link.sectionId)
    : divisionPath(link.slug)
}

/**
 * The homepage hero: copy on the left, the globe on the right with its legend
 * under it. The header sits over it, transparent, until the page is scrolled.
 *
 * From 901px up the globe and legend are placed over the right of the hero. At or
 * below 900px the hero is a column in the normal flow: the globe, clear of the
 * header, then its legend, then the copy.
 *
 * --gw is the globe width from 901px up; --gs is its width at or below 900px.
 */
export function Hero() {
  const { eyebrow, headingLead, headingAccent, text, actions, legend } =
    homeContent.hero
  const [primaryAction, secondaryAction] = actions

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-white bg-[radial-gradient(38%_52%_at_74%_46%,rgba(83,58,253,0.07)_0%,transparent_70%),radial-gradient(28%_36%_at_88%_80%,rgba(12,143,224,0.06)_0%,transparent_70%)] text-deep [--gs:min(62vw,264px)] [--gw:min(58vw,860px,108vh)] upto-1279:[--gw:min(42vw,108vh)] upto-900:min-h-0 upto-900:flex-col upto-900:items-stretch">
      <Container className="pointer-events-none relative z-2 pt-[110px] pb-[90px] upto-900:order-3 upto-900:pt-9 upto-900:pb-14">
        <div className="pointer-events-auto relative max-w-[560px] upto-900:static upto-900:max-w-none">
          <p className="mb-[22px] max-w-[46ch] text-[0.95rem]/[1.4] font-semibold tracking-[-0.005em] text-accent">
            {eyebrow}
          </p>
          <h1 className="text-[clamp(2.7rem,5.8vw,4.9rem)] leading-[1.02] font-[650] tracking-[-0.045em] text-deep">
            {headingLead}{' '}
            <strong className="block w-fit bg-[linear-gradient(100deg,var(--color-accent)_0%,var(--color-accent-mid)_48%,var(--color-accent-sky)_100%)] bg-clip-text pb-[0.08em] font-[650] text-transparent">
              {headingAccent}
            </strong>
          </h1>
          <p className="mt-6 mb-[34px] max-w-[46ch] text-[1.15rem]/[1.7] text-copy">
            {text}
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to={linkPath(primaryAction)}>
              {primaryAction.label}
            </ButtonLink>
            <ButtonLink to={linkPath(secondaryAction)} variant="outline">
              {secondaryAction.label}
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* The globe: ETECH hubs in navy, trade routes and their far ends in violet. Decorative; the legend names both. It comes after the copy in the markup and before it on a narrow screen (order). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-3/4 z-1 aspect-square w-(--gw) -translate-x-1/2 -translate-y-1/2 upto-1279:left-[77%] upto-900:relative upto-900:top-auto upto-900:left-auto upto-900:order-1 upto-900:mx-auto upto-900:mt-[calc(var(--spacing-header)+env(safe-area-inset-top,0px)+12px)] upto-900:w-(--gs) upto-900:translate-x-0 upto-900:translate-y-0"
      >
        <HeroGlobe className="block size-full select-none" />
      </div>

      <div className="absolute top-[calc(50%+var(--gw)*0.41+10px)] left-3/4 z-2 flex -translate-x-1/2 flex-wrap justify-center gap-x-5 gap-y-1 text-[0.8rem] tracking-[0.01em] whitespace-nowrap text-copy upto-1279:left-[77%] upto-900:relative upto-900:top-auto upto-900:left-auto upto-900:order-2 upto-900:translate-x-0 upto-900:px-5">
        <span className={`${LEGEND_DOT} before:bg-deep`}>{legend.hubs}</span>
        <span className={`${LEGEND_DOT} before:bg-accent`}>
          {legend.routes}
        </span>
      </div>
    </section>
  )
}

const LEGEND_DOT =
  "before:mr-1.5 before:inline-block before:size-[9px] before:rounded-[50%] before:align-middle before:content-['']"
