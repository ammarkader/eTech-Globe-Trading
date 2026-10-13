import { homeContent } from '../../data/home'
import { locations } from '../../data/locations'
import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/utils'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { cardHover, cardSurface } from '../ui/styles'

/**
 * "We operate across a global network": one card per office, yard or project
 * location, then the supply corridors. Three columns, two up to 899px, one up to
 * 599px. The cards are not links.
 *
 * Each card's pin pulses: a ring grows from it and fades. The pin does not pulse
 * for visitors who prefer reduced motion.
 */
export function Locations() {
  const { heading, intro, corridors } = homeContent.locations

  const gridReveal = useReveal<HTMLDivElement>()
  const corridorsReveal = useReveal<HTMLParagraphElement>()

  return (
    // A short bottom padding: the GCC visions heading follows one heading gap below the corridors line.
    <Section id="locations" className="pb-head-gap">
      <Container>
        <SectionHeading heading={heading} intro={intro} />
        <div
          {...gridReveal}
          className="grid grid-cols-3 gap-grid-gap upto-899:grid-cols-2 upto-599:grid-cols-1"
        >
          {locations.map((location) => (
            <article
              key={location.name}
              className={cn(
                cardSurface,
                cardHover,
                'relative overflow-hidden p-card',
              )}
            >
              {/* The resting shadow is a plain property so that the pulse animates it as one shadow. */}
              <div className="mb-4 size-2.5 animate-pin-pulse rounded-[50%] bg-accent [box-shadow:0_0_0_0_rgba(83,58,253,0.5)] motion-reduce:animate-none" />
              <h3 className="text-title/[1.25] tracking-[-0.02em]">
                {location.name}
              </h3>
              <span className="mt-1.5 mb-2.5 block text-small/[1.4] font-semibold tracking-[0.01em] text-accent">
                {location.city}
              </span>
              <p className="text-card/[1.6] text-copy">{location.detail}</p>
            </article>
          ))}
        </div>
        <p
          {...corridorsReveal}
          className="mt-8 mb-[1em] text-center text-body/[1.65] text-copy"
        >
          <b className="text-heading">{corridors.label}</b>
          {` ${corridors.text}`}
        </p>
      </Container>
    </Section>
  )
}
