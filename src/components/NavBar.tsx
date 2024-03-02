import { Avatar, Group, Title } from "@mantine/core";
import "../styles/logo.css";
import React from "react";
import { IconBell, IconSettings } from "@tabler/icons-react";

export const NavBar = () => {
    return (
        <Group
            justify="space-between"
            className="w-full"
        >
            <Group className="gap-16">
                <Group
                    gap="sm"
                    visibleFrom="sm"
                >
                    <div className="root squared helvetica">
                        <div className="box box-red"></div>
                        <div className="box box-yellow"></div>
                        <div className="box box-purple"></div>
                        <div className="box box-green"></div>
                        <div className="box box-black"></div>
                    </div>
                    <div>
                        <span>idea</span>
                        <strong>cube</strong>
                    </div>
                </Group>

                <Title
                    order={4}
                    className="font-semibold text-sm md:text-lg"
                >
                    CSIT337 - Correlation Course
                </Title>
            </Group>

            <NavBarMenu />
        </Group>
    );
};

export const NavBarMenu = ({ sidebar = false }) => (
    <Group
        gap={sidebar ? "xl" : "md"}
        visibleFrom={!sidebar ? "sm" : undefined}
        hiddenFrom={sidebar ? "sm" : undefined}
    >
        <IconSettings size={sidebar ? 40 : undefined} />
        <IconBell size={sidebar ? 40 : undefined} />
        <Avatar
            size={sidebar ? 40 : undefined}
            radius="xl"
        />
    </Group>
);
