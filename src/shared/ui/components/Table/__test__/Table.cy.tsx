import { Table } from "../ui/Table"

describe("<Table />", () => {
  it("renders", () => {
    cy.mount(
      <Table>
        <thead>
          <tr>
            <th data-cy="table-header-1">1</th>
            <th data-cy="table-header-2">2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-cy="table-body-1">body 1</td>
            <td data-cy="table-body-2">body 2</td>
          </tr>
        </tbody>
      </Table>
    )

    cy.get('[data-cy="table-header-1"]').should("have.text", "1")
    cy.get('[data-cy="table-header-2"]').should("have.text", "2")
    cy.get('[data-cy="table-body-1"]').should("have.text", "body 1")
    cy.get('[data-cy="table-body-2"]').should("have.text", "body 2")
  })
})
