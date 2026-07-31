import { EXPERIENCES } from '@/data/experience'
import { useScrollReveal } from '@/hooks/useScrollProgress'

export function ExperienceSection() {
  const { ref, visible } = useScrollReveal()
  return (
    <section id="experience" style={{ padding: '120px 24px', background: 'rgba(255,255,255,0.01)', position: 'relative' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag" style={{ marginBottom: 16 }}>// experience.log</div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', margin: 0,
            background: 'linear-gradient(135deg, #fff 40%, #8FA4FF 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Experience</h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical connecting line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, rgba(91,108,255,0.8), rgba(91,108,255,0.2))',
            transform: 'translateX(-50%)',
          }} />

          {EXPERIENCES.map((exp, i) => {
            const { ref: eRef, visible: eVisible } = useScrollReveal()
            const isLeft = i % 2 === 0
            return (
              <div key={i} ref={eRef} style={{
                display: 'flex', justifyContent: isLeft ? 'flex-start' : 'flex-end',
                paddingBottom: i < EXPERIENCES.length - 1 ? 40 : 0,
                opacity: eVisible ? 1 : 0,
                transform: eVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.6s ease',
                position: 'relative',
              }}>
                {/* Dot */}
                <div className="animate-glow-pulse" style={{
                  position: 'absolute', left: '50%', top: 24, transform: 'translateX(-50%)',
                  width: 16, height: 16, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #040273, #5B6CFF)',
                  border: '2px solid #030014',
                  boxShadow: '0 0 20px rgba(91,108,255,0.6)',
                  zIndex: 1,
                }} />

                <div className="glass" style={{
                  width: '44%', borderRadius: 16, padding: '20px 24px',
                  ...(isLeft ? { marginRight: '56%' } : { marginLeft: '56%' }),
                  border: '1px solid rgba(91,108,255,0.15)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(91,108,255,0.4)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(91,108,255,0.08)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(91,108,255,0.15)'; (e.currentTarget as HTMLDivElement).style.background = '' }}
                >
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                    color: '#5B6CFF', letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>{exp.year}</span>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff', margin: '6px 0 2px' }}>{exp.role}</h3>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#8FA4FF', marginBottom: 10 }}>{exp.company}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{exp.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
