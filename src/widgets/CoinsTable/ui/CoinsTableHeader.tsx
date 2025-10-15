import { useCoinsMarketsStore, type CoinsMarketOrder } from "@/entities/coin"
import { SortButton } from "@/shared/ui"
import type { FC } from "react"
import { coinsTableHeaderConfig } from "../config"
import styles from "../styles/index.module.scss"

export const CoinsTableHeader: FC = () => {
  const order = useCoinsMarketsStore((s) => s.order)
  const setOrder = useCoinsMarketsStore((s) => s.setOrder)
  const fetchCoinsMarkets = useCoinsMarketsStore((s) => s.fetchCoinsMarkets)

  const onClick = (key: CoinsMarketOrder) => {
    setOrder(key)
    fetchCoinsMarkets()
  }

  return (
    <thead className={styles.table__header}>
      <tr>
        {coinsTableHeaderConfig.map((item) => {
          const sortableKeys = item.sortableKeys

          let direction: "asc" | "desc" | null

          if (order === sortableKeys?.asc) {
            direction = "asc"
          } else if (order === sortableKeys?.desc) {
            direction = "desc"
          } else direction = null

          return (
            <th
              key={item.title}
              align="center">
              {sortableKeys ? (
                <SortButton
                  direction={direction}
                  onToggle={(direction) => onClick(sortableKeys[direction])}>
                  {item.title}
                </SortButton>
              ) : (
                <span>{item.title}</span>
              )}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
