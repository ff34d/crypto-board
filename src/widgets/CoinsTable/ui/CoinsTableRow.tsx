import type { CoinsMarketItem } from "@/entities/coin"
import { Badge, Box, Text } from "@/shared/ui"
import type { FC } from "react"
import styles from "../styles/index.module.scss"

interface Props {
  data: CoinsMarketItem
}

export const CoinsTableRow: FC<Props> = ({ data }) => {
  return (
    <tr>
      {/* Coin cap. rank */}
      {data.market_cap_rank && <td align="center">{data.market_cap_rank}</td>}

      {/* Coin name */}
      {data.name && (
        <td>
          <Box gap={0.2}>
            <img
              className={styles["table__coin-img"]}
              src={data.image}
              alt={data.name}
            />

            <Box gap={0.3}>
              <Text
                size="lg"
                weight={600}>
                {data.name}
              </Text>
              <Badge
                size="xs"
                variant="secondary"
                style={{ textTransform: "uppercase" }}>
                {data.symbol}
              </Badge>
            </Box>
          </Box>
        </td>
      )}

      {/* Coin current prise */}
      {data.current_price && (
        <td>${data.current_price.toLocaleString("en-US")}</td>
      )}

      {/* Coin prize change percentage for 24h */}
      {data.price_change_percentage_24h && (
        <td align="center">{data.price_change_percentage_24h.toFixed(2)}%</td>
      )}

      {/* Coin market cap. */}
      {data.market_cap && <td>${data.market_cap.toLocaleString("en-US")}</td>}

      {/* Coin total volume */}
      {data.total_volume && (
        <td>${data.total_volume.toLocaleString("en-US")}</td>
      )}
    </tr>
  )
}
