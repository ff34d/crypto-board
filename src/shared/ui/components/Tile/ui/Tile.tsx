import type { UIBasePropsWithHTMLElement, UIVariant } from "@/shared/types"
import { cn } from "@/shared/utils"
import type { FC, ReactNode } from "react"
import styles from "../styles/index.module.scss"

interface Props extends UIBasePropsWithHTMLElement<HTMLDivElement> {
  variant?: UIVariant
  children?: ReactNode
}

export const Tile: FC<Props> = ({
  size = "md",
  variant = "primary",
  className,
  children,
  ...args
}) => {
  return (
    <div
      {...args}
      className={cn(
        styles.tile,
        styles[`tile__${size}`],
        styles[`tile__${variant}`],
        { [className as string]: className }
      )}>
      {children}
    </div>
  )
}
