import { motion } from 'framer-motion'
import { WordReveal } from '@/components/motion/WordReveal'
import { ParallaxSection } from '@/components/motion/ParallaxSection'
import CurrentYear from '@/data/currentYear'
import { FiLinkedin, FiGithub, FiMail, FiPhone } from "react-icons/fi"

export function SceneHero({ onOpenResume }) {
  return (
    <ParallaxSection
      id="scene-hero"
      backgroundImage="/profile.png"
      className="text-white"
    >
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-xs uppercase tracking-[0.35em] text-zinc-400"
          >
            Portfolio · <CurrentYear />
          </motion.p>

          <div className="space-y-4">
            <WordReveal
              as="h1"
              text="Hi, I'm SRIRAM A"
              className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              delay={0.2}
            />
            <WordReveal
              as="p"
              text="SOFTWARE DEVELOPER"
              className="text-xl font-medium text-zinc-200 sm:text-2xl"
              delay={0.5}
            />
            <WordReveal
              as="p"
              text="Dynamic Software Developer with a proven track record. Proficient in Reactjs, Vue.js, excelling in delivering responsive designs."
              className="max-w-xl text-sm text-zinc-400 sm:text-base"
              delay={0.8}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex items-center gap-4 pt-6"
          >
            {[
              {
                icon: <FiLinkedin />,
                link: "https://www.linkedin.com/in/sriram-a/",
                label: "LinkedIn",
              },
              {
                icon: <FiGithub />,
                link: "https://github.com/srirama",
                label: "GitHub",
              },
              {
                icon: <FiMail />,
                link: "mailto:sriramarunachalaselvam.com",
                label: "Email",
              },
              {
                icon: <FiPhone />,
                link: "tel:+916383108571",
                label: "Phone",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-zinc-300 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex items-center gap-6 pt-4"
          >
            <button
              type="button"
              onClick={() => onOpenResume?.()}
              data-cursor-hover
              className="rounded-full border border-zinc-700/70 bg-zinc-900/70 px-7 py-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-100 backdrop-blur-md transition-all duration-300 ease-[0.22,0.61,0.36,1] hover:scale-[1.02] hover:border-zinc-400 hover:bg-zinc-900 hover:shadow-[0_0_24px_rgba(255,255,255,0.06)]"
            >
              View Resume
            </button>
            <div className="flex items-center gap-3 text-xs text-zinc-500">
              <div className="h-[1px] w-16 bg-gradient-to-r from-zinc-500/60 via-zinc-200 to-zinc-500/0" />
              <span>Scroll to begin</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.08, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mt-10 flex flex-1 items-center justify-center lg:mt-0"
        >
          <div className="relative h-[340px] w-full max-w-md overflow-hidden rounded-[36px] border border-white/6 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black shadow-[0_40px_120px_rgba(0,0,0,0.95)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" />
            <img
              src="/profile.png"
              alt="SRIRAM A profile"
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-400">
                  SOFTWARE DEVELOPER
                </p>
                <p className="text-sm font-medium text-zinc-50">Responsive designs · Code architecture.</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[11px] text-zinc-100 backdrop-blur-lg">
                <CurrentYear />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[46px] border border-white/5 bg-gradient-to-b from-white/6 via-transparent to-transparent blur-2xl"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 0.9, y: 6 }}
        transition={{
          delay: 1.2,
          duration: 1.4,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: [0.22, 0.61, 0.36, 1],
        }}
        className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[11px] text-zinc-500"
      >
        <span className="h-9 w-px bg-gradient-to-b from-zinc-400 via-zinc-100 to-zinc-500/0" />
        <span className="tracking-[0.35em] uppercase">Scroll</span>
      </motion.div>
    </ParallaxSection>
  )
}


