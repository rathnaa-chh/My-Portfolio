import { useState } from 'react'

export function SkillCard({ skill, visible, delay }: { skill: { name: string; level: number; color: string; abbr: string }, visible: boolean, delay: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor
      style={{
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
        background: hovered ? 'rgba(91,108,255,0.08)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(91,108,255,0.4)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 16, padding: '20px',
        backdropFilter: 'blur(16px)',
        boxShadow: hovered ? `0 8px 40px rgba(91,108,255,0.2), 0 0 0 1px rgba(91,108,255,0.1)` : 'none',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, background 0.35s, border-color 0.35s, box-shadow 0.35s`,
        cursor: 'none', position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Animated bg shimmer on hover */}
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${skill.color}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14, position: 'relative' }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: `${skill.color}18`,
          border: `1px solid ${skill.color}35`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 11,
          color: skill.color,
          boxShadow: hovered ? `0 0 20px ${skill.color}40` : 'none',
          transition: 'box-shadow 0.3s',
        }}>
          {skill.abbr}
        </div>
        <div>
          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff' }}>{skill.name}</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{skill.level}%</div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: visible ? `${skill.level}%` : '0%',
          background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
          borderRadius: 2,
          transition: `width 1s ease ${delay + 200}ms`,
          boxShadow: hovered ? `0 0 8px ${skill.color}` : 'none',
        }} />
      </div>
    </div>
  )
}
