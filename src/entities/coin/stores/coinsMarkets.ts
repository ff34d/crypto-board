import { createApiSlice, type ApiSliceState } from "@/shared/stores"
import { create } from "zustand"
import { coinService } from "../api"
import type { CoinsMarketItem, CoinsMarketOrder } from "../types"

interface State extends ApiSliceState<CoinsMarketItem[]> {
  currentPage: number
  perPage: number
  order: CoinsMarketOrder
  movePage: (align: "prev" | "next") => void
  setOrder: (order: State["order"] | undefined) => void
}

export const useCoinsMarketsStore = create<State>((set, get, store) => ({
  /* === Extend base api slice === */
  ...createApiSlice(() => {
    const { currentPage: page, order, perPage } = get()
    return coinService.getCoinsMarkets({ perPage, order, page })
  })(set, get, store),

  /* === Store === */
  perPage: 20,
  currentPage: 1,
  order: "market_cap_desc",

  movePage: (align) => {
    const page = get().currentPage
    set({ currentPage: Math.max(1, align === "prev" ? page - 1 : page + 1) })
  },

  setOrder: (order) => {
    if (!order) return
    set({ order })
  },
}))
