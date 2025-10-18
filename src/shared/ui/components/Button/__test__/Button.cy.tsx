import { Button } from "../ui/Button"

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(<Button>Hello</Button>)
    cy.get("button").should("have.text", "Hello")
  })
})
