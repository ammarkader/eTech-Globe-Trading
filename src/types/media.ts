/** Photographs extracted from etech-final.html. Files are registered in src/assets/images.ts. */
export type ImageKey =
  | 'dammam'
  | 'crescent-county'
  | 'west-silver-town'
  | 'crescent-avenue'
  | 'crescent-tower'
  | 'crescent-arcadia'
  | 'appa-palli-masjid'
  | 'modular-kitchens'
  | 'masjid-doors'
  | 'silica-sand-1'
  | 'silica-sand-2'
  | 'silica-sand-3'
  | 'silica-sand-4'
  | 'manganese-ore-1'
  | 'manganese-ore-2'
  | 'workforce-1'
  | 'workforce-2'
  | 'workforce-3'
  | 'workforce-4'
  | 'workforce-5'

export interface ImageAsset {
  src: string
  width: number
  height: number
}

export interface Photo {
  image: ImageKey
  caption: string
}

/** Illustrated header scenes used on division and commodity pages. */
export type SceneId =
  'ship' | 'crane' | 'rig' | 'pulse' | 'gears' | 'mine' | 'offshore'
