import type { FC } from "react"
import { RouterProvider } from "react-router"
import { router } from "../lib/router"

import "@/shared/styles/index.scss"

export const App: FC = () => {
  return <RouterProvider router={router} />
}
