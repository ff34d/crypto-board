import type { CoinsTableHeaderItem } from "../types"
import { coinsTableFieldNameConfig } from "./coinsTableField.config"

export const coinsTableHeaderConfig: CoinsTableHeaderItem[] = [
  { title: coinsTableFieldNameConfig.market_cap_rank },
  {
    title: coinsTableFieldNameConfig.name,
    sortableKeys: { asc: "id_asc", desc: "id_desc" },
  },
  { title: coinsTableFieldNameConfig.current_price },
  { title: coinsTableFieldNameConfig.price_change_percentage_24h },
  {
    title: coinsTableFieldNameConfig.market_cap,
    sortableKeys: { asc: "market_cap_asc", desc: "market_cap_desc" },
  },
  { title: coinsTableFieldNameConfig.total_volume },
]
