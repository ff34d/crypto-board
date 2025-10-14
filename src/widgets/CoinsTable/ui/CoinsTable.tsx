import { useCoinsListStore, useCoinsMarketsStore } from "@/entities/coin"
import { Box, Loader, Pagination, Table, Text } from "@/shared/ui"
import { useEffect, useMemo, type FC } from "react"
import { CoinsTableRow } from "./CoinsTableRow"

export const CoinsTable: FC = () => {
  const coinsMarkets = useCoinsMarketsStore()
  const coinsList = useCoinsListStore()
  const totalPages = useMemo(
    () => Math.floor((coinsList.data?.length || 0) / coinsMarkets.perPage),
    [coinsList.data]
  )

  const handleMovePage = (align: "prev" | "next") => {
    coinsMarkets.movePageAndFetchCoins(align)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    if (!coinsList.data) coinsList.fetchCoinsList()
    if (!coinsMarkets.data) coinsMarkets.fetchCoinsMarkets()
  }, [])

  if (coinsMarkets.isLoading) return <Loader />
  if (!coinsMarkets.data) return <Text>No math coins</Text>

  return (
    <Box align="column">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h</th>
            <th>Market cap.</th>
            <th>Total volume</th>
          </tr>
        </thead>
        <tbody>
          {coinsMarkets.data.map((coin) => {
            return (
              <CoinsTableRow
                data={coin}
                key={coin.id}
              />
            )
          })}
        </tbody>
      </Table>

      <Pagination
        currentPage={coinsMarkets.currentPage}
        totalPages={totalPages}
        increment={() => handleMovePage("next")}
        decrement={() => handleMovePage("prev")}
      />
    </Box>
  )
}
