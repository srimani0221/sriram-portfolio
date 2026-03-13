import { motion } from 'framer-motion'
import { projectsData } from '@/data/dummy'
import { ParallaxSection } from '@/components/motion/ParallaxSection'

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 + i * 0.15,
      duration: 0.9,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
}

export function SceneProjects() {
  return (
    <section id="scene-projects" className="relative bg-black">
      <ParallaxSection overlayGradient="from-black/90 via-black/80 to-black">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Scene 03 · Products I&apos;ve shipped
            </p>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
              Every project is treated like a product reveal.
            </h2>
            <p className="max-w-2xl text-sm text-zinc-400 sm:text-[0.95rem]">
              From dashboards to booking flows, I focus on clarity, rhythm, and micro-interactions
              that make complex products feel effortless.
            </p>
          </header>

          <div className="space-y-16">
            {projectsData.map((project, index) => (
              <motion.article
                key={project.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.55 }}
                variants={cardVariants}
                className="relative grid gap-10 rounded-[32px] border border-white/6 bg-gradient-to-b from-zinc-900/70 via-black/80 to-black/95 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-zinc-900/40">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%)]" />
                  <motion.img
                    src={project.image || '/placeholder.jpg'}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
                  />
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                      Product {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-xl font-semibold text-zinc-50 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400 sm:text-[0.95rem]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-hover
                      className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-zinc-200 transition-all duration-300 ease-[0.22,0.61,0.36,1] hover:translate-x-0.5 hover:text-zinc-50 hover:opacity-90"
                    >
                      Visit live experience
                    </a>
                    <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                      <span className="h-px w-8 bg-zinc-500/40" />
                      <span>Scroll to next reveal</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}


