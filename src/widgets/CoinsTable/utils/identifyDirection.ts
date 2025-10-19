import type { CoinsMarketOrder } from "@/entities/coin"
import type { CoinsTableFieldItem } from "../types"

export function identifyDirection(
  order: CoinsMarketOrder,
  keys: CoinsTableFieldItem["sortableKeys"]
) {
  if (order === keys?.asc) {
    return "asc"
  } else if (order === keys?.desc) {
    return "desc"
  } else return null
}
