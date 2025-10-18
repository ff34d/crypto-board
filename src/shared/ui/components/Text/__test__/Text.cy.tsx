import { Text } from "../ui/Text"

describe("<Text />", () => {
  it("renders", () => {
    cy.mount(<Text>Hello</Text>)
    cy.get("p").should("have.text", "Hello")
  })
})
