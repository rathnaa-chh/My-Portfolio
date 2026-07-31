import { useState } from 'react'
import { SERVICES } from '@/data/services'
import { useScrollReveal } from '@/hooks/useScrollProgress'

const SERVICES = [
  { title: 'UI/UX Design', description: 'Creating beautiful and intuitive user interfaces', icon: '🎨' },
  { title: 'Frontend Development', description: 'Building responsive and performant web applications', icon: '⚛️' },
  { title: 'Web Optimization', description: 'Optimizing performance and SEO for better results', icon: '⚡' },
]

export function ServicesSection() {
  const { ref, visible } = useScrollReveal()
  return (
    <section id="services" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag" style={{ marginBottom: 16 }}>// services.offer()</div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', margin: 0,
            background: 'linear-gradient(135deg, #fff 40%, #8FA4FF 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>What I Do</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>
            Services I offer as a Frontend Developer
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {SERVICES.map((s, i) => {
            const [hov, setHov] = useState(false)
            return (
              <div key={s.title}
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                data-cursor
                className="service-card"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, background 0.3s, box-shadow 0.3s`,
                  position: 'relative', borderRadius: 20, padding: '32px 28px',
                  background: hov ? 'rgba(91,108,255,0.08)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${hov ? 'rgba(91,108,255,0.35)' : 'rgba(255,255,255,0.07)'}`,
                  backdropFilter: 'blur(20px)',
                  boxShadow: hov ? '0 12px 48px rgba(91,108,255,0.15)' : 'none',
                  cursor: 'none', overflow: 'hidden',
                }}
              >
                {/* Background radial glow */}
                <div style={{
                  position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(91,108,255,0.15), transparent)',
                  opacity: hov ? 1 : 0, transition: 'opacity 0.4s',
                }} />

                <div style={{
                  width: 52, height: 52, borderRadius: 14, marginBottom: 20,
                  background: hov ? 'linear-gradient(135deg, #040273, #5B6CFF)' : 'rgba(91,108,255,0.1)',
                  border: '1px solid rgba(91,108,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: hov ? '#fff' : '#8FA4FF',
                  boxShadow: hov ? '0 8px 24px rgba(91,108,255,0.35)' : 'none',
                  transition: 'all 0.35s',
                  transform: hov ? 'scale(1.08)' : 'scale(1)',
                }}>
                  {s.icon}
                </div>

                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 17, color: '#fff', margin: '0 0 10px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}