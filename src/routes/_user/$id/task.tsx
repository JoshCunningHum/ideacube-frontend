import * as React from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Anchor,
  Container,
  Flex,
  Group,
  Stack,
  ThemeIcon,
} from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import TaskCard from "../../../components/TaskCard";

export const Route = createFileRoute("/_user/$id/task")({
  component: RouteComponent,
});

export interface Task {
  id: number;
  title: string;
  deadline: string;
  status: "To-do" | "Late" | "Finished";
  type: "Lecture" | "Quiz";
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Lecture 1",
    deadline: "3:00 PM",
    status: "To-do",
    type: "Lecture",
  },
  {
    id: 2,
    title: "Quiz 1",
    deadline: "3:00 PM",
    status: "Late",
    type: "Quiz",
  },
  {
    id: 3,
    title: "Lecture 2",
    deadline: "4:00 PM",
    status: "Finished",
    type: "Lecture",
  },
];

function RouteComponent() {
  const [selected, setSelected] = React.useState("All");
  const shownTasks = React.useMemo(() => {
    if (selected === "All") return tasks;
    return tasks.filter((task) => task.status === selected);
  }, [selected]);
  const { id } = Route.useParams();
  return (
    <Container fluid classNames={{ root: "px-8 py-4" }}>
      <Group gap={"1.5rem"}>
        <Anchor
          c="black"
          underline="never"
          classNames={{
            root: `cursor-pointer ${selected === "All" ? "border-b-2 border-black -mb-1.5 pb-1 text-lg" : "hover:border-b-2 hover:border-neutral-400 hover:-mb-1.5 hover:pb-1 text-lg"}`,
          }}
          unstyled={true}
          onClick={() => setSelected("All")}
        >
          All
        </Anchor>
        <Anchor
          c="black"
          underline="never"
          classNames={{
            root: `cursor-pointer ${selected === "To-do" ? "border-b-2 border-black -mb-1.5 pb-1 text-lg" : "hover:border-b-2 hover:border-neutral-400 hover:-mb-1.5 hover:pb-1 text-lg"}`,
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
            root: `cursor-pointer ${selected === "Late" ? "border-b-2 border-black -mb-1.5 pb-1 text-lg" : "hover:border-b-2 hover:border-neutral-400 hover:-mb-1.5 hover:pb-1 text-lg"}`,
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
            root: `cursor-pointer ${selected === "Finished" ? "border-b-2 border-black -mb-1.5 pb-1 text-lg" : "hover:border-b-2 hover:border-neutral-400 hover:-mb-1.5 hover:pb-1 text-lg"}`,
          }}
          unstyled={true}
          onClick={() => setSelected("Finished")}
        >
          Finished
        </Anchor>
      </Group>
      <Stack classNames={{ root: "pt-8" }}>
        {shownTasks.map((task) => (
          <Link
            to="/$id/task/$taskid"
            params={{ id: id, taskid: task.id.toString() }}
            key={task.id}
          >
            <TaskCard task={task} />
          </Link>
        ))}
      </Stack>
    </Container>
  );
}
