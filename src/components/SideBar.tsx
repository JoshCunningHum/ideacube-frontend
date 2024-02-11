import { Button, Stack } from "@mantine/core";
import React from "react";
import "../styles/sidebar.css";
import { Link, ToPathOption, useRouteContext, useRouterState } from "@tanstack/react-router";
import { IconCircleCheck, IconFile, IconMessage, IconPlayerPlay } from "@tabler/icons-react";

interface SideBarItemProp {
    label: string;
    route: string;
    icon: React.ReactNode,
    class: string
}

export const SideBar = () => {
    const iconSize = 35;

    const links : SideBarItemProp[] = [{
        label: 'Tasks',
        route: '/task',
        icon: <IconCircleCheck size={iconSize} />,
        class: "border-l-red-500" 
    },{
        label: 'Files',
        route: '/file',
        icon: <IconFile size={iconSize} />,
        class: "border-l-yellow-500" 
    }, {
        label: 'Chats',
        route: '/chat',
        icon: <IconMessage size={iconSize} />,
        class: "border-l-green-500" 
    }, {
        label: 'Stream',
        route: '/stream',
        icon: <IconPlayerPlay size={iconSize} />,
        class: "border-l-purple-500" 
    }]

    return (
        <Stack gap="md" py={15} id="sidebar">
            { links.map(({ label, route, icon, class: classes }) => (
                <SideBarItem 
                    key={label} 
                    class={classes} 
                    label={label} 
                    route={route} 
                    icon={icon} />
            )) }
        </Stack>
    );
};


const SideBarItem = ({ label, route, icon, class: classes }: SideBarItemProp) => {
    const { location: { pathname }} = useRouterState()

    return (
        <Button
            justify="flex-start"
            className={["relative sidebar-item", pathname.indexOf(route) !== -1 && "sidebar-item-active " + classes ].join(' ')}
            fullWidth
            radius="xs"
            variant="white"
            color="black"
            leftSection={icon}
            autoContrast
            size="lg"
            pl={59}
            component="a"
            href={route}
        >
            <div className="min-w-[75%]">{label}</div>
        </Button>
    );
};