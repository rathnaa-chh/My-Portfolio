import { useTilt } from '@/hooks/useTilt'

export function ProjectCard({ project, index, visible }: { project: { title: string; description: string; image: string; demo: string; github: string; badge?: string; tech: string[] }, index: number, visible: boolean }) {
  const { ref, tilt, onMove, onLeave } = useTilt()
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor
      style={{
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
        perspective: 1000,
      }}
    >
      <div style={{
        borderRadius: 20, overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(16px)',
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
        boxShadow: `0 20px 60px rgba(0,0,0,0.4), inset 0 0 80px rgba(${tilt.gx * 0.5},${tilt.gy * 0.3},255,0.02)`,
        cursor: 'none', height: '100%',
      }}>
        {/* Image */}
        <div style={{ position: 'relative', overflow: 'hidden', height: 220 }}>
          <img
            src={`https://images.unsplash.com/${project.image}?w=700&h=400&fit=crop&auto=format`}
            alt={project.title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              transform: 'scale(1.02)', transition: 'transform 0.4s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.02)' }}
          />
          {/* Overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(3,0,20,0.85) 0%, rgba(3,0,20,0.3) 50%, transparent 100%)',
          }} />
          {/* Glow on hover */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(91,108,255,0.15) 0%, transparent 60%)`,
          }} />
          {project.badge && (
            <div style={{
              position: 'absolute', top: 14, right: 14,
              background: 'linear-gradient(135deg, #040273, #5B6CFF)',
              borderRadius: 8, padding: '4px 12px',
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 600, color: '#fff',
              boxShadow: '0 4px 16px rgba(91,108,255,0.5)',
            }}>
              {project.badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 18, color: '#fff', margin: 0 }}>
            {project.title}
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
            {project.description}
          </p>
          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.tech.map(t => (
              <span key={t} style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                padding: '4px 10px', borderRadius: 6,
                background: 'rgba(91,108,255,0.12)', border: '1px solid rgba(91,108,255,0.25)',
                color: '#8FA4FF',
              }}>
                {t}
              </span>
            ))}
          </div>
          {/* Buttons */}
          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <a href={project.demo === '#' ? undefined : project.demo} data-cursor style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              background: 'linear-gradient(135deg, #040273, #5B6CFF)',
              border: 'none', borderRadius: 10, padding: '10px 16px',
              color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
              textDecoration: 'none', cursor: 'none', transition: 'all 0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(91,108,255,0.45)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1l6 6-6 6M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Live Demo
            </a>
            <a href={project.github === '#' ? undefined : project.github} data-cursor style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '10px 16px', borderRadius: 10,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
              textDecoration: 'none', cursor: 'none', transition: 'all 0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)' }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}