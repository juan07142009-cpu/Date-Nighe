import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/main')({
  component: Main,
})

function Main() {
  return <div>Main Page</div>
}
