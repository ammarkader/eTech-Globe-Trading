import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/**
 * The current year. The prerendered HTML contains the year of the build;
 * the browser then shows its own year, so a page built last year is still correct.
 */
export function useCurrentYear(): number {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => __BUILD_YEAR__,
  )
}
