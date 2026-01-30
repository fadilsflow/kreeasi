import HeroSection from '@/components/HeroSection'
import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
  <>
  <div className="relative pt-13">
    <HeroSection/>
    <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-7xl px-4 lg:px-8 py-4 ">
      {/* content */}
    </div>
  </div>
  
  </>
)
}