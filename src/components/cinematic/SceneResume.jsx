import { motion } from 'framer-motion'

export function SceneResume({ onOpenResume }) {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-12 text-center text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          My Resume
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex justify-center"
        >
          <button
            type="button"
            onClick={() => onOpenResume?.()}
            data-cursor-hover
            className="group relative block w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 shadow-[0_30px_80px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-all duration-300 ease-[0.22,0.61,0.36,1] hover:scale-[1.01] hover:border-white/20 hover:shadow-[0_40px_100px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="View full resume"
          >
            <img
              src="/resume.jpg"
              alt="Resume"
              className="h-auto w-full object-cover transition-transform duration-500 ease-[0.22,0.61,0.36,1] group-hover:scale-[1.02]"
              onError={(e) => {
                const target = e.target
                target.src = '/resume.png'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                Click to View Full Resume
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent py-8">
              <span className="block text-center text-sm font-medium uppercase tracking-[0.25em] text-zinc-300">
                Click to View Full Resume
              </span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
