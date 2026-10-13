import { Link } from 'react-router'
import { homeContent } from '../../data/home'
import { site } from '../../data/site'
import { useReveal } from '../../hooks/useReveal'
import { sectionPath } from '../../lib/paths'
import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

/** A link in the side column: light text on navy with a faint underline that brightens on hover. */
const DETAIL_LINK =
  'border-b border-b-[rgba(226,228,255,0.3)] [overflow-wrap:anywhere] text-on-deep no-underline transition-[border-color] duration-200 ease-[ease] hover:border-b-accent-soft'

const DETAIL_HEADING =
  'text-small/[1.4] font-semibold tracking-[0.01em] text-accent-soft'

/**
 * "Tell us what you need to source, build or staff.": the contact panel that closes
 * the homepage. It has no form: the button and the addresses are email links, and
 * "See all locations" goes to the global network section.
 */
export function Contact() {
  const {
    heading,
    text,
    trust,
    actionLabel,
    emailHeading,
    officesHeading,
    officesLinkLabel,
  } = homeContent.contact
  const { primary, secondary } = site.emails

  const reveal = useReveal<HTMLDivElement>()

  return (
    <Section id="contact" flushTop>
      <Container>
        <div
          {...reveal}
          className="grid grid-cols-[1fr_1.3fr] items-center gap-10 rounded-panel p-16 text-on-deep shadow-lg [background:radial-gradient(70%_120%_at_100%_0%,rgba(83,58,253,0.42),transparent_62%),radial-gradient(50%_80%_at_0%_100%,rgba(83,58,253,0.14),transparent_70%),var(--color-deep)] upto-800:grid-cols-[1fr] upto-800:gap-[26px] upto-800:px-6 upto-800:py-[34px]"
        >
          <div>
            <h2 className="text-h2-panel/[1.08] tracking-[-0.035em]">
              {heading}
            </h2>
            <p className="my-[1em] text-body/[1.65] text-on-deep-2">{text}</p>
            <p className="mt-[18px] mb-[26px] text-small/[1.5] text-on-deep-3">
              {trust}
            </p>
            <ButtonLink href={`mailto:${primary}`}>{actionLabel}</ButtonLink>
          </div>

          <div className="grid min-w-0 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[18px] border-l border-l-deep-line pl-9 upto-800:border-t upto-800:border-l-0 upto-800:border-t-deep-line upto-800:pt-6 upto-800:pl-0">
            <div>
              <h3 className={DETAIL_HEADING}>{emailHeading}</h3>
              <p className="mt-1 text-card/[1.6]">
                <a href={`mailto:${primary}`} className={DETAIL_LINK}>
                  {primary}
                </a>
                <br />
                <a href={`mailto:${secondary}`} className={DETAIL_LINK}>
                  {secondary}
                </a>
              </p>
            </div>
            <div>
              <h3 className={DETAIL_HEADING}>{officesHeading}</h3>
              <p className="mt-1 text-card/[1.6]">
                <Link to={sectionPath('locations')} className={DETAIL_LINK}>
                  {officesLinkLabel}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
