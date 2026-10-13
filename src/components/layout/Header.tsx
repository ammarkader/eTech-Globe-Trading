import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { site } from '../../data/site'
import { useScrolledPast } from '../../hooks/useScrolledPast'
import { HOME_PATH, sectionPath } from '../../lib/paths'
import { cn } from '../../lib/utils'
import { MenuIcon } from '../icons/MenuIcon'
import { HeroGlobe } from '../illustrations/HeroGlobe'
import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'

interface HeaderProps {
  /** Keeps the solid state whatever the page and scroll position. */
  alwaysSolid?: boolean
}

const MENU_ID = 'site-menu'
/** The header turns solid once the page is scrolled further than this. */
const SOLID_AFTER_PX = 40
/** Above this width the navigation is inline and the menu button is hidden. */
const DESKTOP_QUERY = '(min-width: 1181px)'

/** The small capital label used twice in the menu. */
const MENU_LABEL =
  'text-[0.72rem]/[1.4] font-semibold tracking-[0.18em] uppercase'
/** Part of a menu link takes the accent colour while the link is hovered or holds keyboard focus. */
const MENU_ACCENT =
  'transition-[color,translate] duration-200 ease-[ease] group-hover/item:text-accent group-focus-visible/item:text-accent motion-reduce:transition-none'

/**
 * The site header. Transparent over the top of the homepage; solid once scrolled,
 * on every other page, and while the menu is open.
 *
 * Above 1180px the navigation is inline. At or below it there is a menu button, and
 * the menu it opens fills the screen under the bar: the links in two columns, the
 * homepage globe beside them, and a closing bar with the tagline and the quote
 * button. Up to 900px the globe is left out; up to 700px the links are one column.
 * While it is open the page behind does not scroll and cannot be reached, and the
 * assistant's button is put away.
 */
