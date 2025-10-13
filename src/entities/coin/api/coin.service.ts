import coinsMarkets from "../_mocks/coinsMarkets.json"

function mockReq() {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
}

export const coinService = {
  async getCoinsMarkets() {
    await mockReq()
    return coinsMarkets
  },
}
