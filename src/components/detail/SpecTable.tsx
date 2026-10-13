import { detailPageContent } from '../../data/detailPages'
import { getSpecRows } from '../../lib/commodities'
import { mailtoLink } from '../../lib/mail'
import type { Commodity } from '../../types/commodity'

interface SpecTableProps {
  commodity: Commodity
}

const CELL = 'border-b border-line px-1 py-[15px] text-left align-top'
const LABEL_CELL = `${CELL} w-[38%] font-medium text-copy`

/**
 * A commodity's specification table: the rows its group shows, then a last row
 * that links to an email asking for the full specification sheet.
 */
export function SpecTable({ commodity }: SpecTableProps) {
  const { otherSpecsLabel, otherSpecsLinkLabel, specRequestSubjectPrefix } =
    detailPageContent.commodity

  return (
    <table className="w-full border-collapse text-card/[1.5]">
      <tbody>
        {getSpecRows(commodity).map((row) => (
          <tr key={row.label}>
            <th scope="row" className={LABEL_CELL}>
              {row.label}
            </th>
            <td className={`${CELL} text-heading`}>{row.value}</td>
          </tr>
        ))}
        <tr>
          <th scope="row" className={LABEL_CELL}>
            {otherSpecsLabel}
          </th>
          <td className={`${CELL} text-heading`}>
            <a
              href={mailtoLink(`${specRequestSubjectPrefix}${commodity.name}`)}
              className="font-semibold text-accent underline decoration-[rgba(83,58,253,0.35)] underline-offset-[3px]"
            >
              {otherSpecsLinkLabel}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
