import { cn } from "@/shared/utils"
import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useEffect,
  useState,
} from "react"
import styles from "../styles/index.module.scss"

interface Props<T> {
  data: T[]
  step?: number
  setPagedData: Dispatch<SetStateAction<T[]>>
}

export const Pagination = <T,>({
  step = 10,
  data,
  setPagedData,
}: Props<T>): ReactNode => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalPages = Math.ceil(data.length / step)
  const currentPage = Math.floor(currentIndex / step) + 1

  const handleMove = (direction: "next" | "prev") => {
    setCurrentIndex((prev) => {
      const nextIndex =
        direction === "next"
          ? Math.min(prev + step, Math.floor((data.length - 1) / step) * step)
          : Math.max(prev - step, 0)
      return nextIndex
    })
  }

  useEffect(() => {
    setPagedData(data.slice(currentIndex, currentIndex + step))
  }, [currentIndex, step, data, setPagedData])

  return (
    <div className={styles.pagination}>
      <button
        className={cn(
          styles.pagination__button,
          styles[`pagination__button--prev`]
        )}
        type="button"
        onClick={() => handleMove("prev")}
        disabled={currentIndex === 0}></button>

      <span>
        {currentPage} / {totalPages}
      </span>

      <button
        className={cn(
          styles.pagination__button,
          styles[`pagination__button--next`]
        )}
        type="button"
        onClick={() => handleMove("next")}
        disabled={currentIndex + step >= data.length}></button>
    </div>
  )
}
