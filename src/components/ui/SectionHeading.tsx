import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/utils'

interface SectionHeadingProps {
  heading: string
  intro?: string
  /** For example a heading colour, where a section's differs from the default. */
  className?: string
  /** For a section on the deep navy background: the intro takes the light text colour. */
  onDeep?: boolean
}

/**
 * The centred heading block that opens a homepage section: an H2 and an optional intro.
 * It fades in as it scrolls into view (see useReveal).
 */
export function SectionHeading({
  heading,
  intro,
  className,
  onDeep = false,
}: SectionHeadingProps) {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <div
      {...reveal}
      className={cn('mx-auto mb-head-gap max-w-[800px] text-center', className)}
    >
      <h2 className="text-h2/[1.06] tracking-[-0.035em]">{heading}</h2>
      {intro && (
        <p
          className={cn(
            'mx-auto mt-4 max-w-[56ch] text-lead/[1.6]',
            onDeep ? 'text-on-deep-2' : 'text-copy',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
