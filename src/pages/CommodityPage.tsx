import { Link } from 'react-router'
import { PageBand } from '../components/detail/PageBand'
import { PhotoGallery } from '../components/detail/PhotoGallery'
import { QuoteAside } from '../components/detail/QuoteAside'
import { RangeCards } from '../components/detail/RangeCards'
import { RelatedCommodities } from '../components/detail/RelatedCommodities'
import { SpecNote } from '../components/detail/SpecNote'
import { SpecTable } from '../components/detail/SpecTable'
import {
  blockHeading,
  blockHeadingType,
  twoColumns,
} from '../components/detail/styles'
import { NotFound } from '../components/NotFound'
import { PageMeta } from '../components/seo/PageMeta'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { findCommodity } from '../data/commodities'
import { findCommodityGroup } from '../data/commodityGroups'
import { detailPageContent } from '../data/detailPages'
import {
  getLicenceNote,
  getRelatedCommodities,
  nameInSentence,
} from '../lib/commodities'
import { commodityPath, HOME_PATH, sectionPath } from '../lib/paths'
import { pageTitle } from '../lib/seo'
import { cn } from '../lib/utils'
import type { Route } from './+types/CommodityPage'

/**
 * A commodity's page: header band, then, where the commodity has them, its photographs
 * and its range of grades, the specification table beside an enquiry panel, and links
 * to other commodities of the same group.
 */
export default function CommodityPage({ params }: Route.ComponentProps) {
  const commodity = findCommodity(params.slug)
  const group = commodity && findCommodityGroup(commodity.group)
  if (!commodity || !group) return <NotFound />

  const { breadcrumbHome } = detailPageContent
  const content = detailPageContent.commodity
  const licenceNote = getLicenceNote(commodity)
  const related = getRelatedCommodities(commodity)

  return (
    <main>
      {/* Title and description follow etech-final.html: the commodity name and its use. */}
      <PageMeta
        title={pageTitle(commodity.name)}
        description={commodity.use}
        path={commodityPath(commodity.slug)}
      />
      <PageBand
        breadcrumb={
          <>
            <Link to={HOME_PATH}>{breadcrumbHome}</Link>
            {' / '}
            <Link to={sectionPath('commodities')}>
              {content.breadcrumbSection}
            </Link>
            {` / ${group.name}`}
          </>
        }
        tag={group.name}
        title={commodity.name}
        lead={commodity.use}
        highlights={commodity.highlights}
      />

      {commodity.photos && (
        <Section flushBottom>
          <Container>
            <h2 className={blockHeading}>{content.photosHeading}</h2>
            <PhotoGallery photos={commodity.photos} />
          </Container>
        </Section>
      )}

      {commodity.range && (
        <Section flushBottom>
          <Container>
            <h2 className={blockHeading}>{commodity.range.title}</h2>
            <RangeCards range={commodity.range} />
          </Container>
        </Section>
      )}

      <Section>
        <Container className={twoColumns}>
          <div>
            <h2 className={cn(blockHeadingType, 'mb-4')}>
              {content.specsHeading}
            </h2>
            <SpecTable commodity={commodity} />
            <p className="mt-[18px] mb-[1em] text-body/[1.65] text-copy">
              {`${content.specsNote} ${content.inspectionNote}`}
            </p>
            {commodity.qualityNote && (
              <SpecNote
                heading={content.qualityHeading}
                text={commodity.qualityNote}
              />
            )}
            {licenceNote && (
              <SpecNote heading={content.licenceHeading} text={licenceNote} />
            )}
          </div>
          <QuoteAside
            heading={`${content.aside.headingPrefix}${nameInSentence(commodity.name)}`}
            text={content.aside.text}
            subjectName={commodity.name}
          />
        </Container>
      </Section>

      {related.length > 0 && (
        <Section flushTop>
          <Container>
            <h2 className={blockHeading}>
              {`${content.relatedHeadingPrefix}${group.name.toLowerCase()}`}
            </h2>
            <RelatedCommodities commodities={related} />
          </Container>
        </Section>
      )}
    </main>
  )
}
