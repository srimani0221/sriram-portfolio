import { motion } from 'framer-motion'
import { educationData } from '@/data/dummy'

export function SceneExperience() {
  return (
    <section
      id="scene-experience"
      className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-100/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-100/5 via-transparent to-transparent" />

      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 lg:flex-row lg:gap-20">
        <div className="max-w-sm space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Scene 04 · Timeline
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            A background rooted in technology and innovation.
          </h2>
          <p className="text-sm text-zinc-400 sm:text-[0.95rem]">
            Consistently striving for excellence in information technology, my academic path has focused on building scalable and efficient digital solutions.
          </p>
        </div>

        <div className="relative flex-1">
          <div className="absolute left-3 top-0 bottom-0 hidden w-px bg-gradient-to-b from-zinc-500/60 via-zinc-700/40 to-zinc-900/0 sm:block" />
          <div className="space-y-10">
            {educationData.map((item, idx) => (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  delay: 0.05 + idx * 0.08,
                  duration: 0.85,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                className="relative grid gap-3 rounded-2xl border border-white/6 bg-zinc-900/70 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:grid-cols-[auto,1fr] sm:gap-5 sm:p-6"
              >
                <div className="relative hidden sm:flex sm:flex-col sm:items-center sm:gap-4">
                  <div className="h-3 w-3 rounded-full border border-zinc-100/60 bg-zinc-50 shadow-[0_0_0_6px_rgba(255,255,255,0.15)]" />
                  <div className="flex-1 w-px bg-gradient-to-b from-zinc-400/70 via-zinc-700/40 to-transparent" />
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                    {item.year}
                  </p>
                  <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                    {item.degree}
                  </h3>
                  <p className="text-xs text-zinc-400 sm:text-[0.8rem]">{item.institution}</p>
                </div>

                <p className="text-xs leading-relaxed text-zinc-400 sm:col-span-2 sm:text-[0.8rem]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


