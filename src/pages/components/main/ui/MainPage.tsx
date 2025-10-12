import { Table } from "@/shared/ui/Table"
import type { FC } from "react"

export const MainPage: FC = () => {
  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>30</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>24</td>
            <td>London</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
