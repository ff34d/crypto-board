import type { CoinsMarketOrder } from "@/entities/coin"

export interface CoinsTableHeaderItem {
  title: string
  sortableKeys?: {
    asc: CoinsMarketOrder
    desc: CoinsMarketOrder
  }
}
