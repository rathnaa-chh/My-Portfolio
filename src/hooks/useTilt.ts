import { useCallback, useRef, useState } from 'react'

export function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 })
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    setTilt({
      rx: ((y / r.height) - 0.5) * -16,
      ry: ((x / r.width) - 0.5) * 16,
      gx: (x / r.width) * 100,
      gy: (y / r.height) * 100,
    })
  }, [])
  const onLeave = useCallback(() => setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 }), [])
  return { ref, tilt, onMove, onLeave }
}