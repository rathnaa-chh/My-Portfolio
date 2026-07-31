import { useEffect, useState } from 'react'

export function useTypingEffect(texts: string[], speed = 75, deleteSpeed = 35, pause = 2400) {
  const [display, setDisplay] = useState('')
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing')
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const current = texts[idx]
    let t: ReturnType<typeof setTimeout>
    if (phase === 'typing') {
      if (display.length < current.length) {
        t = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed)
      } else {
        t = setTimeout(() => setPhase('deleting'), pause)
      }
    } else {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay(display.slice(0, -1)), deleteSpeed)
      } else {
        setIdx((i) => (i + 1) % texts.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(t)
  }, [display, phase, idx, texts, speed, deleteSpeed, pause])

  return display
}