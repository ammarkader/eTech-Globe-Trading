import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import type { SectionId } from '../../types/site'

interface SectionProps {
  children: ReactNode
  /** Anchor id, for sections the navigation links to. */
  id?: SectionId
  /** Removes the top padding, for a section that continues the one above it. */
  flushTop?: boolean
  /** Removes the bottom padding, for a section that the next one continues. */
  flushBottom?: boolean
  className?: string
}

/** A page section with the standard vertical rhythm (112px, 88px or 64px by screen width). */
export function Section({
  children,
  id,
  flushTop = false,
  flushBottom = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        flushTop ? 'pb-section' : flushBottom ? 'pt-section' : 'py-section',
        className,
      )}
    >
      {children}
    </section>
  )
}
