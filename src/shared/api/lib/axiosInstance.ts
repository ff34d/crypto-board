import axios from "axios"
import AxiosMockAdapter from "axios-mock-adapter"
import { ApiEndpoint } from "../types"
import coinsList from "./_mocks/coinsList.json"
import coinsMarkets from "./_mocks/coinsMarkets.json"

export const axiosInstance = axios.create({
  baseURL: import.meta.env.API_URL,
})

/**
 * Mocked endpoints
 */
if (import.meta.env.MODE === "development") {
  const mock = new AxiosMockAdapter(axiosInstance)

  /* Get coins list */
  mock.onGet(ApiEndpoint.getCoinsList).reply(200, coinsList)

  /* Get coins markets */
  mock.onGet(ApiEndpoint.getCoinsMarkets).reply((config) => {
    const { per_page, page, order } = config.params

    const [field, dir] = order.split(/_(?=[^_]+$)/)

    const start = (page - 1) * per_page
    const end = start + per_page

    const sortedData = [...coinsMarkets].sort((a, b) => {
      const aValue = a[field as keyof typeof a]
      const bValue = b[field as keyof typeof b]

      if (aValue === bValue) return 0

      if (typeof aValue === "number" && typeof bValue === "number") {
        return dir === "asc" ? aValue - bValue : bValue - aValue
      } else {
        return dir === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue))
      }
    })

    const resData = sortedData.slice(start, end)

    return [200, resData]
  })
}
