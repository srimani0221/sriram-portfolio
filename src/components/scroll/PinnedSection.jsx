import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * PinnedSection
 * - Pins a section during scroll and drives a progress value (0 → 1) into a render prop child.
 * - Use this for hero storytelling, who-I-am, projects-as-products, etc.
 *
 * Usage:
 * <PinnedSection>
 *   {(progress) => (
 *     <div style={{ opacity: progress }}>
 *       ...
 *     </div>
 *   )}
 * </PinnedSection>
 */
export function PinnedSection({
  id,
  children,
  height = '300vh',
  className = '',
  backgroundClassName = '',
}) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useLayoutEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        pin: content,
        scrub: 1,
        onUpdate: (self) => {
          // Drive a 0 → 1 progress value into the render prop
          setProgress(self.progress)
        },
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ height }}
    >
      <div
        ref={contentRef}
        className={`sticky top-0 h-screen flex items-center ${backgroundClassName}`}
      >
        {typeof children === 'function' ? children(progress) : children}
      </div>
    </section>
  )
}


