import { homeContent } from '../../data/home'
import { visions } from '../../data/visions'
import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/utils'
import type { VisionCountry } from '../../types/vision'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { cardHover, cardSurface } from '../ui/styles'

/**
 * The small flags on the cards. Four are drawn with gradients, as in etech-final.html
 * (.flag.f-*); Saudi Arabia's is the drawing below, on its green.
 */
const FLAGS: Record<VisionCountry, string> = {
  sa: 'overflow-hidden bg-[#006c35]',
  bh: '[background:linear-gradient(90deg,#fff_0_30%,#ce1126_30%)]',
  ae: '[background:linear-gradient(90deg,#c8102e_0_25%,transparent_25%),linear-gradient(#00732f_0_33.3%,#fff_33.3%_66.6%,#000_66.6%)]',
  kw: '[background:linear-gradient(90deg,#000_0_25%,transparent_25%),linear-gradient(#007a3d_0_33.3%,#fff_33.3%_66.6%,#ce1126_66.6%)]',
  om: '[background:linear-gradient(90deg,#db161b_0_30%,transparent_30%),linear-gradient(#fff_0_33.3%,#db161b_33.3%_66.6%,#008000_66.6%)]',
}

/**
 * The flag of Saudi Arabia at card size: on the green field, the creed in white
 * above a white sword whose point is towards the hoist (the left).
 *
 * The inscription is set as text, in the device's Arabic typeface, so its wording is
 * exact; the flag itself uses Thuluth calligraphy, which this does not reproduce.
 */
function SaudiFlag() {
  return (
    <svg
      viewBox="0 0 42 28"
      className="pointer-events-none block size-full select-none"
    >
      <g
        fill="#fff"
        fontFamily="system-ui, sans-serif"
        fontSize="5"
        fontWeight="700"
        textAnchor="middle"
        direction="rtl"
      >
        <text x="21" y="10" textLength="24" lengthAdjust="spacingAndGlyphs">
          لا إله إلا الله
        </text>
        <text x="21" y="16" textLength="24" lengthAdjust="spacingAndGlyphs">
          محمد رسول الله
        </text>
      </g>
      {/* The sword: a gently curved blade to its point on the left, a guard and a grip on the right. */}
      <path
        fill="#fff"
        d="M9 21.9c5.5-1.2 11.9-1.5 19-1v1.2c-7.1-.4-13.4-.2-19-.2zM27.8 19.8h.9v3.4h-.9zM28.7 20.9h3.1a.6.6 0 0 1 0 1.2h-3.1z"
      />
    </svg>
  )
}

/**
 * "Aligned with the Gulf's national visions": one card per national vision, in the
 * order of the data (ascending by year), then a note on ETECH's relationship to them.
 * Three columns, two up to 899px, one up to 599px. The cards are not links.
 *
 * The cards have no coloured line across the top (removed by request, and with it
 * the drawing of that line when the grid was revealed).
 *
 * The note keeps a quirk of etech-final.html: while it waits to be revealed it is
 * not hidden but shown at 85% opacity, 24px low. Revealed, it is at full opacity.
 */
export function Visions() {
  const { heading, intro, note } = homeContent.visions

  const gridReveal = useReveal<HTMLDivElement>()
  const noteReveal = useReveal<HTMLParagraphElement>()

  return (
    // Short paddings, a grid gap above and a heading gap below: the section follows Global network closely, and Inside ETECH follows it.
    <Section
      id="visions"
      className="bg-[linear-gradient(180deg,transparent_0%,rgba(226,228,255,0.5)_50%,transparent_100%)] pt-grid-gap pb-head-gap"
    >
      <Container>
        <SectionHeading heading={heading} intro={intro} />
        <div
          {...gridReveal}
          className="grid grid-cols-3 gap-grid-gap upto-899:grid-cols-2 upto-599:grid-cols-1"
        >
          {visions.map((vision) => (
            <article
              key={vision.name}
              className={cn(
                cardSurface,
                cardHover,
                'relative overflow-hidden p-card',
              )}
            >
              <div className="mb-card flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className={cn(
                    'block h-7 w-[42px] rounded-[4px] shadow-[0_0_0_1px_var(--color-line)]',
                    FLAGS[vision.country],
                  )}
                >
                  {vision.country === 'sa' && <SaudiFlag />}
                </span>
                <b className="text-[2.5rem]/[1] font-semibold tracking-[-0.05em] text-accent tabular-nums">
                  {vision.year}
                </b>
              </div>
              <h3 className="text-title/[1.25] tracking-[-0.02em]">
                {vision.name}
              </h3>
              <p className="mt-2 mb-3 text-card/[1.6] text-copy">
                {vision.summary}
              </p>
              <ul className="list-disc pl-[18px] text-card/[1.6] text-copy marker:text-accent">
                {vision.points.map((point) => (
                  <li key={point} className="my-[3px]">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p
          {...noteReveal}
          className="mx-auto mt-card mb-[1em] max-w-[40rem] text-center text-lead/[1.6] font-bold text-balance text-copy motion-safe:data-[reveal=hidden]:opacity-85!"
        >
          {note}
        </p>
      </Container>
    </Section>
  )
}
