import { Input } from "../ui/Input"

describe("<Input />", () => {
  it("renders, should type text", () => {
    cy.mount(<Input />)
    cy.get("input").type("Hello").should("have.value", "Hello")
  })
})
