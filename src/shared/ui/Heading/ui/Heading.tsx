import type { UIBasePropsWithHTMLElement } from "@/shared/types"
import { cn } from "@/shared/utils"
import type { FC, ReactNode } from "react"
import styles from "../styles/index.module.scss"

interface Props
  extends Omit<UIBasePropsWithHTMLElement<HTMLHeadingElement>, "variant"> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  weight?: number
  children?: ReactNode
}

export const Heading: FC<Props> = ({
  as: Component = "h1",
  size = "md",
  weight = 600,
  className,
  children,
  ...args
}) => {
  return (
    <Component
      {...args}
      className={cn(styles.heading, {
        [className as string]: className,
        [styles[`heading__${size}`]]: size,
      })}
      style={{
        fontWeight: weight,
        ...args.style,
      }}>
      {children}
    </Component>
  )
}
