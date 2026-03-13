import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * ParallaxSection
 * - Creates a layered parallax effect for background + foreground content.
 */
export function ParallaxSection({
  id,
  backgroundImage,
  overlayGradient = 'from-black/80 via-black/60 to-black/90',
  className = '',
  children,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const fgY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])
  const fgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0.7])

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen w-full overflow-hidden bg-black ${className}`}
    >
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        {backgroundImage ? (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-zinc-950 via-black to-zinc-900" />
        )}
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayGradient}`} />
        <div className="pointer-events-none absolute inset-0 rounded-[80px] border border-white/4 bg-black/10 shadow-[0_0_200px_rgba(0,0,0,0.85)]" />
      </motion.div>

      <motion.div
        style={{ y: fgY, opacity: fgOpacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24 lg:px-12"
      >
        {children}
      </motion.div>
    </section>
  )
}


