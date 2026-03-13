import { WordReveal } from '@/components/motion/WordReveal'
import { PinnedSection } from '@/components/scroll/PinnedSection'
import { aboutData } from '@/data/dummy'

export function SceneWhoIAm() {
  return (
    <PinnedSection
      id="scene-who-i-am"
      height="260vh"
      className="bg-black"
      backgroundClassName="bg-gradient-to-b from-zinc-950 via-black to-zinc-950"
    >
      {(progress) => {
        const headlineOpacity = Math.min(1, progress * 1.6)
        const detailOpacity = Math.max(0, progress - 0.25) * 1.5
        const bgShift = Math.min(40, progress * 80)

        return (
          <div className="relative mx-auto flex h-full max-w-5xl flex-col justify-center gap-16 px-6 lg:px-8">
            <div
              className="pointer-events-none absolute inset-x-0 top-24 h-64 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_65%)] blur-3xl"
              style={{
                opacity: 0.7 + progress * 0.4,
                transform: `translateY(${bgShift}px)`,
                transition: 'transform 0.2s linear',
              }}
            />

            <header
              className="space-y-5"
              style={{
                opacity: headlineOpacity,
                transform: `translateY(${(1 - headlineOpacity) * 40}px)`,
                transition: 'opacity 0.25s linear, transform 0.25s linear',
              }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                Scene 02 · Who I Am
              </p>
              <WordReveal
                as="h2"
                text="Not just a developer — a creator of innovative web app templates."
                className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-4xl lg:text-[2.6rem]"
                delay={0.1}
              />
              <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
                {aboutData.description}
              </p>
            </header>

            <div
              className="grid gap-10 text-sm text-zinc-300 sm:grid-cols-[1.1fr_1fr] sm:text-base"
              style={{
                opacity: detailOpacity,
                transform: `translateY(${(1 - detailOpacity) * 40}px)`,
                transition: 'opacity 0.25s linear, transform 0.25s linear',
              }}
            >
              <div className="space-y-6">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
                  In one line
                </p>
                <p className="text-sm text-zinc-200 sm:text-[0.95rem]">
                  I specialize in delivering high-quality, accessible code architecture and responsive designs across multiple frameworks.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
                  Coordinates
                </p>
                <div className="space-y-3 text-sm sm:text-[0.95rem]">
                  {aboutData.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2 text-zinc-300"
                    >
                      <span className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                        {detail.label}
                      </span>
                      <span className="text-right text-[0.95rem] text-zinc-100">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </PinnedSection>
  )
}


