import { cn } from '../../lib/utils'
import type { CommodityGroup, CommodityGroupId } from '../../types/commodity'
import { pillControl, pillIdle, pillSelected } from '../ui/styles'

/** The selected filter: one commodity group, or every commodity. */
export type CommodityFilter = CommodityGroupId | 'all'

interface CommodityFiltersProps {
  groups: readonly CommodityGroup[]
  selected: CommodityFilter
  onSelect: (filter: CommodityFilter) => void
  /** Label of the option that shows every commodity. */
  allLabel: string
  /** Accessible name of the group of buttons. */
  label: string
}

/**
 * The commodity filter: one pill per group plus "All". Exactly one is selected.
 * The pills wrap onto further lines when they do not fit.
 */
export function CommodityFilters({
  groups,
  selected,
  onSelect,
  allLabel,
  label,
}: CommodityFiltersProps) {
  const options: readonly { value: CommodityFilter; label: string }[] = [
    { value: 'all', label: allLabel },
    ...groups.map((group) => ({ value: group.id, label: group.name })),
  ]

  return (
    <div role="group" aria-label={label} className="mb-8 flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={option.value === selected}
          onClick={() => onSelect(option.value)}
          className={cn(
            pillControl,
            option.value === selected ? pillSelected : pillIdle,
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
