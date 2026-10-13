import type { ImageAsset, ImageKey } from '../types/media'
import dammamUrl from './images/projects/dammam.jpg'
import crescentCountyUrl from './images/projects/crescent-county.jpg'
import westSilverTownUrl from './images/projects/west-silver-town.jpg'
import crescentAvenueUrl from './images/projects/crescent-avenue.jpg'
import crescentTowerUrl from './images/projects/crescent-tower.jpg'
import crescentArcadiaUrl from './images/projects/crescent-arcadia.jpg'
import appaPalliMasjidUrl from './images/projects/appa-palli-masjid.jpg'
import modularKitchensUrl from './images/projects/modular-kitchens.jpg'
import masjidDoorsUrl from './images/projects/masjid-doors.jpg'
import silicaSand1Url from './images/commodities/silica-sand-1.jpg'
import silicaSand2Url from './images/commodities/silica-sand-2.jpg'
import silicaSand3Url from './images/commodities/silica-sand-3.jpg'
import silicaSand4Url from './images/commodities/silica-sand-4.jpg'
import manganeseOre1Url from './images/commodities/manganese-ore-1.jpg'
import manganeseOre2Url from './images/commodities/manganese-ore-2.jpg'
import workforce1Url from './images/workforce/workforce-1.jpg'
import workforce2Url from './images/workforce/workforce-2.jpg'
import workforce3Url from './images/workforce/workforce-3.jpg'
import workforce4Url from './images/workforce/workforce-4.jpg'
import workforce5Url from './images/workforce/workforce-5.jpg'

/**
 * The photographs of etech-final.html, extracted byte for byte.
 * Content data refers to a photograph by its key; components resolve it here.
 */
export const photos: Record<ImageKey, ImageAsset> = {
  dammam: { src: dammamUrl, width: 720, height: 411 },
  'crescent-county': { src: crescentCountyUrl, width: 720, height: 440 },
  'west-silver-town': { src: westSilverTownUrl, width: 720, height: 481 },
  'crescent-avenue': { src: crescentAvenueUrl, width: 720, height: 426 },
  'crescent-tower': { src: crescentTowerUrl, width: 574, height: 359 },
  'crescent-arcadia': { src: crescentArcadiaUrl, width: 574, height: 359 },
  'appa-palli-masjid': { src: appaPalliMasjidUrl, width: 720, height: 436 },
  'modular-kitchens': { src: modularKitchensUrl, width: 514, height: 331 },
  'masjid-doors': { src: masjidDoorsUrl, width: 629, height: 480 },
  'silica-sand-1': { src: silicaSand1Url, width: 900, height: 404 },
  'silica-sand-2': { src: silicaSand2Url, width: 402, height: 402 },
  'silica-sand-3': { src: silicaSand3Url, width: 385, height: 327 },
  'silica-sand-4': { src: silicaSand4Url, width: 345, height: 326 },
  'manganese-ore-1': { src: manganeseOre1Url, width: 900, height: 506 },
  'manganese-ore-2': { src: manganeseOre2Url, width: 506, height: 900 },
  'workforce-1': { src: workforce1Url, width: 900, height: 675 },
  'workforce-2': { src: workforce2Url, width: 900, height: 675 },
  'workforce-3': { src: workforce3Url, width: 900, height: 675 },
  'workforce-4': { src: workforce4Url, width: 900, height: 675 },
  'workforce-5': { src: workforce5Url, width: 675, height: 900 },
}
