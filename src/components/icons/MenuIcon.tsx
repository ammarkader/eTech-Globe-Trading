import { cn } from '../../lib/utils'

interface MenuIconProps {
  /** Whether the menu is open: the three lines then form a cross. */
  open?: boolean
}

/** Every line moves the same way: quickly, and not at all for visitors who prefer reduced motion. */
const LINE =
  'transition-[translate,rotate,opacity] duration-200 ease-out motion-reduce:transition-none'

/**
 * The menu button's icon. Closed, it is the approved burger of etech-final.html:
 * three lines. Open, the outer lines meet in the middle as a cross and the middle
 * line fades out. The cross is moved 3px to the right as it forms, so that its right
 * end stands exactly where the burger's lines ended: both meet the same edge.
 */
export function MenuIcon({ open = false }: MenuIconProps) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className={cn(
        'transition-[translate] duration-200 ease-out motion-reduce:transition-none',
        // the cross is narrower than the burger: moved 3px, its right end stands where the burger's lines ended
        open && 'translate-x-[3px]',
      )}
    >
      <path
        d="M3 7h18"
        className={cn(
          LINE,
          'origin-[12px_7px]',
          open && 'translate-y-[5px] rotate-45',
        )}
      />
      <path d="M3 12h18" className={cn(LINE, open && 'opacity-0')} />
      <path
        d="M3 17h18"
        className={cn(
          LINE,
          'origin-[12px_17px]',
          open && '-translate-y-[5px] -rotate-45',
        )}
      />
    </svg>
  )
}
