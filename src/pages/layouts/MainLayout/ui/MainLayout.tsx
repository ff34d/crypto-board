import { Header } from "@/widgets/Header"
import type { FC } from "react"
import { Outlet } from "react-router"

export const MainLayout: FC = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
