import { NAV_ITEMS } from '@/data/nav'

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 24px',
      background: 'rgba(0,0,0,0.3)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
        <div>
          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 18, color: '#fff', marginBottom: 4 }}>
            <span style={{ color: '#5B6CFF' }}>&lt;</span>Dev<span style={{ color: '#5B6CFF' }}>/&gt;</span>
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            © 2025 Alex Rivera. All rights reserved.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {NAV_ITEMS.map(n => (
            <button key={n.id} onClick={() => go(n.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)',
              padding: '4px 10px', borderRadius: 6, transition: 'color 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#8FA4FF' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)' }}
            >
              {n.label}
            </button>
          ))}
        </div>

        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>
          Built with React + Tailwind
        </div>
      </div>
    </footer>
  )
}
