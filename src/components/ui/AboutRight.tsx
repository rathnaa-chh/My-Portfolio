import { EXPERIENCES } from '@/data/experience'

export function AboutRight({ visible }: { visible: boolean }) {
  return (
    <div className={`reveal-right ${visible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff', margin: '0 0 16px' }}>
          Who I Am
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', margin: '0 0 16px' }}>
          I'm a Frontend Developer with a strong passion for building clean, responsive, and interactive web applications. I specialize in Vue.js and React, and I love turning complex UI designs into reality with elegant code.
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', margin: 0 }}>
          Currently seeking a Frontend Developer or Frontend Intern role where I can grow, contribute, and help build products that make a difference.
        </p>
      </div>

      {/* Education */}
      <div>
        <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 16, color: '#8FA4FF', margin: '0 0 16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Education
        </h4>
        <div className="glass" style={{ borderRadius: 14, padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #040273, #5B6CFF)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L1 6l8 4 8-4-8-4zM1 10l8 4 8-4M1 14l8 4 8-4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff' }}>Bachelor in Information Technology Engineering of Faculty Engineering</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>Royal University of Phnom Penh • 2024–2027</div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 16, color: '#8FA4FF', margin: '0 0 20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Experience Timeline
        </h4>
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Animated line */}
          <div style={{
            position: 'absolute', left: 7, top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(to bottom, #5B6CFF, rgba(91,108,255,0.1))',
          }} />

          {EXPERIENCES.map((e, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < EXPERIENCES.length - 1 ? 28 : 0 }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -26, top: 6,
                width: 14, height: 14, borderRadius: '50%',
                background: 'linear-gradient(135deg, #040273, #5B6CFF)',
                border: '2px solid rgba(91,108,255,0.4)',
                boxShadow: '0 0 12px rgba(91,108,255,0.5)',
              }} />
              <div className="glass" style={{ borderRadius: 14, padding: '16px 18px', transition: 'all 0.3s' }}
                onMouseEnter={e2 => { (e2.currentTarget as HTMLDivElement).style.borderColor = 'rgba(91,108,255,0.3)'; (e2.currentTarget as HTMLDivElement).style.background = 'rgba(91,108,255,0.08)' }}
                onMouseLeave={e2 => { (e2.currentTarget as HTMLDivElement).style.borderColor = ''; (e2.currentTarget as HTMLDivElement).style.background = '' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff' }}>{e.role}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#8FA4FF', marginTop: 2 }}>{e.company}</div>
                  </div>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                    color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap',
                    padding: '3px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.05)',
                  }}>{e.year}</span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', margin: '10px 0 0' }}>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}