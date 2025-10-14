import axios from "axios"
import AxiosMockAdapter from "axios-mock-adapter"
import { ApiEndpoint } from "../types"
import coinsMarkets from "./_mocks/coinsMarkets.json"

export const axiosInstance = axios.create({
  baseURL: import.meta.env.API_URL,
})

/**
 * Mocked endpoints
 */
const mock = new AxiosMockAdapter(axiosInstance)

mock.onGet(ApiEndpoint.getCoinsMarkets).reply(200, coinsMarkets)
