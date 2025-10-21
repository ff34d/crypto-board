import { cn } from "@/shared/utils"
import type { FC } from "react"
import styles from "../styles/index.module.scss"
import type { ListItem } from "../types"
import { ListItemContent } from "./ListItemContent"

interface Props {
  data: ListItem[]
  className?: string
}

export const List: FC<Props> = ({ data, className }) => {
  return (
    <ul className={cn(styles.list, className)}>
      {data.map((item) => (
        <li
          className={styles.list__item}
          key={item.title}>
          <span>{item.title}</span>
          <ListItemContent data={item.content} />
        </li>
      ))}
    </ul>
  )
}
