import { cn } from "@/shared/utils"
import { type FC, type ReactNode } from "react"
import styles from "../styles/index.module.scss"

interface Props {
  direction: "asc" | "desc" | null
  children?: ReactNode
  className?: string
  onToggle: (direction: "asc" | "desc") => void
}

export const SortButton: FC<Props> = ({
  direction,
  children,
  className,
  onToggle,
  ...args
}) => {
  const onClick = () => onToggle(direction === "desc" ? "asc" : "desc")

  return (
    <button
      className={cn(styles.button, className, {
        [styles["button__arrow--active"]]: direction,
        [styles["button__arrow--up"]]: direction === "asc",
        [styles["button__arrow--down"]]: direction === "desc",
      })}
      {...args}
      onClick={onClick}
      type="button">
      {children}
    </button>
  )
}
