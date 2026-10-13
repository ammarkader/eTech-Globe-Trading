import { homeContent } from '../../data/home'
import { whyChoose } from '../../data/whyChoose'
import { useReveal } from '../../hooks/useReveal'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * "Why choose ETECH?": eight reasons as numbered cards on the deep navy background.
 * The numbers (01 to 08) come from the list's own counter. The cards are not links.
 * On hover a card rises and its border and background lighten; there is no shadow,
 * since it would not show on navy.
 */
export function WhyChoose() {
  const { heading, intro } = homeContent.whyChoose

  const reveal = useReveal<HTMLOListElement>()

  return (
    <Section id="why" className="bg-deep text-on-deep">
      <Container>
        <SectionHeading heading={heading} intro={intro} onDeep />
        <ol
          {...reveal}
          className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-grid-gap [counter-reset:why]"
        >
          {whyChoose.map((item) => (
            <li
              key={item.title}
              className="rounded-card border border-deep-line bg-[rgba(226,228,255,0.03)] p-card transition-[translate,box-shadow,border-color,background-color] [counter-increment:why] before:mb-4 before:inline-block before:rounded-[6px] before:border before:border-[rgba(147,134,254,0.35)] before:px-2 before:py-1.5 before:text-small/[1.4] before:font-semibold before:tracking-[0.01em] before:text-accent-soft before:tabular-nums before:content-[counter(why,decimal-leading-zero)] hover:-translate-y-lift hover:border-[rgba(147,134,254,0.5)] hover:bg-[rgba(226,228,255,0.05)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <h3 className="text-title/[1.25] tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-2 text-card/[1.6] text-on-deep-3">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
