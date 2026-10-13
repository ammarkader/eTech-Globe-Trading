import type { ComponentProps } from 'react'
import { cn } from '../../lib/utils'

/**
 * The one site-wide content width: 1200px, with 28px side padding (20px up to 600px wide).
 * Other properties go to the element itself.
 */
export function Container({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('mx-auto w-full max-w-site px-7 upto-600:px-5', className)}
    />
  )
}
