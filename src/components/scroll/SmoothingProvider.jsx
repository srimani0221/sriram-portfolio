import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

/**
 * Lenis-based smooth scroll wrapper.
 * Wrap your entire app in this so that scroll feels cinematic and controlled.
 *
 * - Enables ultra-smooth wheel scrolling (no bounce, no jank).
 * - Forces a dark theme at the document level to match the cinematic layout.
 */
export function SmoothingProvider({ children }) {
  useEffect(() => {
    // Force global dark theme for cinematic look
    document.documentElement.classList.add('dark')

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), // smooth, no bounce
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return children
}


