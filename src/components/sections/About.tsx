
import { useScrollReveal } from '@/hooks/useScrollProgress'
import { AboutLeft } from '@/components/ui/AboutLeft'
import { AboutRight } from '@/components/ui/AboutRight'

export function AboutSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="about" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag" style={{ marginBottom: 16 }}>// about.me</div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', margin: 0,
            background: 'linear-gradient(135deg, #fff 40%, #8FA4FF 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>About Me</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }} className="about-grid">

          {/* Left: Profile */}
          <AboutLeft visible={visible} />

          {/* Right: Timeline + bio */}
          <AboutRight visible={visible} />
        </div>
      </div>
    </section>
  )
}