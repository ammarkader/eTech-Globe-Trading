import { site } from '../../data/site'
import { useCurrentYear } from '../../hooks/useCurrentYear'
import { Container } from '../ui/Container'

const LINK_HOVER =
  'transition-[color] duration-200 ease-[ease] hover:text-accent motion-reduce:transition-none'

/**
 * The site footer: the group's entities on the first row; beneath them the copyright
 * line on the left and the site credit on the right, one above the other on a phone.
 */
export function Footer() {
  const year = useCurrentYear()
  const { credit, entities } = site.footer

  return (
    <footer className="border-t border-line pt-14 pb-12 text-small/[1.5] text-copy">
      <Container className="flex flex-col gap-5">
        <div>{entities}</div>
        <div className="flex flex-wrap justify-between gap-x-5 gap-y-2 upto-640:flex-col">
          {/* The text after the year is one piece, so that its letters are shaped together. */}
          <span>
            © <span>{year}</span>
            {` ${site.legalName}`}
          </span>
          <span>
            {credit.prefix}{' '}
            <a
              href={credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-[3px] ${LINK_HOVER}`}
            >
              {credit.label}
            </a>
          </span>
        </div>
      </Container>
    </footer>
  )
}
