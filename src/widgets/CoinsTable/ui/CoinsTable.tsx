import { useCoinsListStore, useCoinsMarketsStore } from "@/entities/coin"
import { Box, Loader, Pagination, Table, Text } from "@/shared/ui"
import { useEffect, useMemo, type FC } from "react"
import styles from "../styles/index.module.scss"
import { CoinsTableHeader } from "./CoinsTableHeader"
import { CoinsTableRow } from "./CoinsTableRow"

export const CoinsTable: FC = () => {
  const coinsList = useCoinsListStore()
  const coinsMarkets = useCoinsMarketsStore()

  const totalPages = useMemo(
    () => Math.ceil((coinsList.data?.length || 0) / coinsMarkets.perPage),
    [coinsList.data]
  )

  const handleMovePage = (align: "prev" | "next") => {
    coinsMarkets.movePage(align)
    coinsMarkets.fetchCoinsMarkets()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    if (!coinsList.data) coinsList.fetchCoinsList()
    if (!coinsMarkets.data) coinsMarkets.fetchCoinsMarkets()
  }, [])

  if (coinsMarkets.isLoading && !coinsMarkets.data) return <Loader />
  if (!coinsMarkets.data) return <Text>No math coins</Text>

  return (
    <Box align="column">
      <Table className={styles.table}>
        <CoinsTableHeader />

        <tbody>
          {coinsMarkets.data.map((coin) => (
            <CoinsTableRow
              data={coin}
              key={coin.id}
            />
          ))}
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