export function Header({ alwaysSolid = false }: HeaderProps) {
  const { pathname } = useLocation()
  const scrolled = useScrolledPast(SOLID_AFTER_PX)
  const [menuOpen, setMenuOpen] = useState(false)
  // The globe is drawn once the menu has been opened, not in every page's HTML.
  const [menuUsed, setMenuUsed] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const solid = alwaysSolid || menuOpen || scrolled || pathname !== HOME_PATH
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onWidthChange = () => {
      if (desktop.matches) setMenuOpen(false)
    }

    // The page behind neither scrolls nor takes focus. Keeping the scrollbar's gutter
    // stops the bar from shifting where scrollbars take up room.
    const root = document.documentElement
    const { overflow, scrollbarGutter } = root.style
    root.style.overflow = 'hidden'
    root.style.scrollbarGutter = 'stable'
    const behind = document.querySelectorAll<HTMLElement>('main, footer')
    behind.forEach((element) => (element.inert = true))
    // The assistant hides itself while this is set (ChatAssistant.tsx).
    root.dataset.menuOpen = ''

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onWidthChange)
    return () => {
      root.style.overflow = overflow
      root.style.scrollbarGutter = scrollbarGutter
      behind.forEach((element) => (element.inert = false))
      delete root.dataset.menuOpen
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onWidthChange)
    }
  }, [menuOpen])

  return (
    <header
      data-solid={solid || undefined}
      className={cn(
        'group fixed inset-x-0 top-0 z-20 border-b pt-[env(safe-area-inset-top,0px)] transition-[background-color,border-color,box-shadow] duration-300 ease-[ease] motion-reduce:transition-none',
        solid
          ? 'border-line bg-white/92 shadow-[0_1px_0_rgba(13,23,56,0.02)] backdrop-blur-lg backdrop-saturate-180'
          : 'border-transparent',
        menuOpen && 'upto-1180:border-transparent upto-1180:bg-page',
      )}
    >
      <Container className="flex h-header items-center justify-between">
        <Link
          to={HOME_PATH}
          onClick={closeMenu}
          className="text-[1.28rem] leading-[normal] font-bold tracking-[0.04em] text-deep no-underline transition-[color] duration-300 ease-[ease] group-data-solid:text-heading motion-reduce:transition-none"
        >
          {site.logo.wordmark}
          <small className="block text-[0.6rem] leading-[normal] font-medium tracking-[0.2em] text-copy">
            {site.logo.descriptor}
          </small>
        </Link>

        {/* Pulled out by its own padding and the icon's margin, so the icon's lines end on the container's edge, as the logo starts on it. */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={MENU_ID}
          onClick={() => {
            setMenuOpen((open) => !open)
            setMenuUsed(true)
          }}
          className="-mr-[13px] hidden cursor-pointer px-2.5 pt-2.5 pb-[13px] text-deep transition-[color] duration-300 ease-[ease] group-data-solid:text-heading motion-reduce:transition-none upto-1180:block"
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav aria-label="Main" className="upto-1180:hidden">
          <ul className="flex gap-[26px]">
            {site.navigation.map((item) => (
              <li key={item.sectionId}>
                <Link
                  to={sectionPath(item.sectionId)}
                  className="text-[0.9rem] leading-[normal] font-medium tracking-[-0.005em] whitespace-nowrap text-copy no-underline transition-[color] duration-200 ease-[ease] hover:text-deep group-data-solid:hover:text-heading motion-reduce:transition-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink
          to={sectionPath(site.quoteAction.sectionId)}
          size="sm"
          className="upto-1180:hidden"
        >
          {site.quoteAction.label}
        </ButtonLink>
      </Container>

      {/*
        The menu, at or below 1180px: it fills the screen under the bar and scrolls if it is taller than the screen.
        Its links and globe are centred in the height between the bar and the closing bar, which sits at the foot.
        It fades in and settles 6px down into place, and leaves the same way. Closed, it is not visible to anything:
        its links cannot be clicked, focused or read out.
      */}
      <div
        id={MENU_ID}
        className={cn(
          'absolute inset-x-0 top-full hidden h-[calc(100dvh-100%)] overflow-y-auto overscroll-contain bg-page transition-[opacity,translate,visibility] duration-200 ease-out motion-reduce:transition-none upto-1180:block',
          menuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-1.5 opacity-0',
        )}
      >
        <Container className="flex min-h-full flex-col pb-[env(safe-area-inset-bottom,0px)]">
          <div className="grid flex-1 grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] upto-900:grid-cols-1">
            <nav
              aria-label="Main"
              className="flex flex-col justify-center py-10 pr-14 upto-900:pr-0 upto-600:py-7"
            >
              <p className={cn(MENU_LABEL, 'mb-3 text-copy')}>
                {site.menu.eyebrow}
              </p>
              <ul className="grid grid-flow-col grid-rows-5 gap-x-12 upto-700:grid-flow-row upto-700:grid-rows-none">
                {site.navigation.map((item, index) => (
                  <li key={item.sectionId}>
                    <Link
                      to={sectionPath(item.sectionId)}
                      onClick={closeMenu}
                      className={cn(
                        'group/item flex items-center gap-3 border-b border-line py-[18px] no-underline upto-600:py-[15px]',
                        // without the globe beside it, the list ends on the closing bar's rule, not on one of its own
                        index === site.navigation.length - 1 &&
                          'upto-900:border-transparent',
                      )}
                    >
                      <span
                        className={cn(
                          MENU_ACCENT,
                          // one pixel down: figures stand higher in their line than the label's letters do
                          'relative top-px w-5 shrink-0 text-[0.78rem]/[1] font-medium text-copy/70 tabular-nums',
                        )}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={cn(
                          MENU_ACCENT,
                          'text-[1.3rem]/[1.25] font-semibold tracking-[-0.02em] text-heading upto-600:text-[1.15rem]',
                        )}
                      >
                        {item.label}
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 7 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={cn(
                          MENU_ACCENT,
                          'ml-auto h-3 w-[7px] shrink-0 text-copy/45 group-hover/item:translate-x-[3px]',
                        )}
                      >
                        <path d="M1 1l5 5-5 5" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col justify-center border-l border-line py-10 pl-14 upto-900:hidden">
              <div
                aria-hidden="true"
                className="mx-auto aspect-square w-[min(100%,38dvh,400px)]"
              >
                {menuUsed && <HeroGlobe className="block size-full" />}
              </div>
              <p className={cn(MENU_LABEL, 'mt-8 text-accent')}>
                {site.menu.globeLabel}
              </p>
              <p className="mt-2.5 max-w-[34ch] text-body/[1.6] text-copy">
                {site.menu.globeText}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-6 gap-y-4 border-t border-line py-5 upto-520:flex-col upto-520:items-start">
            <p className="text-small/[1.5] font-medium text-heading">
              {site.menu.tagline}
              <span className="mt-1 block text-[0.66rem]/[1.4] font-medium tracking-[0.18em] text-copy/75 uppercase">
                {site.menu.strapline}
              </span>
            </p>
            <ButtonLink
              to={sectionPath(site.quoteAction.sectionId)}
              size="sm"
              onClick={closeMenu}
            >
              {site.quoteAction.label}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  )
}
