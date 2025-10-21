import { List, Tile, type ListItem } from "@/shared/ui/components"
import type { FC } from "react"

const list: ListItem[] = [
  {
    title: "Community",
    content: [
      {
        title: "Reddit",
        isBadge: true,
        link: "/",
      },
      {
        title: "Twitter",
        isBadge: true,
        link: "/",
      },
      {
        title: "Facebook",
        isBadge: true,
        link: "/",
      },
      {
        title: "Bitcointalk.org",
        isBadge: true,
        link: "/",
      },
    ],
  },
  {
    title: "First line text text text",
    content: [
      {
        title: "Text",
      },
      {
        title: "Badge",
        isBadge: true,
      },
      {
        title: "Badge",
        isBadge: true,
      },
      {
        title: "Badge",
        isBadge: true,
      },
      {
        title: "Link",
        isBadge: true,
        link: "/",
      },
      {
        title: "Badge link",
        link: "/",
      },
    ],
  },
]

export const CoinPage: FC = () => {
  return (
    <div className="page">
      <Tile variant="secondary">
        <List data={list} />
      </Tile>
    </div>
  )
}
