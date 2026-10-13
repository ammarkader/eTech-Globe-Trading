import { useState } from 'react'
import { commodities } from '../../data/commodities'
import { commodityGroups } from '../../data/commodityGroups'
import { homeContent } from '../../data/home'
import { CommodityCard } from '../commodities/CommodityCard'
import {
  CommodityFilters,
  type CommodityFilter,
} from '../commodities/CommodityFilters'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const GROUP_NAMES = new Map(
  commodityGroups.map((group) => [group.id, group.name]),
)

/**
 * "Commodities we supply": all 39 commodities with a single-select group filter.
 * The filter is local state; it does not change the URL.
 */
export function CommoditiesPreview() {
  const { heading, intro, filterAriaLabel, allLabel, cardLinkLabel } =
    homeContent.commodities
  const [filter, setFilter] = useState<CommodityFilter>('all')

  const visible =
    filter === 'all'
      ? commodities
      : commodities.filter((commodity) => commodity.group === filter)

  return (
    <Section id="commodities" className="border-y border-line bg-white">
      <Container>
        <SectionHeading heading={heading} intro={intro} className="text-deep" />
        <CommodityFilters
          groups={commodityGroups}
          selected={filter}
          onSelect={setFilter}
          allLabel={allLabel}
          label={filterAriaLabel}
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-grid-gap">
          {visible.map((commodity) => (
            <CommodityCard
              key={commodity.slug}
              commodity={commodity}
              groupName={GROUP_NAMES.get(commodity.group) ?? ''}
              linkLabel={cardLinkLabel}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
