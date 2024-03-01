import * as React from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ActionIcon,
  Button,
  Container,
  FileInput,
  FileInputProps,
  Pill,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowLeft, IconCheck } from "@tabler/icons-react";

export const Route = createFileRoute("/_user/$id/task/$taskid")({
  component: RouteComponent,
});

const ValueComponent: FileInputProps["valueComponent"] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

function RouteComponent() {
  const { id, taskid } = Route.useParams();
  const [files, setFiles] = React.useState<File[]>([]);
  return (
    <Container fluid classNames={{ root: "px-8 py-4" }}>
      <Link to="/$id/task" params={{ id: id }}>
        <ActionIcon variant="transparent" color="black">
          <IconArrowLeft size={30} className="" />
        </ActionIcon>
      </Link>
      <Title order={1} mt={"md"}>
        Essential Data Knowledge part 1
      </Title>
      <Text>Deadline: 3:00 PM</Text>
      <Text mt={"sm"}>
        Test instructions Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Doloribus aspernatur repellendus autem amet itaque beatae
        molestiae, explicabo quas nemo, sed facilis consectetur eum porro id,
        adipisci iste dolorem vitae velit.
      </Text>
      <Title order={4} mt={"xl"}>
        Materials
      </Title>
      <FileInput
        readOnly={true}
        placeholder="readme.txt"
        classNames={{ input: "bg-white border-gray-400" }}
        mt={"xs"}
      />
      <Title order={4} mt={"xl"}>
        Submissions
      </Title>
      <FileInput
        placeholder="Upload a file"
        classNames={{ input: "bg-white border-gray-400" }}
        mt={"xs"}
        multiple={true}
        clearable={true}
        value={files}
        onChange={setFiles}
        valueComponent={ValueComponent}
      />
      <Button
        leftSection={<IconCheck size={24} />}
        variant="filled"
        classNames={{ root: "bg-green-300 text-black" }}
        mt={"xl"}
      >
        Turn in
      </Button>
    </Container>
  );
}
