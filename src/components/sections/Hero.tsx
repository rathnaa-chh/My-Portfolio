import { useEffect, useState } from 'react'
import { TYPING_TEXTS } from '@/data/nav'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import profileImage from '@/assets/rr-removebg-preview.png'

export function HeroSection() {
  const typed = useTypingEffect(TYPING_TEXTS)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '120px 24px 80px',
    }}>
      {/* Aurora background blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="animate-blob" style={{
          position: 'absolute', top: '10%', right: '5%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(4,2,115,0.7) 0%, rgba(91,108,255,0.25) 50%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px)`,
          transition: 'transform 0.3s ease',
        }} />
        <div className="animate-blob" style={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(91,108,255,0.35) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '4s',
          transform: `translate(${mouse.x * -0.3}px, ${mouse.y * -0.3}px)`,
          transition: 'transform 0.3s ease',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '40%',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(143,164,255,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
      </div>

      {/* Floating geometric shapes */}
      <div className="animate-float" style={{
        position: 'absolute', top: '15%', left: '8%',
        width: 60, height: 60, borderRadius: 12,
        border: '1px solid rgba(91,108,255,0.35)',
        background: 'rgba(91,108,255,0.06)',
        backdropFilter: 'blur(8px)',
        transform: `translate(${mouse.x * 0.4}px, ${mouse.y * 0.4}px)`,
        transition: 'transform 0.2s ease',
      }} />
      <div className="animate-float-delayed" style={{
        position: 'absolute', top: '25%', right: '12%',
        width: 40, height: 40, borderRadius: '50%',
        border: '1px solid rgba(143,164,255,0.3)',
        background: 'rgba(143,164,255,0.05)',
        transform: `translate(${mouse.x * -0.3}px, ${mouse.y * -0.3}px)`,
        transition: 'transform 0.2s ease',
      }} />
      <div className="animate-float" style={{
        position: 'absolute', bottom: '20%', left: '12%',
        width: 32, height: 32,
        border: '1px solid rgba(91,108,255,0.25)',
        transform: `rotate(45deg) translate(${mouse.x * 0.2}px, ${mouse.y * 0.2}px)`,
        transition: 'transform 0.2s ease',
        animationDelay: '2s',
      }} />
      <div className="animate-float-delayed" style={{
        position: 'absolute', bottom: '30%', right: '8%',
        width: 80, height: 80, borderRadius: 20,
        border: '1px solid rgba(91,108,255,0.2)',
        background: 'linear-gradient(135deg, rgba(4,2,115,0.2), rgba(91,108,255,0.1))',
        backdropFilter: 'blur(8px)',
        transform: `translate(${mouse.x * -0.5}px, ${mouse.y * -0.5}px)`,
        transition: 'transform 0.2s ease',
      }} />

      {/* Main content grid */}
      <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">

          {/* Left: Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="section-tag" style={{ alignSelf: 'flex-start', animation: 'fade-in-up 0.6s ease both' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5B6CFF', display: 'inline-block', animation: 'ping-slow 2s infinite' }} />
              Available for Work
            </div>

            <div style={{ animation: 'fade-in-up 0.7s ease 0.1s both' }}>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 400,
                color: 'rgba(255,255,255,0.45)', marginBottom: 12, letterSpacing: '0.05em', textTransform: 'uppercase',
              }}>
                Hello, I'm
              </p>
              <h1 style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
                fontSize: 'clamp(42px, 6vw, 72px)', lineHeight: 1.05, margin: 0,
                background: 'linear-gradient(135deg, #fff 30%, rgba(143,164,255,0.9) 70%, #5B6CFF 100%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                CHHOURN RATHNA
              </h1>
            </div>

            <div style={{ animation: 'fade-in-up 0.7s ease 0.2s both', height: 48, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700,
                fontSize: 'clamp(20px, 3vw, 28px)',
                color: '#5B6CFF',
              }}>
                {typed}
              </span>
              <span className="animate-blink" style={{ color: '#5B6CFF', fontSize: 28, lineHeight: 1 }}>|</span>
            </div>

            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.55)', maxWidth: 460, margin: 0,
              animation: 'fade-in-up 0.7s ease 0.3s both',
            }}>
              Crafting elegant, high-performance web experiences with Vue.js and React. Passionate about clean code, pixel-perfect UI, and smooth interactions.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fade-in-up 0.7s ease 0.4s both' }}>
              <button onClick={() => scrollTo('projects')} data-cursor className="btn-ripple" style={{
                background: 'linear-gradient(135deg, #040273, #5B6CFF)',
                border: 'none', borderRadius: 14, padding: '14px 28px',
                color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 15, fontWeight: 700,
                cursor: 'none', transition: 'all 0.3s',
                boxShadow: '0 8px 30px rgba(91,108,255,0.35)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 40px rgba(91,108,255,0.55)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(91,108,255,0.35)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="1" width="6" height="6" rx="1.5" fill="white" opacity="0.8" />
                  <rect x="9" y="1" width="6" height="6" rx="1.5" fill="white" />
                  <rect x="1" y="9" width="6" height="6" rx="1.5" fill="white" />
                  <rect x="9" y="9" width="6" height="6" rx="1.5" fill="white" opacity="0.8" />
                </svg>
                View Projects
              </button>
              <button onClick={() => scrollTo('contact')} data-cursor style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 14, padding: '14px 28px',
                color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 15, fontWeight: 600,
                cursor: 'none', transition: 'all 0.3s',
                backdropFilter: 'blur(10px)',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(91,108,255,0.15)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(91,108,255,0.4)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.15)' }}
              >
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 32, animation: 'fade-in-up 0.7s ease 0.5s both', marginTop: 8 }}>
              {[
                { num: '4+', label: 'Projects Built' },
                { num: '1Year+', label: 'Experience with School Projects' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
                    fontSize: 26, color: '#fff', lineHeight: 1,
                  }}>{s.num}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D abstract illustration */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: 480 }}>
            {/* Outer glow ring */}
            <div className="animate-spin-slow" style={{
              position: 'absolute', width: 420, height: 420,
              borderRadius: '50%',
              border: '1px solid rgba(91,108,255,0.15)',
            }} />
            <div className="animate-spin-reverse" style={{
              position: 'absolute', width: 340, height: 340,
              borderRadius: '50%',
              border: '1px dashed rgba(143,164,255,0.2)',
            }} />

            <div
              className="animate-float"
              style={{
                position: "relative",
                width: 380,
                height: 460,
                transform: `translate(${mouse.x * -0.6}px, ${mouse.y * -0.6}px)`,
                transition: "transform .15s ease",
              }}
            >
              {/* Blue Glow */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: 300,
                  height: 300,
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(91,108,255,.5), transparent 70%)",
                  filter: "blur(45px)",
                  zIndex: 0,
                }}
              />

              {/* Rotating Glow Ring */}
              <div
                className="animate-spin-slow"
                style={{
                  position: "absolute",
                  inset: 25,
                  borderRadius: "50%",
                  border: "2px solid rgba(91,108,255,.25)",
                  zIndex: 1,
                }}
              />

              {/* Profile Image */}
              <img
                src={profileImage}
                alt="Profile"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  zIndex: 2,
                  filter:
                    "drop-shadow(0 25px 70px rgba(91,108,255,.45))",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              />
            </div>

            {/* Corner tech badges */}
            {[
              { tech: 'Vue.js', color: '#42B883', top: '5%', left: '0%' },
              { tech: 'React', color: '#61DAFB', top: '5%', right: '0%' },
              { tech: 'TypeScript', color: '#3178C6', bottom: '10%', left: '0%' },
              { tech: 'Tailwind', color: '#06B6D4', bottom: '10%', right: '0%' },
            ].map((b, i) => (
              <div key={i} className="glass animate-float" style={{
                position: 'absolute', ...b,
                padding: '8px 14px', borderRadius: 10, fontSize: 12, fontWeight: 600,
                fontFamily: 'JetBrains Mono, monospace',
                color: b.color, border: `1px solid ${b.color}30`,
                animationDelay: `${i * 1.5}s`,
                boxShadow: `0 4px 20px ${b.color}20`,
              }}>
                {b.tech}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 48, animation: 'fade-in-up 0.7s ease 0.7s both' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>SCROLL</p>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(91,108,255,0.6), transparent)', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
              width: 5, height: 5, borderRadius: '50%', background: '#5B6CFF',
              animation: 'float 1.5s ease-in-out infinite',
            }} />
          </div>
        </div>
      </div>
    </section>
  )
}
