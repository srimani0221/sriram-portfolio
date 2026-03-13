import { Analytics } from '@vercel/analytics/react'
import { SmoothingProvider } from '@/components/scroll/SmoothingProvider'
import { CinematicPage } from '@/components/cinematic/CinematicPage'
import { CursorFollower } from '@/components/cursor/CursorFollower'

export default function App() {
  return (
    <SmoothingProvider>
      <CursorFollower />
      <main className="bg-black text-white">
        <CinematicPage />
        <Analytics />
      </main>
    </SmoothingProvider>
  )
}
