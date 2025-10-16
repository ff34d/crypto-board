import { Heading, Text } from "@/shared/ui"
import type { FC } from "react"
import styles from "../styles/index.module.scss"

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header__heading-wrapper"]}>
        <Heading className={styles.header__heading}>Cryptoboard</Heading>

        <div className={styles.header__watermark}>
          <Text size="xs">Powered by</Text>

          <img
            className={styles["header__watermark-img"]}
            src="imgs/coingecko-logo.webp"
            alt="coingecko-api"
          />
        </div>
      </div>
    </header>
  )
}
