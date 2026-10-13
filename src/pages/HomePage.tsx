import { About } from '../components/home/About'
import { BusinessLines } from '../components/home/BusinessLines'
import { ClosingBanner } from '../components/home/ClosingBanner'
import { CommoditiesPreview } from '../components/home/CommoditiesPreview'
import { CommodityTicker } from '../components/home/CommodityTicker'
import { Contact } from '../components/home/Contact'
import { Hero } from '../components/home/Hero'
import { InsideEtech } from '../components/home/InsideEtech'
import { Journey } from '../components/home/Journey'
import { LatestNews } from '../components/home/LatestNews'
import { Leadership } from '../components/home/Leadership'
import { LinkedInStrip } from '../components/home/LinkedInStrip'
import { Locations } from '../components/home/Locations'
import { MarketWatch } from '../components/home/MarketWatch'
import { SupplyChain } from '../components/home/SupplyChain'
import { Team } from '../components/home/Team'
import { Visions } from '../components/home/Visions'
import { WhyChoose } from '../components/home/WhyChoose'
import { PageMeta } from '../components/seo/PageMeta'
import { homeMeta } from '../data/site'
import { HOME_PATH } from '../lib/paths'

/**
 * The homepage: every section of the approved design. Their order was set by request
 * and differs from etech-final.html. The site footer follows it in the layout.
 */
export default function HomePage() {
  return (
    <main>
      <PageMeta
        title={homeMeta.title}
        description={homeMeta.description}
        path={HOME_PATH}
        ogTitle={homeMeta.ogTitle}
        ogDescription={homeMeta.ogDescription}
      />
      <Hero />
      <CommodityTicker />
      <BusinessLines />
      <CommoditiesPreview />
      <SupplyChain />
      <About />
      <Journey />
      <Leadership />
      <Team />
      <WhyChoose />
      <Locations />
      <Visions />
      <InsideEtech />
      <LatestNews />
      <MarketWatch />
      <ClosingBanner />
      <Contact />
      <LinkedInStrip />
    </main>
  )
}
