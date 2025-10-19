import { Tile } from "../ui/Tile"

describe("<Tile />", () => {
  it("renders, should div default tag", () => {
    cy.mount(<Tile data-cy="tile">Hello</Tile>)
    cy.get('[data-cy="tile"]').should("have.text", "Hello")
  })

  it("should tile tag is article", () => {
    cy.mount(<Tile as="article">Hello</Tile>)
    cy.get("article").should("have.text", "Hello")
  })
})
