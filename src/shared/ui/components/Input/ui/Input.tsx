import type { UIBasePropsWithHTMLElement, UIVariant } from "@/shared/types"
import { cn } from "@/shared/utils"
import type { FC } from "react"
import styles from "../styles/index.module.scss"

interface Props extends UIBasePropsWithHTMLElement<HTMLInputElement> {
  variant?: UIVariant
}

export const Input: FC<Props> = ({
  size = "md",
  variant = "primary",
  className,
  ...args
}) => {
  return (
    <input
      {...args}
      className={cn(
        styles.input,
        styles[`input__${size}`],
        styles[`input__${variant}`],
        { [className as string]: className }
      )}
    />
  )
}
