import type { ImageKey } from './media'
import type { InternalLink } from './site'

/** One tab of the "Inside ETECH" section. */
export interface InsideETECHItem {
  id: string
  tab: string
  image: ImageKey
  heading: string
  text: string
  link: InternalLink
}
