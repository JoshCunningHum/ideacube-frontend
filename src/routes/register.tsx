import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Container } from '@mantine/core'

export const Route = createFileRoute('/register')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
      <Container>
        <h2>Register Here</h2>
      </Container>
  )
}
