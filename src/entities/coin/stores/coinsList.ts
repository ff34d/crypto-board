import type { AxiosError } from "axios"
import { create } from "zustand"
import { coinService } from "../api"
import type { CoinsListItem } from "../types"

interface State {
  /* === Api === */
  isLoading: boolean
  error: AxiosError | null
  data: CoinsListItem[] | null
  fetchCoinsList: () => Promise<void>
}

export const useCoinsListStore = create<State>((set) => ({
  isLoading: false,
  error: null,
  data: null,

  fetchCoinsList: async () => {
    set({ isLoading: true, error: null })

    try {
      const res = await coinService.getCoinsList()
      set({ data: res.data })
    } catch (error) {
      set({ error: error as AxiosError })
    } finally {
      set({ isLoading: false })
    }
  },
}))
