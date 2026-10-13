import { useEffect, useState } from 'react'
import type { RevealState } from './useReveal'

/** How often the figure is redrawn while it runs: 25 times a second. */
const STEP = 40

/**
 * A whole number that runs from `from` to `to`, once, when its element scrolls into
 * view. Pass the element's reveal state (see useReveal), which says when that is:
 *
 *   const reveal = useReveal<HTMLDivElement>()
 *   const count = useCount(0, 39, reveal['data-reveal'])
 *
 * The number starts quickly and slows into its final value. It is driven by a short
 * timer that stops itself when the number arrives. The prerendered page, a page
 * whose scripts did not run, and visitors who prefer reduced motion get `to` at
 * once: useReveal reports no state for them.
 */
export function useCount(
  from: number,
  to: number,
  reveal: RevealState | undefined,
  duration = 1600,
): number {
  const [value, setValue] = useState<number>()
  const running = reveal === 'shown'

  useEffect(() => {
    if (!running) return

    const start = performance.now()
    const timer = window.setInterval(() => {
      const progress = Math.min(1, (performance.now() - start) / duration)
      const eased = 1 - (1 - progress) ** 2
      setValue(Math.round(from + (to - from) * eased))
      if (progress === 1) window.clearInterval(timer)
    }, STEP)

    return () => window.clearInterval(timer)
  }, [running, from, to, duration])

  if (reveal === undefined) return to
  return value ?? from
}
