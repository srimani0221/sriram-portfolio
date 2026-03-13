import { motion } from 'framer-motion'
import { contactData } from '@/data/dummy'

export function SceneContact() {
  return (
    <section
      id="scene-contact"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 rounded-[80px] border border-white/5 bg-black/40 shadow-[0_0_180px_rgba(0,0,0,1)]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.35em] text-zinc-500"
        >
          Scene 05 · Finale
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]"
        >
          Let&apos;s design the next chapter of your product story.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 0.95, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-xl text-sm text-zinc-400 sm:text-[0.95rem]"
        >
          Whether it&apos;s a dashboard, marketing site, or complete product interface, I help teams
          craft experiences that feel cinematic — considered, precise, and calm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.32, duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col items-center gap-5 pt-2"
        >
          <a
            href={`mailto:${contactData.email}`}
            data-cursor-hover
            className="inline-flex items-center gap-3 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-8 py-3 text-xs font-medium uppercase tracking-[0.3em] text-zinc-50 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-all duration-300 ease-[0.22,0.61,0.36,1] hover:scale-[1.02] hover:border-zinc-300 hover:bg-zinc-900 hover:shadow-[0_0_28px_rgba(255,255,255,0.07)]"
          >
            Contact Sriram
          </a>
          <div className="flex flex-col gap-1 text-[11px] text-zinc-500 sm:flex-row sm:items-center sm:gap-4">
            <span className="font-medium tracking-[0.24em] uppercase">
              Email
            </span>
            <span className="text-zinc-300">{contactData.email}</span>
          </div>
          <div className="flex flex-col gap-1 text-[11px] text-zinc-500 sm:flex-row sm:items-center sm:gap-4">
            <span className="font-medium tracking-[0.24em] uppercase">
              Location
            </span>
            <span className="text-zinc-300">{contactData.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-3 text-[11px] text-zinc-500"
        >
          <span className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-500/60 to-transparent" />
          <p className="uppercase tracking-[0.35em]">Fade to black</p>
          <p className="text-[10px] text-zinc-600">
            © {new Date().getFullYear()} SRIRAM A · Crafted with React
          </p>
        </motion.div>
      </div>
    </section>
  )
}


