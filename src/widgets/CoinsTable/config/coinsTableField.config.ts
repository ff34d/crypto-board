import type { CoinsMarketItem } from "@/entities/coin"

type CoinsFiledKeys = keyof Pick<
  CoinsMarketItem,
  | "market_cap_rank"
  | "name"
  | "current_price"
  | "price_change_percentage_24h"
  | "market_cap"
  | "total_volume"
>

export const coinsTableFieldNameConfig: Record<CoinsFiledKeys, string> = {
  market_cap_rank: "#",
  name: "Coin",
  current_price: "Price",
  price_change_percentage_24h: "24h",
  market_cap: "Market cap.",
  total_volume: "Total volume",
}
