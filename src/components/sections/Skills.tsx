import { SkillCard } from '@/components/ui/SkillCard'
import { FRONTEND_SKILLS, TOOL_SKILLS } from '@/data/skills'
import { useScrollReveal } from '@/hooks/useScrollProgress'

export function SkillsSection() {
  const { ref, visible } = useScrollReveal()
  return (
    <section id="skills" style={{ padding: '120px 24px', background: 'rgba(255,255,255,0.01)', position: 'relative' }}>
      {/* Subtle grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(91,108,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,108,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag" style={{ marginBottom: 16 }}>// skills.map()</div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', margin: 0,
            background: 'linear-gradient(135deg, #fff 40%, #8FA4FF 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Technical Skills</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>
            Technologies I work with daily
          </p>
        </div>

        {/* Frontend */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: '0.12em',
            color: '#5B6CFF', textTransform: 'uppercase', margin: '0 0 24px',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 24, height: 1, background: '#5B6CFF', display: 'inline-block' }} />
            Frontend Development
            <span style={{ flex: 1, height: 1, background: 'rgba(91,108,255,0.2)', display: 'inline-block' }} />
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
            {FRONTEND_SKILLS.map((s, i) => <SkillCard key={s.name} skill={s} visible={visible} delay={i * 60} />)}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 13, letterSpacing: '0.12em',
            color: '#5B6CFF', textTransform: 'uppercase', margin: '0 0 24px',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 24, height: 1, background: '#5B6CFF', display: 'inline-block' }} />
            Tools & Design
            <span style={{ flex: 1, height: 1, background: 'rgba(91,108,255,0.2)', display: 'inline-block' }} />
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
            {TOOL_SKILLS.map((s, i) => <SkillCard key={s.name} skill={s} visible={visible} delay={(FRONTEND_SKILLS.length + i) * 60} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
