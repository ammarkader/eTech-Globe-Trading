import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { site } from '../../data/site'
import { useScrolledPast } from '../../hooks/useScrolledPast'
import { HOME_PATH, sectionPath } from '../../lib/paths'
import { cn } from '../../lib/utils'
import { MenuIcon } from '../icons/MenuIcon'
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

/**
 * The site header. Transparent over the top of the homepage; solid once scrolled,
 * on every other page, and while the mobile menu is open.
 * Desktop navigation above 1180px, menu button at or below it.
 */
export function Header({ alwaysSolid = false }: HeaderProps) {
  const { pathname } = useLocation()
  const scrolled = useScrolledPast(SOLID_AFTER_PX)
  const [menuOpen, setMenuOpen] = useState(false)
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

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onWidthChange)
    return () => {
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
        menuOpen && 'upto-1180:bg-page/97',
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

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={MENU_ID}
          onClick={() => setMenuOpen((open) => !open)}
          className="hidden cursor-pointer px-2.5 pt-2.5 pb-[13px] text-deep transition-[color] duration-300 ease-[ease] group-data-solid:text-heading motion-reduce:transition-none upto-1180:block"
        >
          <MenuIcon />
        </button>

        {/* At or below 1180px this is the dropdown panel under the bar. It scrolls if the screen is too short to show every link. */}
        <nav
          id={MENU_ID}
          aria-label="Main"
          className={cn(
            'upto-1180:absolute upto-1180:inset-x-0 upto-1180:top-full upto-1180:max-h-[calc(100dvh-var(--spacing-header))] upto-1180:overflow-y-auto upto-1180:overscroll-contain upto-1180:border-b upto-1180:border-line upto-1180:bg-sheet upto-1180:px-5 upto-1180:pt-1.5 upto-1180:pb-[18px] upto-1180:shadow-[0_28px_40px_-28px_rgba(13,23,56,0.3)]',
            !menuOpen && 'upto-1180:hidden',
          )}
        >
          <ul className="flex gap-[26px] upto-1180:flex-col">
            {site.navigation.map((item) => (
              <li key={item.sectionId}>
                <Link
                  to={sectionPath(item.sectionId)}
                  onClick={closeMenu}
                  className="text-[0.9rem] leading-[normal] font-medium tracking-[-0.005em] whitespace-nowrap text-copy no-underline transition-[color] duration-200 ease-[ease] hover:text-deep group-data-solid:hover:text-heading motion-reduce:transition-none upto-1180:block upto-1180:border-b upto-1180:border-line upto-1180:py-3.5 upto-1180:text-[1rem] upto-1180:text-heading upto-1180:hover:text-accent upto-1180:group-data-solid:hover:text-accent"
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
    </header>
  )
}
