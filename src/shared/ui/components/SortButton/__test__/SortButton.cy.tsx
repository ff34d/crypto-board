import { SortButton } from "../ui/SortButton"

describe("<SortButton />", () => {
  it("renders", () => {
    let direction: "asc" | "desc" = "desc"

    cy.mount(
      <SortButton
        direction={direction}
        onToggle={(dir) => (direction = dir === "asc" ? "desc" : "asc")}>
        Hello
      </SortButton>
    )

    cy.get("button")
      .should("have.text", "Hello")
      .click()
      .then(() => {
        expect(direction).equal("desc")
      })
  })
})
