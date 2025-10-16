import { cn } from "@/shared/utils"
import type { FC, ReactNode } from "react"
import styles from "../styles/index.module.scss"

interface Props {
  trend?: boolean
  children?: ReactNode
  className?: string
}

export const CoinTrendValue: FC<Props> = ({ className, children, trend }) => {
  return (
    <div
      className={cn(styles.trend, className, {
        [styles["trend--positive"]]: trend,
        [styles["trend--negative"]]: !trend,
      })}>
      {children}
    </div>
  )
}
