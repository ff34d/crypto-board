import { createApiSlice, type ApiSliceState } from "@/shared/stores"
import { AxiosError } from "axios"
import { create } from "zustand"
import { coinService } from "../api"
import type { Coin } from "../types"

interface State extends ApiSliceState<Coin> {
  id: string | null
  setId: (value: State["id"]) => void
}

export const useCoinStore = create<State>((set, get, store) => ({
  /* === Extend base api slice === */
  ...createApiSlice(() => {
    const id = get().id
    if (!id) throw new AxiosError("Id is empty")

    return coinService.getCoin(id)
  })(set, get, store),

  /* === Store === */
  id: null,
  setId: (value) => {
    if (!value) return
    set({ id: value })
  },
}))
