import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Container } from '@mantine/core'

export const Route = createFileRoute('/login')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
      <Container>
        <h2>Login Here</h2>
      </Container>
  )
}
