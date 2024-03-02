import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { IconPlus } from "@tabler/icons-react";

export const Route = createFileRoute("/_admin/task")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-8 p-4 px-8">
        <div className="flex flex-row gap-4">
          <p className="text-lg text-black underline underline-offset-8 ">All</p>
          <p className="text-lg text-black hover:cursor-pointer hover:underline hover:underline-offset-8">
            Ongoing
          </p>
          <p className="text-lg text-black hover:cursor-pointer hover:underline hover:underline-offset-8">
            Finished
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div
            onClick={() => navigate({ to: "/task/createtask" })}
            className="flex flex-row items-center gap-4 rounded-lg bg-white p-6 shadow-md hover:cursor-pointer hover:ring-2 hover:ring-neutral-400"
          >
            <IconPlus className="h-10 w-10" />
            <p className="text-xl font-bold">Add task</p>
          </div>
        </div>
      </div>
    </>
  );
}

function TaskCard() {
  return (
    <>
      <div></div>
    </>
  );
}
