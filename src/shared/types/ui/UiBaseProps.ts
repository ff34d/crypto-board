import type { HTMLProps } from "react"
import type { UISize } from "./UiSize"
import type { UIVariant } from "./UiVariant"

/* Base props for ui kit unit */
export interface UIBaseProps {
  size?: UISize
  variant?: UIVariant
}

/* Clear api for ui kit unit */
export type UIBasePropsWithHTMLElement<T extends HTMLElement = HTMLElement> =
  Omit<HTMLProps<T>, keyof UIBaseProps> & UIBaseProps
