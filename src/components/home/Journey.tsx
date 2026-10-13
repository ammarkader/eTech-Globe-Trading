import { useEffect, useRef, useState } from 'react'
import { homeContent } from '../../data/home'
import { journey } from '../../data/journey'
import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/utils'
import type { JourneyItem } from '../../types/journey'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

/** Where a milestone stands as the line is drawn: not reached yet, passed, or the latest one reached. */
type Progress = 'ahead' | 'passed' | 'latest'

/**
 * The line is drawn down to this height of the screen, measured from the top:
 * low enough that a milestone has faded in before the line arrives at it.
 */
const LINE_HEAD = 0.8
/** A checkpoint's centre, measured from the top of its row. The same figure is in the classes below. */
const CHECKPOINT_CENTRE = 12.5
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

/**
 * A milestone's row: the year, then the content, on a regular rhythm. From one
 * milestone's text to the next heading is always 56px (48px on a phone).
 */
const ROW =
  'group relative z-1 grid grid-cols-[80px_1fr] gap-[34px] pb-14 last:pb-0 upto-600:grid-cols-[56px_1fr] upto-600:gap-7 upto-600:pb-12'

/**
 * The stretch of line from this milestone's checkpoint to the next one's: a pale
 * track, filled with violet from the top as far as the visitor has scrolled
 * (--journey-fill, from 0 to 1, set by the component). The last milestone has none,
 * so the line ends on its checkpoint. Where the line is not following the scroll
 * (no script, reduced motion) every stretch is simply violet.
 */
const LINE =
  "before:absolute before:top-[12.5px] before:left-[94px] before:h-full before:w-0.5 before:bg-line before:bg-[linear-gradient(var(--color-accent),var(--color-accent))] before:[background-size:100%_calc(var(--journey-fill,1)*100%)] before:bg-no-repeat before:content-[''] last:before:hidden motion-safe:before:transition-[background-size] motion-safe:before:duration-200 motion-safe:before:ease-linear upto-600:before:left-[68px]"

/**
 * The checkpoint on the line, level with the year and the heading: an open ring
 * while the line has not reached it, violet once passed, and navy with a violet
 * ring while it is the latest one reached.
 */
const CHECKPOINT =
  "after:absolute after:top-[5.5px] after:left-[88px] after:size-3.5 after:rounded-[50%] after:border-2 after:border-accent after:bg-accent after:content-[''] motion-safe:after:transition-[background-color,border-color,box-shadow] motion-safe:after:duration-300 data-[progress=ahead]:after:border-[rgba(83,58,253,0.35)] data-[progress=ahead]:after:bg-page data-[progress=latest]:after:bg-deep data-[progress=latest]:after:[box-shadow:0_0_0_4px_rgba(83,58,253,0.18)] upto-600:after:left-[62px]"

/**
 * A milestone's content. Its box is always there, reaching 19px above and below the
 * text and 21px to each side, so every milestone's text starts at the same place
 * and nothing moves when the box shows. It shows, as a card, only while the
 * milestone is the latest one reached.
 */
const CONTENT =
  '-my-[19px] rounded-card border border-transparent px-5 py-[18px] group-data-[progress=latest]:border-[rgba(83,58,253,0.3)] group-data-[progress=latest]:bg-sheet group-data-[progress=latest]:shadow-md motion-safe:transition-[background-color,border-color,box-shadow] motion-safe:duration-300'

interface MilestoneProps {
  item: JourneyItem
  /** Absent while the line is not following the scroll. */
  progress?: Progress
}

/**
 * One milestone on the timeline. It fades up into place by itself when it scrolls
 * into view (the shared reveal), and stays.
 */
function Milestone({ item, progress }: MilestoneProps) {
  const reveal = useReveal<HTMLLIElement>()

  return (
    <li
      {...reveal}
      data-progress={progress}
      className={cn(ROW, LINE, CHECKPOINT)}
    >
      {/* The year ends at the line. One too wide for its column on a phone runs out to the left, never onto a second line. */}
      <span className="flex justify-end pt-[1.5px] text-[1rem]/[25px] font-semibold tracking-[-0.01em] whitespace-nowrap text-accent tabular-nums">
        {item.year}
      </span>
      <div className={CONTENT}>
        <h3 className="text-title/[1.25] tracking-[-0.02em]">{item.title}</h3>
        <p className="mt-1 text-card/[1.6] text-copy">{item.description}</p>
      </div>
    </li>
  )
}

/**
 * "Our journey": the group's milestones as a vertical timeline, a line with a
 * checkpoint per milestone, the year to its left and the milestone to its right.
 *
 * The line follows the visitor's scrolling: it is drawn down to a fixed height of
 * the screen, forwards and back, and stops on the last checkpoint. A milestone
 * fades in as it comes into view; when the line reaches its checkpoint it becomes
 * the latest one, marked in navy with its content shown as a card, until the next
 * is reached.
 *
 * While the timeline is on or near the screen a scroll listener works out how far the line
 * has come and writes it to the rows as a CSS variable; React state holds only
 * which milestone is the latest. There is no timer and no animation loop.
 *
 * For visitors who prefer reduced motion, and without script, the whole timeline
 * is simply there: the line complete, no milestone boxed.
 */
export function Journey() {
  const { heading, intro } = homeContent.journey
  const list = useRef<HTMLOListElement>(null)
  /** Index of the latest milestone reached, -1 before the first; null while not following the scroll. */
  const [latest, setLatest] = useState<number | null>(null)

  useEffect(() => {
    const element = list.current
    if (!element || !('IntersectionObserver' in window)) return
    if (window.matchMedia(REDUCED_MOTION).matches) return

    /** Draws the line as far as the screen is scrolled, and notes the latest checkpoint it has reached. */
    const follow = () => {
      const rows = element.children as HTMLCollectionOf<HTMLElement>
      const head =
        window.innerHeight * LINE_HEAD - element.getBoundingClientRect().top
      let reached = -1

      for (let index = 0; index < rows.length; index++) {
        const checkpoint = rows[index].offsetTop + CHECKPOINT_CENTRE
        if (checkpoint <= head) reached = index

        const next = rows[index + 1]
        if (!next) continue
        const stretch = next.offsetTop - rows[index].offsetTop
        const fill = Math.min(1, Math.max(0, (head - checkpoint) / stretch))
        rows[index].style.setProperty('--journey-fill', fill.toFixed(4))
      }
      setLatest(reached)
    }

    const listen = () => {
      window.addEventListener('scroll', follow, { passive: true })
      window.addEventListener('resize', follow)
    }
    const ignore = () => {
      window.removeEventListener('scroll', follow)
      window.removeEventListener('resize', follow)
    }

    // The page is listened to only while the timeline is on screen or within a
    // screen's height of it, so the line is already right when it comes into view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) listen()
        else ignore()
        follow()
      },
      { rootMargin: '100% 0px' },
    )
    observer.observe(element)

    return () => {
      observer.disconnect()
      ignore()
    }
  }, [])

  const progressOf = (index: number): Progress | undefined => {
    if (latest === null) return undefined
    if (index === latest) return 'latest'
    return index < latest ? 'passed' : 'ahead'
  }

  return (
    <Section id="journey" flushTop>
      <Container>
        <SectionHeading heading={heading} intro={intro} />
        <ol ref={list} className="relative">
          {journey.map((item, index) => (
            <Milestone
              key={item.year}
              item={item}
              progress={progressOf(index)}
            />
          ))}
        </ol>
      </Container>
    </Section>
  )
}
