export function formatCurrency(
  value: number | undefined | null,
  opt?: Intl.NumberFormatOptions
): string {
  if (!value) return "–"
  return "$" + value.toLocaleString("en-US", opt)
}
