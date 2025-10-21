export interface ListItemContent {
  title: string
  isBadge?: boolean
  link?: string
}

export interface ListItem {
  title: string
  content: ListItemContent[]
}
