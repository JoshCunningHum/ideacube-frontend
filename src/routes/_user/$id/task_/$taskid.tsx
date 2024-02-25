import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_user/$id/task/$taskid")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id, taskid } = Route.useParams();
  return (
    <>
      <h1>Assignment 1</h1>
    </>
  );
}
