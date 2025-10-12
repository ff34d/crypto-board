import { Badge, Button, Input, Select } from "@/shared/ui"
import { useEffect, useState, type FC } from "react"

export const MainPage: FC = () => {
  const [state, setState] = useState<string | undefined>()

  useEffect(() => {
    console.log(state)
  }, [state])

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
      <Select
        value={state}
        setValue={setState}
        options={[
          { label: "Hello 1", value: "hello1" },
          { label: "Hello 2", value: "hello2" },
          { label: "Hello 3", value: "hello3" },
        ]}
      />
      <Select
        variant="secondary"
        value={state}
        setValue={setState}
        options={[
          { label: "Hello 1", value: "hello1" },
          { label: "Hello 2", value: "hello2" },
          { label: "Hello 3", value: "hello3" },
        ]}
      />
      <Select
        variant="outline"
        value={state}
        setValue={setState}
        options={[
          { label: "Hello 1", value: "hello1" },
          { label: "Hello 2", value: "hello2" },
          { label: "Hello 3", value: "hello3" },
        ]}
      />

      <Button>Hello</Button>
      <Badge size="md">Hello</Badge>
      <Input size="md" />
    </div>
  )
}
