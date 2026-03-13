import { motion } from 'framer-motion'

/**
 * WordReveal
 * - Splits text into words and reveals them with a cinematic stagger.
 * - Use for big headlines and important lines of copy.
 */
export function WordReveal({
  text,
  as: As = 'p',
  className = '',
  delay = 0,
  once = true,
}) {
  const words = text.split(' ')

  const container = {
    hidden: {},
    visible: {
      transition: {
        delay,
        staggerChildren: 0.06,
      },
    },
  }

  const child = {
    hidden: { opacity: 0, y: '100%' },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  }

  return (
    <As className={`overflow-hidden ${className}`}>
      <motion.span
        className="inline-flex flex-wrap gap-x-2"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.8 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </As>
  )
}


