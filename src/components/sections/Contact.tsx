import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollProgress'

export function ContactSection() {
  const { ref, visible } = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const socials = [
    { label: 'GitHub', href: 'https://github.com/rathnaa-chh', icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    )},
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rathna-chhourn-58666a3bb/', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )},
    { label: 'Email', href: 'mailto:rathanachhourn@gmail.com', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )},
  ]

  return (
    <section id="contact" style={{ padding: '120px 24px', background: 'rgba(255,255,255,0.01)', position: 'relative' }}>
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 400, height: 400, pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(4,2,115,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag" style={{ marginBottom: 16 }}>// contact.send()</div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', margin: 0,
            background: 'linear-gradient(135deg, #fff 40%, #8FA4FF 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Get In Touch</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>
            Open to opportunities — let's build something great together.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }} className="contact-grid">
          {/* Left: Info */}
          <div className={`reveal-left ${visible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="glass" style={{ borderRadius: 20, padding: '32px 28px' }}>
              <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', margin: '0 0 8px' }}>
                Let's talk
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', margin: '0 0 28px' }}>
                Whether you need a frontend developer, want to collaborate, or just say hi — my inbox is always open.
              </p>

              {[
                { icon: '📍', label: 'Location', value: 'Phnom Penh, Cambodia' },
                { icon: '✉️', label: 'Email', value: 'rathanachhourn@gmail.com' },
                { icon: '⏰', label: 'Availability', value: 'Mon–Fri, 8am–6pm PHT' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 18 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(91,108,255,0.1)', border: '1px solid rgba(91,108,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.label}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#fff', marginTop: 3 }}>{c.value}</div>
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} data-cursor aria-label={s.label} style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
                    transition: 'all 0.3s', cursor: 'none',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(91,108,255,0.15)'; (e.currentTarget as HTMLAnchorElement).style.color = '#8FA4FF'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(91,108,255,0.4)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`reveal-right ${visible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="glass" style={{ borderRadius: 20, padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', display: 'block', marginBottom: 8, textTransform: 'uppercase' }}>Name</label>
                  <input className="form-input" type="text" placeholder="John Smith" required
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', display: 'block', marginBottom: 8, textTransform: 'uppercase' }}>Email</label>
                  <input className="form-input" type="email" placeholder="john@company.com" required
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
              </div>
              <div>
                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', display: 'block', marginBottom: 8, textTransform: 'uppercase' }}>Subject</label>
                <input className="form-input" type="text" placeholder="Frontend Developer Position" required
                  value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
              </div>
              <div>
                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', display: 'block', marginBottom: 8, textTransform: 'uppercase' }}>Message</label>
                <textarea className="form-input" rows={5} placeholder="Tell me about the opportunity or project..." required
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
              </div>
              <button type="submit" data-cursor className="btn-ripple" style={{
                background: sent ? 'linear-gradient(135deg, #22C55E, #16A34A)' : 'linear-gradient(135deg, #040273, #5B6CFF)',
                border: 'none', borderRadius: 14, padding: '14px 28px',
                color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 15, fontWeight: 700,
                cursor: 'none', transition: 'all 0.4s',
                boxShadow: sent ? '0 8px 30px rgba(34,197,94,0.35)' : '0 8px 30px rgba(91,108,255,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}
                onMouseEnter={e => { if (!sent) (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)' }}
              >
                {sent ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 2L1 7l5 3 3 5 5-13z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
