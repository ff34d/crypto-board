import { CoinsTable } from "../ui/CoinsTable"

describe("<CoinsTable />", () => {
  it("renders table", () => {
    cy.mount(<CoinsTable />)
    cy.get('[data-cy="coins-table"]').should("not.be.null")
  })

  it("Should pagination changes rows", () => {
    cy.mount(<CoinsTable />)

    cy.get('tr[id*="row-"]')
      .first()
      .invoke("attr", "id")
      .then((firstId) => {
        cy.get('[data-cy="pagination-next-button"]').click()

        cy.get('tr[id*="row-"]')
          .first()
          .should(($tr) => {
            expect($tr.attr("id")).not.to.eq(firstId)
          })
      })
  })
})
