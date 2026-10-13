import { homeContent } from '../../data/home'
import { leadershipMessages } from '../../data/leadership'
import { useReveal } from '../../hooks/useReveal'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * "Leadership messages": one card per message, with the leader's initials beside
 * the quotation and their name and role beneath it. The initials tile is the
 * approved visual, not a placeholder for a photograph. The cards are static.
 */
export function Leadership() {
  const { heading, intro } = homeContent.leadership

  const reveal = useReveal<HTMLDivElement>()

  return (
    <Section id="leadership" flushTop>
      <Container>
        <SectionHeading heading={heading} intro={intro} />
        <div {...reveal} className="grid gap-grid-gap">
          {leadershipMessages.map((message) => (
            <article
              key={message.name}
              className="grid grid-cols-[160px_1fr] [align-items:start] gap-9 rounded-card border border-line bg-sheet p-8 shadow-sm upto-640:grid-cols-[1fr] upto-640:gap-5 upto-640:p-6"
            >
              <div
                aria-hidden="true"
                className="grid aspect-[4/5] w-full place-items-center rounded-[12px] border border-[rgba(83,58,253,0.1)] bg-[linear-gradient(155deg,var(--color-surface)_0%,rgba(226,228,255,0.35)_100%)] text-[1.5rem]/[normal] font-semibold tracking-[-0.02em] text-accent upto-640:max-w-[140px]"
              >
                {message.initials}
              </div>
              <div>
                <blockquote className="text-lead/[1.7] tracking-[-0.012em]">
                  {message.quote}
                </blockquote>
                <p className="mt-[22px] inline-block border-t-2 border-t-accent pt-3.5">
                  <b className="block tracking-[-0.015em]">{message.name}</b>
                  <span className="text-[0.9rem] text-copy">
                    {message.role}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
