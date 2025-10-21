import type { AxiosError, AxiosResponse } from "axios"
import type { StateCreator } from "zustand"

export interface ApiSliceState<D> {
  data: D | null
  isLoading: boolean
  error: AxiosError | null
  fetch: () => Promise<void>
}

type Request<D> = () => Promise<AxiosResponse<D>>
type SliceReturn<D> = StateCreator<ApiSliceState<D>>

export function createApiSlice<D>(req: Request<D>): SliceReturn<D> {
  return (set) => ({
    data: null,
    isLoading: false,
    error: null,

    fetch: async () => {
      set({ isLoading: true, error: null })

      try {
        const res = await req()
        set({ data: res?.data })
      } catch (error) {
        set({ error: error as AxiosError })
      } finally {
        set({ isLoading: false })
      }
    },
  })
}
