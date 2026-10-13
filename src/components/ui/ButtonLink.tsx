import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '../../lib/utils'

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'ghost'
type ButtonSize = 'md' | 'sm'

interface ButtonLinkBaseProps {
  children: ReactNode
  /**
   * primary: violet, with a glow on hover. dark: violet with a plain shadow that hover
   * does not change (the original's .cta.dark). outline: white, for light backgrounds.
   * ghost: translucent, for deep backgrounds.
   */
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonLinkProps = ButtonLinkBaseProps &
  (
    | { to: string; href?: never; external?: never }
    | { href: string; to?: never; external?: boolean }
  )

const BASE =
  'inline-block cursor-pointer rounded-full border font-semibold tracking-[-0.005em] no-underline transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-[ease] active:translate-y-px motion-reduce:transition-none'

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    'border-accent bg-accent text-white shadow-button hover:border-accent-hover hover:bg-accent-hover hover:shadow-button-hover',
  dark: 'border-accent bg-accent text-white shadow-button-dark hover:border-accent-hover hover:bg-accent-hover',
  outline:
    'border-deep/16 bg-white text-deep shadow-button-outline hover:border-accent hover:text-accent hover:shadow-sm',
  ghost:
    'border-[rgba(226,228,255,0.3)] bg-[rgba(226,228,255,0.04)] text-white hover:border-[rgba(226,228,255,0.6)] hover:bg-[rgba(226,228,255,0.1)]',
}

const SIZES: Record<ButtonSize, string> = {
  md: 'px-5 py-[11px] text-[0.92rem]/[1.2]',
  sm: 'px-[18px] py-[9px] text-[0.88rem]/[1.2]',
}

/**
 * The pill-shaped call to action. Every one in the approved design is a link:
 * pass `to` for a route in the app, or `href` for an email, anchor or external address.
 */
export function ButtonLink({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...link
}: ButtonLinkProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className)

  if (link.to !== undefined) {
    return (
      <Link to={link.to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={link.href}
      className={classes}
      {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  )
}
