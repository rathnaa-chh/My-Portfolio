import aboutImage from '@/assets/image.png'

export function AboutLeft({ visible }: { visible: boolean }) {
  return (
    <div className={`reveal-left ${visible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Profile image */}
      <div style={{ position: 'relative' }}>
        <div className="animate-glow-pulse" style={{
          position: 'absolute', inset: -2, borderRadius: 24,
          background: 'linear-gradient(135deg, #040273, #5B6CFF, #8FA4FF)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'relative', zIndex: 1, borderRadius: 22, overflow: 'hidden',
          background: 'rgba(3,0,20,0.8)',
        }}>
          <img
            src={aboutImage}
            alt="Rathna Chhourn — Frontend Developer"
            style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block', filter: 'brightness(0.9) saturate(1.1)' }}
          />
          {/* Overlay gradient */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
            background: 'linear-gradient(to top, rgba(3,0,20,0.8), transparent)',
          }} />
          <div style={{
            position: 'absolute', bottom: 20, left: 20,
            fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,0.7)',
          }}>
            <div style={{ color: '#8FA4FF', fontWeight: 600 }}>Chhourn Rathna</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>Frontend Developer</div>
          </div>
        </div>
      </div>

      {/* Download CV */}
      <a href="#" data-cursor style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        background: 'rgba(91,108,255,0.1)', border: '1px solid rgba(91,108,255,0.3)',
        borderRadius: 14, padding: '14px 24px', textDecoration: 'none',
        color: '#8FA4FF', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 14, fontWeight: 600,
        transition: 'all 0.3s',
      }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(91,108,255,0.2)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 30px rgba(91,108,255,0.2)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(91,108,255,0.1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1v9M5 7l3 3 3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Download CV
      </a>

      {/* Quick facts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[
          { label: 'Location', value: 'Phnom Penh, Cambodia' },
          { label: 'Experience', value: '1+ Year with school projects' },
          { label: 'Stack', value: 'Vue / React' },
          { label: 'Status', value: '🟢 Available' },
        ].map(f => (
          <div key={f.label} className="glass" style={{ borderRadius: 12, padding: '12px 14px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{f.label}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: '#fff' }}>{f.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
