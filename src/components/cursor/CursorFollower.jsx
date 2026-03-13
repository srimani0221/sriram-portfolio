import { useEffect, useRef, useState } from 'react'

const LERP = 0.18
const CURSOR_HOVER_SELECTOR = '[data-cursor-hover]'

export function CursorFollower() {
  const [visible, setVisible] = useState(false)
  const [useCustomCursor, setUseCustomCursor] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const hoverRef = useRef(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const prefersFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!prefersFinePointer) return

    setUseCustomCursor(true)

    const onMove = (e) => {
      if (!visible) setVisible(true)
      target.current = { x: e.clientX, y: e.clientY }
      const el = document.elementFromPoint(e.clientX, e.clientY)
      hoverRef.current = !!el?.closest?.(CURSOR_HOVER_SELECTOR)
    }

    const animate = () => {
      const { x: tx, y: ty } = target.current
      let { x: cx, y: cy } = current.current
      cx += (tx - cx) * LERP
      cy += (ty - cy) * LERP
      current.current = { x: cx, y: cy }

      const scale = hoverRef.current ? 1.7 : 1
      const ringScale = hoverRef.current ? 1.4 : 1
      const t = `translate(${cx}px, ${cy}px)`
      if (dotRef.current) {
        dotRef.current.style.transform = `${t} translate(-50%, -50%) scale(${scale})`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `${t} translate(-50%, -50%) scale(${ringScale})`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [visible])

  useEffect(() => {
    if (!useCustomCursor) return
    document.body.classList.add('cursor-follower-active')
    return () => document.body.classList.remove('cursor-follower-active')
  }, [useCustomCursor])

  if (!useCustomCursor) return null

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden
    >
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-8 w-8 rounded-full border border-white/20 transition-transform duration-200 ease-[0.22,0.61,0.36,1]"
        style={{
          transform: 'translate(-50%, -50%) scale(1)',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-2 w-2 rounded-full bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-transform duration-200 ease-[0.22,0.61,0.36,1]"
        style={{
          transform: 'translate(-50%, -50%) scale(1)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
