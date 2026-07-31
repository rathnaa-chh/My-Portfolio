import { NAV_ITEMS } from '@/data/nav'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useState, useEffect } from 'react'
export function Navbar({ progress }: { progress: number }) {
  const active = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'padding 0.4s ease',
      padding: scrolled ? '12px 0' : '20px 0',
    }}>
      {/* Scroll progress */}
      <div style={{
        position: 'absolute', top: 0, left: 0, height: 2,
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #040273, #5B6CFF, #8FA4FF)',
        transition: 'width 0.1s',
      }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 20px', borderRadius: 16,
          ...(scrolled ? {
            background: 'rgba(3,0,20,0.7)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.07)',
          } : {}),
        }}>
          <button onClick={() => go('home')} data-cursor style={{
            background: 'none', border: 'none', cursor: 'none',
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
            fontSize: 20, color: '#fff', letterSpacing: '-0.02em',
          }}>
            <span style={{ color: '#5B6CFF' }}>&lt;</span>Dev<span style={{ color: '#5B6CFF' }}>/&gt;</span>
          </button>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
            {NAV_ITEMS.map(n => (
              <button key={n.id} onClick={() => go(n.id)} data-cursor style={{
                background: active === n.id ? 'rgba(91,108,255,0.15)' : 'transparent',
                border: active === n.id ? '1px solid rgba(91,108,255,0.35)' : '1px solid transparent',
                borderRadius: 10, padding: '7px 16px', cursor: 'none',
                color: active === n.id ? '#8FA4FF' : 'rgba(255,255,255,0.55)',
                fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
                transition: 'all 0.25s', whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => { if (active !== n.id) (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
                onMouseLeave={e => { if (active !== n.id) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.55)' }}
              >
                {n.label}
              </button>
            ))}
          </div>

          <button onClick={() => go('contact')} data-cursor className="hidden-mobile" style={{
            background: 'linear-gradient(135deg, #040273, #5B6CFF)',
            border: 'none', borderRadius: 10, padding: '8px 20px',
            color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
            cursor: 'none', transition: 'all 0.3s',
            boxShadow: '0 4px 20px rgba(91,108,255,0.25)',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 30px rgba(91,108,255,0.5)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(91,108,255,0.25)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)' }}
          >
            Hire Me
          </button>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(v => !v)} className="show-mobile" style={{
            background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8,
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="2" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            marginTop: 8, borderRadius: 16, padding: '12px 8px',
            background: 'rgba(3,0,20,0.92)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            {NAV_ITEMS.map(n => (
              <button key={n.id} onClick={() => go(n.id)} style={{
                background: active === n.id ? 'rgba(91,108,255,0.15)' : 'transparent',
                border: 'none', borderRadius: 10, padding: '10px 16px', cursor: 'pointer',
                color: active === n.id ? '#8FA4FF' : 'rgba(255,255,255,0.7)',
                fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500,
                textAlign: 'left',
              }}>
                {n.label}
              </button>
            ))}
            <button onClick={() => go('contact')} style={{
              background: 'linear-gradient(135deg, #040273, #5B6CFF)',
              border: 'none', borderRadius: 10, padding: '10px 16px', cursor: 'pointer',
              color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600,
              marginTop: 4,
            }}>
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}