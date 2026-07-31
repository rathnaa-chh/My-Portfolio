import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '../data/nav'

export function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.id)
    const handler = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return active
}
