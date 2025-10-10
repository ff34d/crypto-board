import type { FC } from "react"
import { Outlet } from "react-router"

export const MainLayout: FC = () => {
  return (
    <div className="layout">
      <main>
        <Outlet />
      </main>
    </div>
  )
}
