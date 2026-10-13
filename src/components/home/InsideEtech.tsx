import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router'
import { photos } from '../../assets/images'
import { homeContent } from '../../data/home'
import { insideEtech } from '../../data/insideEtech'
import { divisionPath, sectionPath } from '../../lib/paths'
import { cn } from '../../lib/utils'
import type { InternalLink } from '../../types/site'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import {
  arrowLinkOnDeep,
  pillControl,
  pillIdle,
  pillSelected,
} from '../ui/styles'

/** The tabs advance by themselves this often, until the visitor uses them. */
const AUTO_ADVANCE_MS = 7000
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

const tabId = (id: string) => `inside-etech-tab-${id}`
const panelId = (id: string) => `inside-etech-panel-${id}`

function linkPath(link: InternalLink): string {
  return link.kind === 'section'
    ? sectionPath(link.sectionId)
    : divisionPath(link.slug)
}

/**
 * "Inside ETECH": four tabs over one image panel.
 *
 * The tabs move on every seven seconds until the visitor picks one, by click or by
 * keyboard; after that they stay put. They never move by themselves for visitors
 * who prefer reduced motion.
 *
 * As in etech-final.html, when the visitor changes tab the new photograph eases from
 * slightly enlarged back to its normal size. It does not do so on load or when the
 * tabs advance by themselves.
 */
export function InsideEtech() {
  const { heading, intro, tabsAriaLabel } = homeContent.insideEtech
  const [active, setActive] = useState(0)
  const [autoAdvance, setAutoAdvance] = useState(true)
  /** True once the visitor has changed tab; from then on a newly shown photograph zooms. */
  const [zoomOnShow, setZoomOnShow] = useState(false)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    if (!autoAdvance) return
    if (window.matchMedia(REDUCED_MOTION).matches) return

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % insideEtech.length)
    }, AUTO_ADVANCE_MS)
    return () => window.clearInterval(timer)
  }, [autoAdvance])

  /** The visitor chose a tab: show it and stop the automatic advance for good. */
  const choose = (index: number) => {
    setAutoAdvance(false)
    if (index === active) return
    setActive(index)
    setZoomOnShow(true)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = insideEtech.length - 1
    const target = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }[event.key]
    if (target === undefined) return

    event.preventDefault()
    choose(target)
    tabs.current[target]?.focus()
  }

  return (
    <Section id="explore" className="pt-grid-gap">
      <Container>
        <SectionHeading heading={heading} intro={intro} />

        <div
          role="tablist"
          aria-label={tabsAriaLabel}
          onKeyDown={onKeyDown}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {insideEtech.map((item, index) => (
            <button
              key={item.id}
              ref={(element) => {
                tabs.current[index] = element
              }}
              type="button"
              role="tab"
              id={tabId(item.id)}
              aria-controls={panelId(item.id)}
              aria-selected={index === active}
              tabIndex={index === active ? 0 : -1}
              onClick={() => choose(index)}
              className={cn(
                pillControl,
                index === active ? pillSelected : pillIdle,
              )}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-panel bg-deep text-white shadow-lg">
          {insideEtech.map((item, index) => {
            const image = photos[item.image]
            const isActive = index === active

            return (
              <div
                key={item.id}
                role="tabpanel"
                id={panelId(item.id)}
                aria-labelledby={tabId(item.id)}
                hidden={!isActive}
                className="relative grid min-h-[min(560px,80vh)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(13,23,56,0.08)_0%,rgba(13,23,56,0.42)_48%,rgba(13,23,56,0.86)_100%)] after:content-[''] upto-700:min-h-[480px]"
              >
                {/* Only the first photograph is deferred; the others are fetched quietly so a tab change is instant. */}
                <img
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt=""
                  loading={index === 0 ? 'lazy' : 'eager'}
                  fetchPriority={index === 0 ? undefined : 'low'}
                  className={cn(
                    'absolute inset-0 size-full [transform:scale(1)] object-cover opacity-50 motion-reduce:animate-none',
                    // A hidden panel that is shown again starts the animation afresh.
                    isActive && zoomOnShow && 'animate-panel-zoom',
                  )}
                />
                <div className="relative z-1 max-w-[640px] [align-self:end] p-[clamp(28px,5vw,64px)]">
                  <h3 className="text-h2-panel/[1.08] tracking-[-0.035em] text-on-deep">
                    {item.heading}
                  </h3>
                  <p className="my-[1em] text-lead/[1.6] text-on-deep-2">
                    {item.text}
                  </p>
                  <Link to={linkPath(item.link)} className={arrowLinkOnDeep}>
                    {item.link.label}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
