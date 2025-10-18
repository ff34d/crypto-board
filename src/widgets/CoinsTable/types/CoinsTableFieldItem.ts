import type { CoinsMarketOrder } from "@/entities/coin"

export interface CoinsTableFieldItem {
  title: string
  sortableKeys?: {
    asc: CoinsMarketOrder
    desc: CoinsMarketOrder
  }
}
