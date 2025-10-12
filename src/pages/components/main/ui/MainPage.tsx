import { Tile } from "@/shared/ui/Tile"
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
      <Tile variant="primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        assumenda quae sint consequuntur. Adipisci reiciendis ea amet quis
        perferendis iusto porro blanditiis, cum deleniti ullam quasi facilis sed
        ab enim.
      </Tile>
      <Tile variant="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        assumenda quae sint consequuntur. Adipisci reiciendis ea amet quis
        perferendis iusto porro blanditiis, cum deleniti ullam quasi facilis sed
        ab enim.
      </Tile>

      <Tile variant="outline">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        assumenda quae sint consequuntur. Adipisci reiciendis ea amet quis
        perferendis iusto porro blanditiis, cum deleniti ullam quasi facilis sed
        ab enim.
      </Tile>

      <Tile variant="error">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        assumenda quae sint consequuntur. Adipisci reiciendis ea amet quis
        perferendis iusto porro blanditiis, cum deleniti ullam quasi facilis sed
        ab enim.
      </Tile>

      <Tile variant="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        assumenda quae sint consequuntur. Adipisci reiciendis ea amet quis
        perferendis iusto porro blanditiis, cum deleniti ullam quasi facilis sed
        ab enim.
      </Tile>

      <Tile variant="success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        assumenda quae sint consequuntur. Adipisci reiciendis ea amet quis
        perferendis iusto porro blanditiis, cum deleniti ullam quasi facilis sed
        ab enim.
      </Tile>
    </div>
  )
}
