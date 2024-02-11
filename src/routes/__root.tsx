import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// Mantine
import { MantineProvider } from "@mantine/core";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <MantineProvider>
                <Outlet />
            </MantineProvider>
            <TanStackRouterDevtools position="bottom-right" />
        </>
    );
}
