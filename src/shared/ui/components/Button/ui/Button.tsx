import type { UIBasePropsWithHTMLElement, UIVariant } from "@/shared/types"
import { cn } from "@/shared/utils"
import type { FC, ReactNode } from "react"
import styles from "../styles/index.module.scss"

interface Props extends UIBasePropsWithHTMLElement<HTMLButtonElement> {
  children?: ReactNode
  variant?: UIVariant
  type?: "button" | "submit"
}

export const Button: FC<Props> = ({
  type = "button",
  size = "md",
  variant = "primary",
  children,
  className,
  ...args
}) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[`button__${size}`],
        styles[`button__${variant}`],
        { [className as string]: className }
      )}
      type={type}
      {...args}>
      {children}
    </button>
  )
}
