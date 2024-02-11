import * as React from "react";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import '../styles/navbar.css'

export function SignedLayout({ children, ...props }: any) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: { base: 80 } }}
            navbar={{
                width: { base: 200, md: 220, lg: 253 },
                breakpoint: "sm",
                collapsed: { mobile: !opened },
            }}
            withBorder={false}
            padding="md"
        >
            <AppShell.Header
                withBorder>
                <div className="flex absolute w-full items-center gap-2 p-4 px-14 h-full">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <NavBar />
                    <div className="w-screen bg-black absolute h-1 grad bottom-0 left-0"></div>
                </div>
            </AppShell.Header>

            <AppShell.Navbar>
                <SideBar />
            </AppShell.Navbar>

            <AppShell.Main className="bg-neutral-200">
                {children}
            </AppShell.Main>
        </AppShell>
    );
}
