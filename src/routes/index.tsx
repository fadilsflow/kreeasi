import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className=' min-h-screen'>
      <h1 className='text-white'>Hello world</h1>
      <Button>Click Me</Button>
    </div>
  )
}