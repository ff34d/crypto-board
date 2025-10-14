import { ApiEndpoint, http } from "@/shared/api"
import type { CoinsListItem, CoinsMarketItem, GetCoinsMarketProps } from "../types"

export const coinService = {
  async getCoinsMarkets({ perPage, page, order }: GetCoinsMarketProps) {
    return await http<CoinsMarketItem[]>({
      method: "GET",
      url: ApiEndpoint.getCoinsMarkets,
      config: {
        params: {
          per_page: perPage,
          page,
          order,
        },
      },
    })
  },

  async getCoinsList() {
    return http<CoinsListItem[]>({
      method: "GET",
      url: ApiEndpoint.getCoinsList,
    })
  },
}
