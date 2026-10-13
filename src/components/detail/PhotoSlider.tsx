import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { photos } from '../../assets/images'
import { cn } from '../../lib/utils'
import type { Photo } from '../../types/media'

interface PhotoSliderProps {
  photos: readonly Photo[]
  /** Accessible name of the slider. */
  label: string
}

/** How long each photograph stays before the slider moves on by itself. */
const AUTOPLAY_MS = 4500
/** After a touch ends, the slider waits this long before moving by itself again. */
const RESUME_AFTER_TOUCH_MS = 1500
const SCROLL_SETTLE_MS = 120
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches

/**
 * The arrows are drawn in the browser's own button typeface, as in etech-final.html,
 * which does not pass the page's typeface on to its buttons.
 */
const NAV_BUTTON =
  'absolute top-1/2 grid size-11 [transform:translateY(-50%)] cursor-pointer place-items-center rounded-[50%] border border-[rgba(226,228,255,0.35)] bg-[rgba(13,23,56,0.5)] px-1.5 py-px [font-family:revert] text-[1.3rem]/[normal] tracking-normal text-white backdrop-blur-[8px]'

/**
 * The photo slider of the Workforce Solutions page ("Our people at work"), with the
 * behaviour of etech-final.html.
 *
 * One captioned photograph is shown at a time, in a row the visitor can also swipe.
 * Previous and next buttons and a row of dots move between them. While the slider is
 * on screen it moves on by itself every 4.5 seconds, with a progress bar along the
 * top; it pauses while the pointer is over it, while something inside it has focus
 * and while it is touched, and starts again after a button or a dot is used.
 *
 * For visitors who prefer reduced motion it never moves by itself, there is no
 * progress bar, and the photographs change without sliding.
 */
export function PhotoSlider({ photos: slides, label }: PhotoSliderProps) {
  const [current, setCurrent] = useState(0)
  /** True while the slider is counting down to its next automatic move. */
  const [playing, setPlaying] = useState(false)
  /** Changes on every countdown, so that the progress bar starts again from zero. */
  const [countdown, setCountdown] = useState(0)

  const slider = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const index = useRef(0)
  const autoplayTimer = useRef<number | undefined>(undefined)
  const resumeTimer = useRef<number | undefined>(undefined)
  const count = slides.length

  /** Shows a slide; past the last one it returns to the first, and the other way round. */
  function go(target: number) {
    const row = track.current
    if (!row) return
    const items = row.children as HTMLCollectionOf<HTMLElement>
    const furthest = row.scrollWidth - row.clientWidth

    let next = target
    if (
      next >= count ||
      (next > index.current && row.scrollLeft >= furthest - 4)
    ) {
      next = 0
    }
    if (next < 0) next = count - 1

    index.current = next
    setCurrent(next)
    row.scrollTo({
      left: Math.min(items[next].offsetLeft - items[0].offsetLeft, furthest),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  function stop() {
    window.clearTimeout(autoplayTimer.current)
    setPlaying(false)
  }

  function play() {
    if (prefersReducedMotion() || count < 2) return
    window.clearTimeout(autoplayTimer.current)
    setPlaying(true)
    setCountdown((value) => value + 1)
    autoplayTimer.current = window.setTimeout(() => {
      go(index.current + 1)
      play()
    }, AUTOPLAY_MS)
  }

  /** A button or a dot was used: show that slide and start the countdown again. */
  function choose(target: number) {
    go(target)
    play()
  }

  const onVisibilityChange = useEffectEvent((visible: boolean) => {
    if (visible) play()
    else stop()
  })

  /** After the visitor swipes, the dots follow the slide that ended up in view. */
  const onScrollSettled = useEffectEvent(() => {
    const row = track.current
    if (!row) return
    const items = row.children as HTMLCollectionOf<HTMLElement>

    let nearest = 0
    let distance = Infinity
    for (let item = 0; item < items.length; item++) {
      const offset = Math.abs(
        items[item].offsetLeft - items[0].offsetLeft - row.scrollLeft,
      )
      if (offset < distance) {
        distance = offset
        nearest = item
      }
    }
    if (
      row.scrollLeft >= row.scrollWidth - row.clientWidth - 4 &&
      index.current > nearest
    ) {
      nearest = index.current
    }
    if (nearest !== index.current) {
      index.current = nearest
      setCurrent(nearest)
    }
  })

  useEffect(() => {
    const element = slider.current
    const row = track.current
    if (!element || !row) return

    // The slider moves by itself only while it is on screen. A browser that cannot
    // tell leaves it to the buttons and dots.
    let observer: IntersectionObserver | undefined
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) =>
        onVisibilityChange(entry.isIntersecting),
      )
      observer.observe(element)
    }

    let settleTimer: number | undefined
    const onScroll = () => {
      window.clearTimeout(settleTimer)
      settleTimer = window.setTimeout(onScrollSettled, SCROLL_SETTLE_MS)
    }
    row.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer?.disconnect()
      row.removeEventListener('scroll', onScroll)
      window.clearTimeout(settleTimer)
      window.clearTimeout(autoplayTimer.current)
      window.clearTimeout(resumeTimer.current)
    }
  }, [])

  return (
    <div
      ref={slider}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={stop}
      onMouseLeave={play}
      onFocus={stop}
      onBlur={play}
      className="relative overflow-hidden rounded-panel bg-deep"
    >
      <div
        key={countdown}
        style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
        className={cn(
          'absolute top-0 left-0 h-[3px] w-0 bg-accent motion-reduce:hidden',
          playing && 'animate-slider-bar',
        )}
      />
      <div
        ref={track}
        onTouchStart={stop}
        onTouchEnd={() => {
          window.clearTimeout(resumeTimer.current)
          resumeTimer.current = window.setTimeout(play, RESUME_AFTER_TOUCH_MS)
        }}
        className="flex snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto scroll-smooth motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, position) => {
          const image = photos[slide.image]

          return (
            <figure
              key={slide.image}
              aria-label={`${position + 1} of ${count}`}
              className="relative flex-[0_0_100%] snap-start"
            >
              <img
                src={image.src}
                width={image.width}
                height={image.height}
                alt={slide.caption}
                loading="lazy"
                className="block aspect-video w-full object-cover upto-700:aspect-[4/3]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(13,23,56,0.86))] px-5 pt-10 pb-11 text-[0.93rem] text-white">
                {slide.caption}
              </figcaption>
            </figure>
          )
        })}
      </div>
      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => choose(index.current - 1)}
        className={cn(NAV_BUTTON, 'left-3 upto-700:left-2')}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={() => choose(index.current + 1)}
        className={cn(NAV_BUTTON, 'right-3 upto-700:right-2')}
      >
        ›
      </button>
      <div className="absolute inset-x-0 bottom-3.5 flex justify-center gap-2">
        {slides.map((slide, position) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to item ${position + 1}`}
            aria-current={position === current}
            onClick={() => choose(position)}
            className={cn(
              'h-[9px] cursor-pointer border-0 p-0',
              position === current
                ? 'w-[22px] rounded-[5px] bg-accent'
                : 'w-[9px] rounded-[50%] bg-[rgba(226,228,255,0.45)]',
            )}
          />
        ))}
      </div>
    </div>
  )
}
