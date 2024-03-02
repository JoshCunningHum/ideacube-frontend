import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Container, FileInput, Group, Text, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export const Route = createFileRoute("/_user/$id/file")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container fluid>
      <Container fluid p={0}>
        <Group>
          <Text>options here</Text>
        </Group>
      </Container>
      <Title
        order={2}
        mt={"md"}
      >{`Documents > Quizzes (basta file path)`}</Title>
      <FileInput
        leftSection={<IconPlus size={32} />}
        placeholder="Upload a file"
        classNames={{
          input: "bg-white py-4 px-16 border-gray-400",
          section: "ml-4",
        }}
        mt={"md"}
      />
    </Container>
  );
}
