import type { ReactNode } from 'react'
import type { Highlight } from '../../types/common'
import { cn } from '../../lib/utils'
import { Container } from '../ui/Container'

interface PageBandProps {
  /** The breadcrumb trail: links and plain text. */
  breadcrumb: ReactNode
  /** Small label above the title, such as a commodity's group. */
  tag?: string
  title: string
  lead: string
  highlights?: readonly Highlight[]
}

/**
 * A long value that is not a plain figure ("Indonesia · GCC · India") is set smaller,
 * by the same test as etech-final.html.
 */
function isLongValue(value: string): boolean {
  return value.length > 9 && !/^[\d,.+%–-]+$/.test(value)
}

/**
 * The deep navy header band of a division or commodity page: the breadcrumb, the
 * title, the lead paragraph and up to a few headline figures. It has no illustration
 * and no grid behind it (both removed by request).
 * It starts under the fixed site header, so it carries its own top padding.
 *
 * The figures are static. In etech-final.html numeric ones count up when they come
 * into view; the approved decision is to show the final values (Phase 5F).
 */
export function PageBand({
  breadcrumb,
  tag,
  title,
  lead,
  highlights,
}: PageBandProps) {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-deep bg-[radial-gradient(50%_85%_at_88%_18%,rgba(83,58,253,0.36),transparent_70%),radial-gradient(45%_60%_at_0%_100%,rgba(83,58,253,0.12),transparent_70%)] pt-[150px] pb-[70px] text-white">
      <Container className="relative z-1">
        <nav
          aria-label="Breadcrumb"
          className="relative z-1 mb-[18px] text-small/[1.5] text-on-deep-3 [&_a]:text-on-deep-2 [&_a]:no-underline [&_a]:hover:underline"
        >
          {breadcrumb}
        </nav>
        {tag && (
          <span className="relative z-1 mb-4 inline-block rounded-pill border border-[rgba(147,134,254,0.4)] bg-[rgba(83,58,253,0.14)] px-3 py-[5px] text-small/[1.4] font-semibold tracking-[0.01em] text-accent-soft">
            {tag}
          </span>
        )}
        <h1 className="relative z-1 max-w-[20ch] text-h1/[1.02] font-semibold tracking-[-0.045em] text-on-deep">
          {title}
        </h1>
        <p className="relative z-1 mt-[18px] max-w-[58ch] text-lead/[1.6] text-on-deep-2">
          {lead}
        </p>
        {highlights && (
          <div className="relative z-1 mt-[34px] grid max-w-[760px] grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-px overflow-hidden rounded-xl border border-deep-line bg-deep-line">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-[rgba(13,23,56,0.62)] px-5 py-[18px] backdrop-blur-[8px] upto-700:px-4 upto-700:py-3.5 upto-600:last:odd:col-[1/-1]"
              >
                <b
                  className={cn(
                    'block font-semibold tracking-[-0.035em] [overflow-wrap:anywhere] text-on-deep',
                    isLongValue(item.value)
                      ? 'text-[clamp(1.05rem,4.6vw,1.45rem)]/[1.25]'
                      : 'text-[1.7rem]/[1.1] upto-700:text-[1.45rem]',
                  )}
                >
                  {item.value}
                </b>
                <span className="text-small/[1.5] text-on-deep-3">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
