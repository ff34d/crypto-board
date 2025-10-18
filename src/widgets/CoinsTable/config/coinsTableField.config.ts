import type { CoinsMarketItem } from "@/entities/coin"
import type { CoinsTableFieldItem } from "../types"

type CoinsFiledKeys = keyof Pick<
  CoinsMarketItem,
  | "market_cap_rank"
  | "name"
  | "current_price"
  | "price_change_percentage_24h"
  | "market_cap"
  | "total_volume"
>

export const coinsTableFieldConfig: Record<CoinsFiledKeys, CoinsTableFieldItem> = {
  market_cap_rank: {
    title: "# 🏆",
  },
  name: {
    title: "Coin 🪙",
    sortableKeys: { asc: "id_asc", desc: "id_desc" },
  },
  current_price: {
    title: "Price 💰",
  },
  price_change_percentage_24h: {
    title: "24h ⏳",
  },
  market_cap: {
    title: "Market cap. 🛒",
    sortableKeys: { asc: "market_cap_asc", desc: "market_cap_desc" },
  },
  total_volume: {
    title: "Total volume 📊",
  },
}
