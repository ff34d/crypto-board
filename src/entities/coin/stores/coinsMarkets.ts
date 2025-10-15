import type { AxiosError } from "axios"
import { create } from "zustand"
import { coinService } from "../api"
import type { CoinsMarketItem, CoinsMarketOrder } from "../types"

interface State {
  /* === Utils === */
  currentPage: number
  perPage: number
  order: CoinsMarketOrder
  movePage: (align: "prev" | "next") => void
  setOrder: (order: State["order"] | undefined) => void

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
  perPage: 20,

  currentPage: 1,
  movePage: (align) => {
    const page = get().currentPage
    set({ currentPage: Math.max(1, align === "prev" ? page - 1 : page + 1) })
  },

  order: "market_cap_desc",
  setOrder: (order) => {
    if (!order) return
    set({ order })
  },

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
}))
