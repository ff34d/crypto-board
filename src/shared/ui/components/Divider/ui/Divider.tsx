import { cn } from "@/shared/utils"
import type { FC, HTMLProps } from "react"
import styles from "../styles/index.module.scss"

type Props = HTMLProps<HTMLDivElement>

export const Divider: FC<Props> = ({ className, ...args }) => {
  return (
    <div
      {...args}
      className={cn(styles.divider, { [className as string]: className })}
    />
  )
}
