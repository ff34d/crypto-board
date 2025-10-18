import { Badge } from "../ui/Badge"

describe("<Badge />", () => {
  it("renders", () => {
    cy.mount(<Badge data-cy="badge">Hello</Badge>)
    cy.get('[data-cy="badge"]').should("have.text", "Hello")
  })
})
