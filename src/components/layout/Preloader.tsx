export function Preloader({ done }: { done: boolean }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#030014',
        transition: 'opacity 0.8s ease, visibility 0.8s ease',
        opacity: done ? 0 : 1,
        visibility: done ? 'hidden' : 'visible',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <div style={{ position: 'relative', width: 72, height: 72 }}>
          <div className="animate-ping-slow" style={{
            position: 'absolute', inset: 0,
            borderRadius: '50%', border: '2px solid rgba(91,108,255,0.25)',
          }} />
          <div style={{
            position: 'absolute', inset: 4,
            borderRadius: '50%', border: '2px solid transparent',
            borderTopColor: '#5B6CFF', borderRightColor: '#8FA4FF',
            animation: 'spin-slow 1s linear infinite',
          }} />
          <div style={{
            position: 'absolute', inset: 12,
            borderRadius: '50%', border: '2px solid transparent',
            borderBottomColor: 'rgba(91,108,255,0.5)',
            animation: 'spin-reverse 1.5s linear infinite',
          }} />
          <div style={{
            position: 'absolute', inset: 20,
            borderRadius: '50%', background: 'rgba(91,108,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#8FA4FF', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', fontWeight: 500 }}>FD</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} style={{
              width: 6, height: 6, borderRadius: '50%', background: '#5B6CFF',
              animation: 'fade-in-up 0.6s ease infinite alternate',
              animationDelay: `${i * 0.12}s`,
            }} />
          ))}
        </div>
        <p style={{ color: 'rgba(143,164,255,0.6)', fontSize: 12, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.15em' }}>
          LOADING...
        </p>
      </div>
    </div>
  )
}
