import { cn } from "@/shared/utils"
import type { FC, ReactNode } from "react"

interface Props {
  as?: keyof HTMLElementTagNameMap
  gap?: number
  align?: "column" | "row"
  items?: "center" | "flex-start" | "flex-end"
  content?: "center" | "flex-start" | "flex-end"
  className?: string
  children?: ReactNode
}

export const Box: FC<Props> = ({
  as: Component = "div",
  gap = 1,
  align = "row",
  items = "center",
  content = "flex-start",
  className,
  children,
}) => {
  return (
    <Component
      className={cn(className)}
      style={{
        width: "100%",
        display: "flex",
        gap: gap + "rem",
        flexDirection: align,
        alignItems: items,
        justifyContent: content,
      }}>
      {children}
    </Component>
  )
}
