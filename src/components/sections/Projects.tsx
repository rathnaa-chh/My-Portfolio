import { ProjectCard } from '@/components/ui/ProjectCard'
import { PROJECTS } from '@/data/projects'
import { useScrollReveal } from '@/hooks/useScrollProgress'
export function ProjectsSection() {
  const { ref, visible } = useScrollReveal()
  return (
    <section id="projects" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag" style={{ marginBottom: 16 }}>// projects.featured</div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', margin: 0,
            background: 'linear-gradient(135deg, #fff 40%, #8FA4FF 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Featured Projects</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>
            Real projects, real results
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}