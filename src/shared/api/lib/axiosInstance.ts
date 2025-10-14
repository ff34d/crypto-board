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
const mock = new AxiosMockAdapter(axiosInstance)

mock.onGet(ApiEndpoint.getCoinsList).reply(200, coinsList)

mock.onGet(ApiEndpoint.getCoinsMarkets).reply((config) => {
  const { per_page, page } = config.params

  const start = (page - 1) * per_page
  const end = start + per_page

  const resData = coinsMarkets.slice(start, end)

  return [200, resData]
})
