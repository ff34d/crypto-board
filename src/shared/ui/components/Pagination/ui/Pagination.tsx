import { cn } from "@/shared/utils"
import { type FC } from "react"
import styles from "../styles/index.module.scss"

interface Props {
  currentPage: number
  totalPages: number
  increment: VoidFunction
  decrement: VoidFunction
}

export const Pagination: FC<Props> = ({
  currentPage,
  totalPages,
  increment,
  decrement,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className={cn(styles.pagination__button, styles[`pagination__button--prev`])}
        type="button"
        onClick={decrement}
        disabled={currentPage === 1}
      />

      <span>
        {currentPage} / {totalPages}
      </span>

      <button
        className={cn(styles.pagination__button, styles[`pagination__button--next`])}
        type="button"
        onClick={increment}
        disabled={currentPage === totalPages}
      />
    </div>
  )
}
