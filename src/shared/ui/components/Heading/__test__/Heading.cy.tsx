import { Heading } from "../ui/Heading"

describe("<Heading />", () => {
  it("renders, should default tag h1", () => {
    cy.mount(<Heading>Hello</Heading>)
    cy.get("h1").should("have.text", "Hello")
  })

  it("Should tag h2", () => {
    cy.mount(<Heading as="h2">Hello</Heading>)
    cy.get("h2").should("have.text", "Hello")
  })
})
