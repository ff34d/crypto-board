import { cn } from "@/shared/utils"
import type { FC, HTMLProps } from "react"
import styles from "../styles/index.module.scss"

interface Props extends HTMLProps<HTMLDivElement> {
  /**
   * Max weight, rem unit
   */
  maxWeight?: number
}

export const Loader: FC<Props> = ({ maxWeight = 5, className, ...args }) => {
  return (
    <div
      {...args}
      className={cn(styles.loader, {
        [className as string]: className,
      })}
      style={{
        maxWidth: `${maxWeight}rem`,
        ...args.style,
      }}
    />
  )
}
