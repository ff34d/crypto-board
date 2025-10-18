import { cn } from "@/shared/utils"
import type { FC, HTMLProps } from "react"
import styles from "../styles/index.module.scss"

interface Props extends HTMLProps<HTMLDivElement> {
  /**
   * Width, rem unit
   */
  width?: number
}

export const Loader: FC<Props> = ({ width = 5, className, ...args }) => {
  return (
    <div
      {...args}
      className={cn(styles.loader, className)}
      style={{
        maxWidth: `${width}rem`,
        ...args.style,
      }}
    />
  )
}
