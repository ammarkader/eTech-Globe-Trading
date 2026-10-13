import { homeContent } from '../../data/home'
import { team } from '../../data/team'
import { useReveal } from '../../hooks/useReveal'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * "Core professional team": one tile per person, with their initials above their
 * name, role and location. The initials tile is the approved visual, not a
 * placeholder for a photograph. Four columns, three up to 899px, two up to 599px.
 *
 * Hovering a person lifts their tile and turns it white, with the card shadow and
 * violet border. The people are not links.
 */
export function Team() {
  const { heading, intro } = homeContent.team

  const reveal = useReveal<HTMLDivElement>()

  return (
    <Section id="team" flushTop>
      <Container>
        <SectionHeading heading={heading} intro={intro} />
        <div
          {...reveal}
          className="grid grid-cols-4 gap-x-grid-gap gap-y-[calc(var(--spacing-grid-gap)+8px)] upto-899:grid-cols-3 upto-599:grid-cols-2"
        >
          {team.map((member) => (
            <article key={member.name} className="group">
              <div
                aria-hidden="true"
                className="mb-4 grid aspect-[4/3] place-items-center rounded-card border border-[rgba(83,58,253,0.1)] bg-[linear-gradient(155deg,var(--color-surface)_0%,rgba(226,228,255,0.3)_100%)] text-[1.7rem]/[normal] font-semibold tracking-[-0.02em] text-accent transition-[translate,box-shadow,border-color,background-color] group-hover:-translate-y-lift group-hover:border-card-hover-line group-hover:bg-white group-hover:bg-none group-hover:shadow-card-hover motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
              >
                {member.initials}
              </div>
              <h3 className="text-title-sm/[1.3] tracking-[-0.015em]">
                {member.name}
              </h3>
              <p className="mt-1 text-card/[1.5] text-copy">
                {member.role}
                <br />
                {member.location}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
