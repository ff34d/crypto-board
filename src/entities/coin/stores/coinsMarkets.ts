import type { AxiosError } from "axios"
import { create } from "zustand"
import { coinService } from "../api"
import type { CoinsMarketItem, CoinsMarketOrder } from "../types"

interface State {
  /* === Utils === */
  currentPage: number
  perPage: number
  order: CoinsMarketOrder
  movePageAndFetchCoins: (align: "prev" | "next") => void

  /* === Api === */
  isLoading: boolean
  error: AxiosError | null
  data: CoinsMarketItem[] | null
  fetchCoinsMarkets: () => Promise<void>
}

export const useCoinsMarketsStore = create<State>((set, get) => ({
  isLoading: false,
  error: null,
  data: null,
  currentPage: 1,
  perPage: 15,
  order: "market_cap_desc",

  fetchCoinsMarkets: async () => {
    set({ isLoading: true, error: null })

    try {
      const res = await coinService.getCoinsMarkets({
        page: get().currentPage,
        order: get().order,
        perPage: get().perPage,
      })
      set({ data: res.data })
    } catch (error) {
      set({ error: error as AxiosError })
    } finally {
      set({ isLoading: false })
    }
  },

  movePageAndFetchCoins: (align) => {
    const page = get().currentPage
    set({ currentPage: Math.max(1, align === "prev" ? page - 1 : page + 1) })
    get().fetchCoinsMarkets()
  },
}))
