import { useState, useEffect, useRef } from 'react'
export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [hov, setHov] = useState(false)
  const ringRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      const target = e.target as HTMLElement
      setHov(!!(target.closest('button') || target.closest('a') || target.closest('[data-cursor]')))
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    let frame: number
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const animate = () => {
      ringRef.current.x = lerp(ringRef.current.x, pos.x, 0.12)
      ringRef.current.y = lerp(ringRef.current.y, pos.y, 0.12)
      setRing({ x: ringRef.current.x, y: ringRef.current.y })
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 999,
        transform: `translate(${pos.x - 5}px, ${pos.y - 5}px)`,
        width: 10, height: 10, borderRadius: '50%', background: '#fff',
        mixBlendMode: 'difference', transition: 'transform 0.05s',
      }} />
      <div style={{
        position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 998,
        transform: `translate(${ring.x - (hov ? 22 : 18)}px, ${ring.y - (hov ? 22 : 18)}px)`,
        width: hov ? 44 : 36, height: hov ? 44 : 36,
        borderRadius: '50%',
        border: `1px solid rgba(91,108,255,${hov ? 0.8 : 0.5})`,
        background: hov ? 'rgba(91,108,255,0.08)' : 'transparent',
        transition: 'width 0.3s, height 0.3s, border-color 0.3s, background 0.3s',
      }} />
    </>
  )
}
