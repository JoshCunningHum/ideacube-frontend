import * as React from "react";
import { Container, Flex } from "@mantine/core";
import { IconClipboardList, IconPencil } from "@tabler/icons-react";
import { Task } from "../routes/_user/$id/task";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Container
      classNames={{
        root: "py-6 px-8 m-0 bg-white rounded-lg shadow-lg hover:cursor-pointer hover:bg-gray-50",
      }}
      fluid
    >
      <Flex direction="row" justify="space-between" align="center">
        <div className="flex flex-row gap-4 items-center">
          {task.type === "Lecture" ? (
            <IconPencil className="h-10 w-10" />
          ) : (
            <IconClipboardList className="h-10 w-10" />
          )}
          <div>
            <p className="font-bold text-xl">{task.title}</p>
            <p>Deadline: {task.deadline}</p>
          </div>
        </div>
        <p
          className={`justify-self-end ${task.status === "To-do" ? "bg-yellow-200" : task.status === "Late" ? "bg-red-200" : "bg-green-200"} px-3 py-0.5 rounded-full`}
        >
          {task.status}
        </p>
      </Flex>
    </Container>
  );
};

export default TaskCard;
