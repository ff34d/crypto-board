import { CoinTrendValue, type CoinsMarketItem } from "@/entities/coin"
import { Badge, Box, Text } from "@/shared/ui"
import { formatCurrency, formatPercentage } from "@/shared/utils"
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
    <tr id={`row-${symbol}`}>
      {/* Market rank */}
      <td align="center">{market_cap_rank}</td>

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
              className={styles["table__coin-title"]}
              size="lg"
              weight={600}>
              {name}
            </Text>
            <Badge
              className={styles["table__coin-badge"]}
              size="xs"
              variant="secondary">
              {symbol}
            </Badge>
          </Box>
        </Box>
      </td>

      {/* Coin price */}
      <td align="left">
        {formatCurrency(current_price, {
          minimumFractionDigits: current_price && current_price < 0.01 ? 8 : undefined,
        })}
      </td>

      {/* Coin 24 percentage trending  */}
      <td align="left">
        {price_change_percentage_24h ? (
          <CoinTrendValue trend={price_change_percentage_24h > 0}>
            {formatPercentage(price_change_percentage_24h)}
          </CoinTrendValue>
        ) : (
          <span>–</span>
        )}
      </td>

      {/* Market capitalize */}
      <td align="left">{formatCurrency(market_cap)}</td>

      {/* Total volume */}
      <td align="left">{formatCurrency(total_volume)}</td>
    </tr>
  )
}
