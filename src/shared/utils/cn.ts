type CnArgs = (string | Record<string, string | undefined | null | boolean>)[]

export function cn(...args: CnArgs): string {
  return args
    .flatMap((value) => {
      if (typeof value === "object") {
        return Object.entries(value)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key)
      }

      return value || ""
    })
    .join(" ")
}
