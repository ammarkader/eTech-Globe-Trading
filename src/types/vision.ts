/** Countries whose flag is drawn on a GCC vision card. */
export type VisionCountry = 'sa' | 'bh' | 'ae' | 'kw' | 'om'

export interface Vision {
  country: VisionCountry
  year: number
  name: string
  summary: string
  points: readonly string[]
}
