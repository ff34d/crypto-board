import type { FC } from "react"
import { RouterProvider } from "react-router"
import { router } from "../lib/router"

export const App: FC = () => {
  return <RouterProvider router={router} />
}
