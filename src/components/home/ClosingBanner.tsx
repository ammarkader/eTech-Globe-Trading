import { photos } from '../../assets/images'
import { homeContent } from '../../data/home'
import { useReveal } from '../../hooks/useReveal'
import { divisionPath, sectionPath } from '../../lib/paths'
import type { InternalLink } from '../../types/site'
import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

function linkPath(link: InternalLink): string {
  return link.kind === 'section'
    ? sectionPath(link.sectionId)
    : divisionPath(link.slug)
}

/**
 * The closing banner: a deep navy panel with a dimmed photograph, a call to get in
 * touch and two buttons. It follows the GCC visions section with no gap, so its
 * shadow reaches up over that section's bottom edge, as in etech-final.html.
 */
export function ClosingBanner() {
  const { heading, text, image, actions } = homeContent.closing
  const [primaryAction, secondaryAction] = actions
  const photo = photos[image]

  const reveal = useReveal<HTMLDivElement>()

  return (
    <Section id="getintouch" flushTop>
      <Container>
        <div
          {...reveal}
          className="relative grid min-h-[420px] place-items-center overflow-hidden rounded-panel bg-deep text-center text-white shadow-lg after:pointer-events-none after:absolute after:inset-0 after:content-[''] after:[background:radial-gradient(60%_80%_at_50%_110%,rgba(83,58,253,0.45),transparent_70%),linear-gradient(180deg,rgba(13,23,56,0.25),rgba(13,23,56,0.65))]"
        >
          <img
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-[0.38]"
          />
          <div className="relative z-1 max-w-[640px] px-6 py-12">
            <h2 className="text-h2-panel/[1.08] tracking-[-0.035em] text-on-deep">
              {heading}
            </h2>
            <p className="mt-3 mb-[26px] text-lead/[1.6] text-on-deep-2">
              {text}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink to={linkPath(primaryAction)}>
                {primaryAction.label}
              </ButtonLink>
              <ButtonLink to={linkPath(secondaryAction)} variant="ghost">
                {secondaryAction.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
