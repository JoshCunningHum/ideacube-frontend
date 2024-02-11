import * as React from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Container, NavLink } from "@mantine/core";
import { NavBar } from "../components/NavBar";

export const Route = createFileRoute("/")({
    component: HomeComponent,
});

function HomeComponent() {
    return (
        <div className="h-screen w-screen">
            <NavBar />
            <Container>
                <div className="flex flex-col gap-2">
                    <h2>Ideacube</h2>
                    <Link to="/login">Login</Link> <br />
                    <Link to="/login">Register</Link>
                </div>
            </Container>
        </div>
    );
}
