import type { ImageKey } from './media'

export interface Project {
  name: string
  details: string
  /** Projects without a photograph show the approved illustrated tile. */
  image?: ImageKey
  /** Slug of the division whose page lists this project. */
  division: string
}
