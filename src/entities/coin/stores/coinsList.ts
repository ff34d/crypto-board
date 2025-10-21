import { createApiSlice, type ApiSliceState } from "@/shared/stores"
import { create } from "zustand"
import { coinService } from "../api"
import type { CoinsListItem } from "../types"

type State = ApiSliceState<CoinsListItem[]>

export const useCoinsListStore = create<State>((set, get, store) => ({
  ...createApiSlice(() => coinService.getCoinsList())(set, get, store),
}))
