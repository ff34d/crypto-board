import type { UIBaseProps, UIVariant } from "@/shared/types"
import { cn } from "@/shared/utils"
import type { HTMLAttributes, ReactNode } from "react"
import styles from "../styles/index.module.scss"

type Props = UIBaseProps &
  HTMLAttributes<HTMLElement> & {
    as?: keyof HTMLElementTagNameMap
    variant?: UIVariant
    children?: ReactNode
  }

export const Tile = ({
  size = "md",
  variant = "primary",
  as: Component = "div",
  className,
  children,
  ...args
}: Props) => {
  return (
    <Component
      {...args}
      className={cn(
        styles.tile,
        styles[`tile__${size}`],
        styles[`tile__${variant}`],
        className
      )}>
      {children}
    </Component>
  )
}
