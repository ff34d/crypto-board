import { CoinPage } from "@/pages/components/coin"
import { MainPage } from "@/pages/components/main"
import { MainLayout } from "@/pages/layouts/MainLayout"
import { routes } from "@/shared/configs"
import { createHashRouter } from "react-router"

export const router = createHashRouter([
  {
    /* Main layout */
    path: routes.main,
    Component: MainLayout,
    children: [
      /* Main page */
      {
        index: true,
        Component: MainPage,
      },
      /* Coin page */
      {
        path: routes.coin,
        Component: CoinPage,
      },
    ],
  },
])
