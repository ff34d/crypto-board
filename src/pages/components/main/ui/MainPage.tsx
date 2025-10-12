import { Skeleton } from "@/shared/ui"
import { type FC } from "react"

export const MainPage: FC = () => {
  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}>
      <Skeleton
        width={10}
        height={2}
        rounded={10}
      />
    </div>
  )
}
