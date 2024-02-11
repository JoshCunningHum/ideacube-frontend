import * as React from "react";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SignedLayout } from "../components/SignedLayout";

export const Route = createFileRoute("/_admin")({
    component: AdminLayout,
});

function AdminLayout() {
    return (
        <SignedLayout>
          <Outlet />
        </SignedLayout>
    );
}
