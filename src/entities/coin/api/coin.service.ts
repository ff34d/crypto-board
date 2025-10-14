import { ApiEndpoint, http } from "@/shared/api"
import type { CoinsMarketItem } from "../types"

export const coinService = {
  async getCoinsMarkets() {
    return await http<CoinsMarketItem[]>({
      method: "GET",
      url: ApiEndpoint.getCoinsMarkets,
    })
  },
}
