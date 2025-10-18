import type { UIBasePropsWithHTMLElement, UIVariant } from "@/shared/types"
import { cn } from "@/shared/utils"
import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react"
import styles from "../styles/index.module.scss"
import type { SelectOption as TSelectOption } from "../types"

interface Props extends UIBasePropsWithHTMLElement<HTMLSelectElement> {
  value: string | undefined
  options: TSelectOption[]
  variant?: UIVariant
  setValue: Dispatch<SetStateAction<string | undefined>>
}

export const Select: FC<Props> = ({
  size = "md",
  variant = "primary",
  className,
  options,
  value,
  setValue,
  ...args
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return (
    <select
      {...args}
      className={cn(
        styles.select,
        styles[`select__${size}`],
        styles[`select__${variant}`],
        className
      )}
      value={value}
      onChange={handleChange}>
      {options.map((opt) => {
        return (
          <option
            key={opt.value}
            value={opt.value}>
            {opt.label}
          </option>
        )
      })}
    </select>
  )
}
