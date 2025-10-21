import { useCoinsMarketsStore, type CoinsMarketOrder } from "@/entities/coin"
import { SortButton } from "@/shared/ui"
import type { FC } from "react"
import { coinsTableFieldConfig } from "../config"
import { identifyDirection } from "../utils"

/* Fields config values array */
const fields = Object.values(coinsTableFieldConfig)

export const CoinsTableHeader: FC = () => {
  const order = useCoinsMarketsStore((s) => s.order)
  const setOrder = useCoinsMarketsStore((s) => s.setOrder)
  const fetchCoinsMarkets = useCoinsMarketsStore((s) => s.fetch)

  const onClick = (key: CoinsMarketOrder) => {
    setOrder(key)
    fetchCoinsMarkets()
  }

  return (
    <tr>
      {fields.map(({ sortableKeys, title }) => (
        <th key={title}>
          {sortableKeys ? (
            <SortButton
              direction={identifyDirection(order, sortableKeys)}
              onToggle={(direction) => onClick(sortableKeys[direction])}>
              <span style={{ textDecoration: "underline" }}>{title}</span>
            </SortButton>
          ) : (
            <span>{title}</span>
          )}
        </th>
      ))}
    </tr>
  )
}
