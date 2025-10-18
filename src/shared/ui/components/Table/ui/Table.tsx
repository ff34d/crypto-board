import { cn } from "@/shared/utils"
import type { FC, HTMLProps, ReactNode } from "react"
import styles from "../styles/index.module.scss"

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}

export const Table: FC<Props> = ({ children, className, ...args }) => {
  return (
    <div
      {...args}
      className={cn(styles.table__wrapper, className)}>
      <table className={styles.table}>{children}</table>
    </div>
  )
}
