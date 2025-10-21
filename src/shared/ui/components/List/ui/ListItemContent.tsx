import { cn } from "@/shared/utils"
import type { FC } from "react"
import styles from "../styles/index.module.scss"
import type { ListItemContent as TListItemContent } from "../types"

interface Props {
  data: TListItemContent[]
}

export const ListItemContent: FC<Props> = ({ data }) => {
  return (
    <div className={styles["list__item-content"]}>
      {data.map((item) => {
        const Wrapper = item.link ? "a" : "div"

        return (
          <Wrapper
            className={cn({
              [styles.list__badge]: item?.isBadge,
              [styles.list__link]: item?.link,
            })}
            key={item.title}
            href={item?.link || undefined}
            target={item?.link || undefined}>
            <span>{item.title}</span>
          </Wrapper>
        )
      })}
    </div>
  )
}
