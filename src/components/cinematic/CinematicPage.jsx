import { useState } from 'react'
import { SceneHero } from './SceneHero'
import { SceneWhoIAm } from './SceneWhoIAm'
import { SceneProjects } from './SceneProjects'
import { SceneExperience } from './SceneExperience'
import { SceneResume } from './SceneResume'
import { SceneContact } from './SceneContact'
import ResumeModal from '@/components/ResumeModal'

/**
 * High-level orchestration of the cinematic scroll experience.
 * Resume popup (view + download) is shared between hero and resume section.
 */
export function CinematicPage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <SceneHero onOpenResume={() => setIsResumeModalOpen(true)} />
      <SceneWhoIAm />
      <SceneProjects />
      <SceneExperience />
      <SceneResume onOpenResume={() => setIsResumeModalOpen(true)} />
      <SceneContact />
      <ResumeModal
        open={isResumeModalOpen}
        onOpenChange={setIsResumeModalOpen}
      />
    </div>
  )
}


