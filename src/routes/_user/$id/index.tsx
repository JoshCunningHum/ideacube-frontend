import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Container } from '@mantine/core'

export const Route = createFileRoute('/_user/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <Container>
        <h2>Code Here</h2>
      </Container>
  )
}
