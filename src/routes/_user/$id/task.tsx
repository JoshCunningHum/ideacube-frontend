import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Container, Group, Stack, ThemeIcon } from "@mantine/core";

export const Route = createFileRoute("/_user/$id/task")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selected, setSelected] = React.useState("all");
  return (
    <Container fluid>
      <Group gap={"1.5rem"}>
        <Anchor
          c="black"
          underline="never"
          classNames={{
            root: `cursor-pointer ${selected === "all" ? "border-b-2 border-black -mb-1.5 pb-1" : ""}`,
          }}
          unstyled={true}
          onClick={() => setSelected("all")}
        >
          All
        </Anchor>
        <Anchor
          c="black"
          underline="never"
          classNames={{
            root: `cursor-pointer ${selected === "To-do" ? "border-b-2 border-black -mb-1.5 pb-1" : ""}`,
          }}
          unstyled={true}
          onClick={() => setSelected("To-do")}
        >
          To-do
        </Anchor>
        <Anchor
          c="black"
          underline="never"
          classNames={{
            root: `cursor-pointer ${selected === "Late" ? "border-b-2 border-black -mb-1.5 pb-1" : ""}`,
          }}
          unstyled={true}
          onClick={() => setSelected("Late")}
        >
          Late
        </Anchor>
        <Anchor
          c="black"
          underline="never"
          classNames={{
            root: `cursor-pointer ${selected === "Finished" ? "border-b-2 border-black -mb-1.5 pb-1" : ""}`,
          }}
          unstyled={true}
          onClick={() => setSelected("Finished")}
        >
          Finished
        </Anchor>
      </Group>
      <Stack>
        <Container fluid></Container>
      </Stack>
    </Container>
  );
}
