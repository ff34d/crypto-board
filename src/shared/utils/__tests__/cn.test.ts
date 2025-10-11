import { cn } from "../cn"

describe("[cn]", () => {
  it("Should concat class", () => {
    const className = cn(
      "1",
      "2",
      { ["3"]: true, ["4"]: false, ["5"]: true },
      "6"
    )

    expect(className).toBe("1 2 3 5 6")
  })
})
