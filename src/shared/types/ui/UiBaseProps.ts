import type { HTMLProps } from "react"
import type { UISize } from "./UiSize"

/* Base props for ui kit unit */
export interface UIBaseProps {
  size?: UISize
}

/* Clear api for ui kit unit */
export type UIBasePropsWithHTMLElement<T extends HTMLElement = HTMLElement> = Omit<
  HTMLProps<T>,
  keyof UIBaseProps
> &
  UIBaseProps
