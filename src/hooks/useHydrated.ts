import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/** False in the prerendered HTML and during hydration, true once the app is running in the browser. */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}
