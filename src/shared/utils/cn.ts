type CnArgs = (string | undefined | Record<string, string | undefined | null | boolean>)[]

export function cn(...args: CnArgs): string {
  let result = ""

  for (const value of args) {
    if (!value) continue

    if (typeof value === "string") {
      result += (result ? " " : "") + value
      continue
    }

    for (const key in value) {
      if (value[key]) {
        result += (result ? " " : "") + key
      }
    }
  }

  return result
}
