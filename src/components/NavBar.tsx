import { Avatar, Group, Title } from "@mantine/core";
import "../styles/logo.css";
import React from "react";
import { IconBell, IconSettings } from '@tabler/icons-react'

export const NavBar = () => {
    return (
        <Group justify="space-between" className="w-full">

            <Group className="gap-16">

                <Group gap="sm">
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

                <Title order={4} className="font-semibold">CSIT337 - Correlation Course</Title>
            </Group>

            <Group gap="md">
                <IconSettings />
                <IconBell />
                <Avatar radius="xl" />
            </Group>

        </Group>
    );
};
