import type { CoinsMarketItem } from "@/entities/coin"
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
      <td align="center">{market_cap_rank ?? "–"}</td>

      <td>
        <Box gap={0.2}>
          <img
            className={styles["table__coin-img"]}
            src={image}
            alt={name}
          />

          <Box gap={0.3}>
            <Text
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

      <td align="center">
        {current_price ? "$" + current_price.toLocaleString("en-US") : "–"}
      </td>

      <td align="center">
        {price_change_percentage_24h ? price_change_percentage_24h.toFixed(2) + "%" : "–"}
      </td>

      <td align="center">
        {market_cap ? "$" + market_cap.toLocaleString("en-US") : "–"}
      </td>

      <td align="center">
        {total_volume ? "$" + total_volume.toLocaleString("en-US") : "–"}
      </td>
    </tr>
  )
}
