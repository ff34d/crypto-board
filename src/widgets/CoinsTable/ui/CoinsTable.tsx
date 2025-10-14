import { coinService } from "@/entities/coin"
import { useQuery } from "@/shared/api"
import { Box, Loader, Pagination, Table } from "@/shared/ui"
import { useState, type FC } from "react"
import { CoinsTableRow } from "./CoinsTableRow"

export const CoinsTable: FC = () => {
  const { data: coins, isLoading } = useQuery(() => {
    return coinService.getCoinsMarkets()
  })

  const [pagedCoins, setPagedCoins] = useState(coins || [])

  if (isLoading || !coins) return <Loader />

  return (
    <Box
      align="column"
      className="fade">
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
          {pagedCoins &&
            pagedCoins.map((coin) => {
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
        data={coins}
        setPagedData={setPagedCoins}
        step={15}
      />
    </Box>
  )
}
