import { CoinTrendValue, type CoinsMarketItem } from "@/entities/coin"
import { Badge, Box, Text } from "@/shared/ui"
import type { FC } from "react"
import styles from "../styles/index.module.scss"

interface Props {
  data: CoinsMarketItem
}

export const CoinsTableRow: FC<Props> = ({
  data: {
    market_cap_rank,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    market_cap,
    total_volume,
  },
}) => {
  return (
    <tr>
      {/* Market rank */}
      <td align="center">{market_cap_rank ?? "–"}</td>

      {/* Coin name */}
      <td>
        <Box gap={0.7}>
          <img
            className={styles["table__coin-img"]}
            src={image}
            alt={name}
          />

          <Box gap={0.3}>
            <Text
              style={{
                lineHeight: 1.3,
                maxWidth: "15rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
                textWrap: "nowrap",
              }}
              size="lg"
              weight={600}>
              {name}
            </Text>
            <Badge
              size="xs"
              variant="secondary"
              style={{ textTransform: "uppercase" }}>
              {symbol}
            </Badge>
          </Box>
        </Box>
      </td>

      {/* Coin price */}
      <td align="left">
        {current_price
          ? current_price < 0.01
            ? "$" + current_price.toLocaleString("en-US", { minimumFractionDigits: 8 })
            : "$" + current_price.toLocaleString("en-US")
          : "–"}
      </td>

      {/* Coin 24 percentage trending  */}
      <td align="left">
        <CoinTrendValue
          trend={price_change_percentage_24h !== null && price_change_percentage_24h > 0}>
          {price_change_percentage_24h
            ? Math.abs(price_change_percentage_24h).toFixed(2) + "%"
            : "–"}
        </CoinTrendValue>
      </td>

      {/* Market capitalize */}
      <td align="left">{market_cap ? "$" + market_cap.toLocaleString("en-US") : "–"}</td>

      {/* Total volume */}
      <td align="left">
        {total_volume ? "$" + total_volume.toLocaleString("en-US") : "–"}
      </td>
    </tr>
  )
}
