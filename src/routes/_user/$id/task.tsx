import { Anchor, Container, Group, Stack } from "@mantine/core";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import * as React from "react";
import TaskCard from "../../../components/TaskCard";
import getEnumKeys from "../../../utils/getEnumKeys";

export const Route = createFileRoute("/_user/$id/task")({
    component: RouteComponent,
    validateSearch: (
        search: Record<string, unknown>
    ): { filter: TaskStatus | "" } => {
        return {
            filter: (search.filter as number) || "",
        };
    },
});

export enum TaskStatus {
    "To-do" = 1,
    Late,
    Finished,
}

export interface Task {
    id: number;
    title: string;
    deadline: string;
    status: TaskStatus;
    type: "Lecture" | "Quiz";
}

const tasks: Task[] = [
    {
        id: 1,
        title: "Lecture 1",
        deadline: "3:00 PM",
        status: TaskStatus["To-do"],
        type: "Lecture",
    },
    {
        id: 2,
        title: "Quiz 1",
        deadline: "3:00 PM",
        status: TaskStatus.Late,
        type: "Quiz",
    },
    {
        id: 3,
        title: "Lecture 2",
        deadline: "4:00 PM",
        status: TaskStatus.Finished,
        type: "Lecture",
    },
];

function RouteComponent() {
    const { filter } = Route.useSearch();

    const navigate = useNavigate({ from: Route.fullPath });
    const setFilter = (filterType: TaskStatus | "") =>
        navigate({ search: { filter: filterType }, replace: true });

    const shownTasks = React.useMemo(() => {
        if (filter === "") return tasks;
        return tasks.filter((task) => task.status === filter);
    }, [filter]);

    const { id } = Route.useParams();

    return (
        <Container
            fluid
            classNames={{ root: "p-4 xl:px-8 xl:py-4" }}
        >
            <Group gap={"1.5rem"}>
                {["All", ...getEnumKeys(TaskStatus)].map((v, i) => (
                    <Anchor
                        key={v}
                        c="black"
                        underline="never"
                        classNames={{
                            root: `cursor-pointer 
                              ${
                                  (!i && !filter) ||
                                  v === TaskStatus[filter as TaskStatus]
                                      ? "border-b-2 border-black -mb-1.5 pb-1 text-lg"
                                      : "hover:border-b-2 hover:border-neutral-400 hover:-mb-1.5 hover:pb-1 text-lg"
                              }`,
                        }}
                        unstyled={true}
                        onClick={() => setFilter(i === 0 ? "" : i)}
                    >
                        {v}
                    </Anchor>
                ))}
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
