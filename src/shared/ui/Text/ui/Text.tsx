import type { UIBasePropsWithHTMLElement } from "@/shared/types"
import { cn } from "@/shared/utils"
import type { FC, ReactNode } from "react"
import styles from "../styles/index.module.scss"

interface Props extends UIBasePropsWithHTMLElement<HTMLParagraphElement> {
  weight?: number
  children?: ReactNode
}

export const Text: FC<Props> = ({
  size = "md",
  weight = 400,
  className,
  children,
  ...args
}) => {
  return (
    <p
      {...args}
      className={cn(styles.text, {
        [className as string]: className,
        [styles[`text__${size}`]]: size,
      })}
      style={{
        fontWeight: weight,
        ...args.style,
      }}>
      {children}
    </p>
  )
}
