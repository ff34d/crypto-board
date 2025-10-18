export function formatPercentage(value: number | undefined | null, fixed = 2): string {
  if (!value) return "–"
  return Math.abs(value).toFixed(fixed) + "%"
}
