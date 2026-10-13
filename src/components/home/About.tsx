import { homeContent } from '../../data/home'
import { useCount } from '../../hooks/useCount'
import { useReveal } from '../../hooks/useReveal'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

/**
 * How many years above the founding year its countdown starts. Ten keeps the first
 * two figures still, so only the last two settle: a short step back, not a ticker.
 */
const YEARS_BACK = 10

/**
 * "About": the founding year beside the group's story and the places it works in,
 * then the three-part motto and the group's aim. The year counts down into place
 * when it scrolls into view.
 */
export function About() {
  const { year, heading, paragraphs, places, motto, aim } = homeContent.about

  const storyReveal = useReveal<HTMLDivElement>()
  const mottoReveal = useReveal<HTMLDivElement>()
  const aimReveal = useReveal<HTMLParagraphElement>()

  const founded = Number(year)
  const shownYear = useCount(
    founded + YEARS_BACK,
    founded,
    storyReveal['data-reveal'],
    1800,
  )

  return (
    <Section id="about">
      <Container
        {...storyReveal}
        className="grid grid-cols-[1fr_1fr] items-center gap-[72px] upto-800:grid-cols-[1fr] upto-800:gap-5"
      >
        {/* The year fills its column. The gradient keeps to the width of the figures (2.12em: their 2em and the overhang of the last one), so it reads the same at every size. */}
        <div className="bg-[linear-gradient(135deg,var(--color-deep)_5%,var(--color-accent)_60%,var(--color-accent-soft)_100%)] bg-[length:2.12em_100%] bg-clip-text bg-no-repeat pb-[0.05em] text-[clamp(5.5rem,14vw,11rem)]/[0.9] font-bold tracking-[-0.06em] text-transparent">
          {shownYear}
        </div>
        <div>
          <h2 className="mb-5 text-h2-sub tracking-[-0.03em]">{heading}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="my-[1em] text-body/[1.65] text-copy">
              {paragraph}
            </p>
          ))}
          <ul className="mt-6 mb-[1em] flex flex-wrap gap-2">
            {places.map((place) => (
              <li
                key={place}
                className="rounded-pill border border-[rgba(83,58,253,0.12)] bg-[rgba(226,228,255,0.5)] px-3.5 py-1.5 text-[0.85rem] font-medium"
              >
                {place}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container>
        <div
          {...mottoReveal}
          className="mt-16 grid grid-cols-[repeat(3,1fr)] gap-px overflow-hidden rounded-card border border-line bg-line shadow-sm upto-700:grid-cols-[1fr]"
        >
          {motto.map(({ keyword, text }) => (
            <p
              key={keyword}
              className="bg-sheet px-7 py-[30px] text-body/[1.5] tracking-[-0.01em] text-copy"
            >
              <b className="mb-1 block text-h3/[1.2] font-semibold tracking-[-0.03em] text-accent">
                {keyword}
              </b>
              {` ${text}`}
            </p>
          ))}
        </div>
        <p
          {...aimReveal}
          className="mt-7 mb-[1em] max-w-[70ch] text-body/[1.65] text-copy"
        >
          <strong className="text-heading">{aim.label}</strong>
          {` ${aim.text}`}
        </p>
      </Container>
    </Section>
  )
}
