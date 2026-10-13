import { Link } from 'react-router'
import { OfferList } from '../components/detail/OfferList'
import { PageBand } from '../components/detail/PageBand'
import { PhotoSlider } from '../components/detail/PhotoSlider'
import { ProjectGrid } from '../components/detail/ProjectGrid'
import { QuoteAside } from '../components/detail/QuoteAside'
import { RelatedCommodities } from '../components/detail/RelatedCommodities'
import {
  blockHeading,
  blockHeadingType,
  mutedParagraph,
  twoColumns,
} from '../components/detail/styles'
import { NotFound } from '../components/NotFound'
import { PageMeta } from '../components/seo/PageMeta'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { detailPageContent } from '../data/detailPages'
import { findDivision } from '../data/divisions'
import { getDivisionCommodities, getDivisionProjects } from '../lib/divisions'
import { divisionPath, HOME_PATH, sectionPath } from '../lib/paths'
import { pageTitle } from '../lib/seo'
import { cn } from '../lib/utils'
import type { Route } from './+types/DivisionPage'

/**
 * A division's page: header band, then, where the division has them, its photographs,
 * what it offers beside an enquiry panel, its projects and the commodities it supplies.
 */
export default function DivisionPage({ params }: Route.ComponentProps) {
  const division = findDivision(params.slug)
  if (!division) return <NotFound />

  const { breadcrumbHome } = detailPageContent
  const content = detailPageContent.division
  const projects = getDivisionProjects(division)
  const commodities = getDivisionCommodities(division)

  return (
    <main>
      {/* Title and description follow etech-final.html: the division name and its lead. */}
      <PageMeta
        title={pageTitle(division.name)}
        description={division.lead}
        path={divisionPath(division.slug)}
      />
      <PageBand
        breadcrumb={
          <>
            <Link to={HOME_PATH}>{breadcrumbHome}</Link>
            {' / '}
            <Link to={sectionPath('divisions')}>
              {content.breadcrumbSection}
            </Link>
          </>
        }
        title={division.name}
        lead={division.lead}
        highlights={division.highlights}
      />

      {division.photos && (
        <Section flushBottom>
          <Container>
            <h2 className={blockHeading}>{content.photosHeading}</h2>
            <PhotoSlider
              photos={division.photos}
              label={content.photosHeading}
            />
          </Container>
        </Section>
      )}

      <Section>
        <Container className={twoColumns}>
          <div>
            <h2 className={blockHeading}>{content.offersHeading}</h2>
            <OfferList offers={division.offers} />
            {division.closingNote && (
              <p className={cn(mutedParagraph, 'mt-5')}>
                {division.closingNote}
              </p>
            )}
            {division.roots && (
              <>
                <h2 className={cn(blockHeadingType, 'mt-12 mb-3')}>
                  {content.rootsHeading}
                </h2>
                <p className={mutedParagraph}>{division.roots}</p>
              </>
            )}
          </div>
          <QuoteAside
            heading={content.aside.heading}
            text={content.aside.text}
            subjectName={division.name}
          />
        </Container>
      </Section>

      {projects.length > 0 && (
        <Section flushTop>
          <Container>
            <h2 className={blockHeading}>{content.projectsHeading}</h2>
            <ProjectGrid projects={projects} />
          </Container>
        </Section>
      )}

      {division.related && commodities.length > 0 && (
        <Section flushTop>
          <Container>
            <h2 className={blockHeading}>{division.related.heading}</h2>
            <RelatedCommodities commodities={commodities} />
          </Container>
        </Section>
      )}
    </main>
  )
}
