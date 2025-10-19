import { cn } from "@/shared/utils"
import type { FC, HTMLProps } from "react"
import styles from "../styles/index.module.scss"

interface Props extends HTMLProps<HTMLDivElement> {
  width: number
  height: number
  rounded?: number
}

/**
 * All units use rem
 */
export const Skeleton: FC<Props> = ({
  rounded = 0,
  width,
  height,
  className,
  ...args
}) => {
  return (
    <div
      {...args}
      className={cn(styles.skeleton, className)}
      style={{
        maxWidth: `${width}rem`,
        minHeight: `${height}rem`,
        borderRadius: `${rounded}rem`,
        ...args.style,
      }}
    />
  )
}
