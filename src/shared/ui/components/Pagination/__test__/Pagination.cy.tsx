import { Pagination } from "../ui/Pagination"

describe("<Pagination />", () => {
  it("renders, should increment", () => {
    let currentPage = 1

    cy.mount(
      <Pagination
        currentPage={currentPage}
        increment={() => currentPage++}
        decrement={() => currentPage--}
        totalPages={5}
      />
    )

    cy.get('[data-cy="pagination"]').should("exist")

    cy.get('[data-cy="pagination-next-button"]')
      .click()
      .then(() => {
        expect(currentPage).equal(2)
      })
  })

  it("Should decrement", () => {
    let currentPage = 2

    cy.mount(
      <Pagination
        currentPage={currentPage}
        increment={() => currentPage++}
        decrement={() => currentPage--}
        totalPages={5}
      />
    )

    cy.get('[data-cy="pagination"]').should("exist")

    cy.get('[data-cy="pagination-prev-button"]')
      .click()
      .then(() => {
        expect(currentPage).equal(1)
      })
  })
})
