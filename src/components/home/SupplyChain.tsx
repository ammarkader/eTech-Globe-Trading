import { homeContent } from '../../data/home'
import { useCount } from '../../hooks/useCount'
import { type RevealState, useReveal } from '../../hooks/useReveal'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { SupplyChainDiagram } from './SupplyChainDiagram'

type Counter = (typeof homeContent.supplyChain.counters)[number]

interface CounterFigureProps {
  counter: Counter
  /** The reveal state of the counters row: the figure counts up when the row is shown. */
  reveal: RevealState | undefined
}

/**
 * A counter's figure. It counts up from zero, once, when the row scrolls into view.
 * A figure of 10,000 and above has a thousands separator, also while it counts.
 */
function CounterFigure({ counter, reveal }: CounterFigureProps) {
  const count = useCount(0, counter.value, reveal)
  const digits =
    counter.value >= 10000 ? count.toLocaleString('en-US') : String(count)

  return (
    <b className="block text-[clamp(2.3rem,4vw,3.1rem)]/[1] font-medium tracking-[-0.045em] text-heading tabular-nums">
      {`${digits}${counter.suffix ?? ''}`}
    </b>
  )
}

/**
 * "From mine and plantation to your port": the supply-chain diagram with its four
 * steps, and the row of headline figures beneath it, which count up as they appear.
 */
export function SupplyChain() {
  const { heading, intro, steps, counters } = homeContent.supplyChain

  const diagramReveal = useReveal<HTMLDivElement>()
  const countersReveal = useReveal<HTMLDivElement>()

  return (
    <Section id="how" className="pb-10">
      <Container>
        <SectionHeading heading={heading} intro={intro} />

        <div
          {...diagramReveal}
          className="overflow-hidden rounded-card border border-line bg-sheet px-6 pt-9 pb-[22px] shadow-sm"
        >
          <SupplyChainDiagram />
          <div className="mt-1.5 grid grid-cols-4 text-center text-small/[1.5] text-copy">
            {steps.map((step) => (
              <span key={step.title}>
                <b className="mb-0.5 block text-title-sm/[1.3] font-semibold tracking-[-0.015em] text-heading">
                  {step.title}
                </b>
                {step.text}
              </span>
            ))}
          </div>
        </div>

        <div
          {...countersReveal}
          className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-7"
        >
          {counters.map((counter) => (
            <div
              key={counter.label}
              className="relative border-t border-line pt-[18px] before:absolute before:-top-px before:left-0 before:h-0.5 before:w-9 before:bg-accent before:content-['']"
            >
              <CounterFigure
                counter={counter}
                reveal={countersReveal['data-reveal']}
              />
              <span className="mt-2 block text-small/[1.5] text-copy">
                {counter.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
