import { coinService, type CoinsMarketItem } from "@/entities/coin"
import { Table } from "@/shared/ui"
import { useEffect, useState, type FC } from "react"
import { CoinsTableRow } from "./CoinsTableRow"

export const CoinsTable: FC = () => {
  const [coins, setCoins] = useState<CoinsMarketItem[] | undefined>()

  const handleReq = async () => {
    try {
      const res = await coinService.getCoinsMarkets()
      setCoins(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleReq()
  }, [])

  return (
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
        {coins &&
          coins.map((coin) => {
            return (
              <CoinsTableRow
                data={coin}
                key={coin.id}
              />
            )
          })}
      </tbody>
    </Table>
  )
}
