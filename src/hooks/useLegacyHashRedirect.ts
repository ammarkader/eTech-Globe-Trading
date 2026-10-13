import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { commodityPath, divisionPath, HOME_PATH } from '../lib/paths'

/** Maps a URL hash from the old single-file site to its new path, or null if it is not one. */
function legacyHashToPath(hash: string): string | null {
  if (hash === '#/') return HOME_PATH

  const match = /^#\/(division|commodity)\/([^/?#]+)\/?$/.exec(hash)
  if (!match) return null

  const [, kind, slug] = match
  return kind === 'division' ? divisionPath(slug) : commodityPath(slug)
}

/**
 * Redirects old `#/division/<slug>` and `#/commodity/<slug>` links to the clean routes.
 * Runs once in the browser; the hash is never used for routing.
 */
export function useLegacyHashRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    const path = legacyHashToPath(window.location.hash)
    if (path) navigate(path, { replace: true })
  }, [navigate])
}
