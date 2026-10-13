import { useEffect, useRef, useState } from 'react'

/** As in etech-final.html: an element is revealed once 12% of it is in view. */
const VISIBLE_SHARE = 0.12
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

/** "hidden": waiting below or above the window. "shown": in its place. */
export type RevealState = 'hidden' | 'shown'

type Listener = (state: RevealState) => void

/** One observer serves every reveal target on the page. It exists only while there are targets. */
let observer: IntersectionObserver | null = null
const listeners = new Map<Element, Listener>()
/** Targets the observer has already reported on once. */
const reported = new WeakSet<Element>()

function onIntersections(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    const target = entry.target
    const notify = listeners.get(target)
    if (!notify) continue

    const firstReport = !reported.has(target)
    reported.add(target)

    // First report: whatever is already on screen stays visible, and only the
    // rest is hidden to wait. After that, 12% in view reveals it, for good.
    const show = firstReport
      ? entry.isIntersecting
      : entry.intersectionRatio >= VISIBLE_SHARE

    if (show) {
      release(target)
      notify('shown')
    } else if (firstReport) {
      notify('hidden')
    }
  }
}

function watch(target: Element, listener: Listener) {
  observer ??= new IntersectionObserver(onIntersections, {
    threshold: [0, VISIBLE_SHARE],
  })
  listeners.set(target, listener)
  observer.observe(target)
}

function release(target: Element) {
  listeners.delete(target)
  reported.delete(target)
  observer?.unobserve(target)
  if (listeners.size === 0) {
    observer?.disconnect()
    observer = null
  }
}

/**
 * Scroll reveal, as in etech-final.html: the element fades in and rises 24px into
 * place when it scrolls into view, once. Spread the result onto an existing element:
 *
 *   const reveal = useReveal<HTMLDivElement>()
 *   return <div {...reveal} className="…">
 *
 * The styles are in src/styles/index.css. The element is only ever hidden by this
 * hook, in the browser: the prerendered page shows everything, and so does a page
 * whose scripts did not run. Anything already on screen when the page starts is
 * left visible rather than hidden to be revealed. Nothing is hidden, and nothing
 * is observed, for visitors who prefer reduced motion.
 */
export function useReveal<T extends Element>() {
  const ref = useRef<T>(null)
  const [state, setState] = useState<RevealState>()

  useEffect(() => {
    const target = ref.current
    if (!target) return
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia(REDUCED_MOTION).matches) return

    watch(target, setState)
    return () => release(target)
  }, [])

  return { ref, 'data-reveal': state } as const
}
