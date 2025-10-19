import type { UIBasePropsWithHTMLElement, UIVariant } from "@/shared/types"
import { cn } from "@/shared/utils"
import type { FC, ReactNode } from "react"
import styles from "../styles/index.module.scss"

interface Props extends UIBasePropsWithHTMLElement<HTMLDivElement> {
  variant?: UIVariant
  weight?: number
  children?: ReactNode
}

export const Badge: FC<Props> = ({
  size = "sm",
  variant = "primary",
  weight = 400,
  className,
  children,
  ...args
}) => {
  return (
    <div
      {...args}
      className={cn(
        styles.badge,
        styles[`badge__${size}`],
        styles[`badge__${variant}`],
        className
      )}
      style={{
        fontWeight: weight,
        ...args.style,
      }}>
      {children}
    </div>
  )
}
