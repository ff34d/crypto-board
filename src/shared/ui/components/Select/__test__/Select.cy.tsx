import { Select } from "../ui/Select"

describe("<Select />", () => {
  it("renders", () => {
    let value: string | undefined

    cy.mount(
      <Select
        value={value}
        setValue={(v) => (value = v as string)}
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
        ]}
      />
    )

    cy.get("select")
      .select("2")
      .then(() => {
        expect(value).equal("2")
      })
      .should("have.value", "2")
  })
})
