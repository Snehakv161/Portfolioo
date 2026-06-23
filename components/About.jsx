'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { number: '5+', label: 'Projects' },
  { label: 'Hackathon\nParticipant', icon: '🏆' },
  { label: 'NSS\nVolunteer', icon: '🤝' },
  { label: 'IEDC\nMember', icon: '💡' },
]

function SectionLabel({ children }) {
  return (
    <p style={{
      color: '#3b82f6', fontSize: '12px', fontWeight: 700,
      letterSpacing: '0.3em', textTransform: 'uppercase',
      marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px',
    }}>
      <span style={{ width: '24px', height: '1px', background: '#3b82f6' }} />
      {children}
    </p>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(textRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(statsRef.current?.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 80%' } }
      )
    }
    init()
  }, [])

  return (
    <div ref={sectionRef} style={{
      padding: '100px 6%', maxWidth: '1200px', margin: '0 auto',
    }}>
      <div style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Left */}
        <div ref={textRef} style={{ flex: '1', minWidth: '280px', opacity: 0 }}>
          <SectionLabel>About Me</SectionLabel>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
            marginBottom: '28px', lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            Crafting digital<br />
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>experiences</span> with code
          </h2>
          <p style={{
            color: '#94a3b8', fontSize: '16px', lineHeight: 1.85,
            marginBottom: '20px',
          }}>
            I am Sneha K V, a fourth-year Computer Science and Design student at 
            Government Engineering College Kozhikode. I am passionate about Full Stack 
            Development and Artificial Intelligence.
          </p>
          <p style={{
            color: '#64748b', fontSize: '15px', lineHeight: 1.8,
          }}>
            I enjoy creating user-friendly applications and continuously exploring 
            emerging technologies — turning ideas into elegant, functional solutions 
            that make a real difference.
          </p>
        </div>

        {/* Right: Stats */}
        <div ref={statsRef} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '20px', flex: '0 0 auto',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(10,10,26,0.8)',
              border: '1px solid rgba(59,130,246,0.15)',
              borderRadius: '16px',
              padding: '28px 24px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.15)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              {s.number ? (
                <div style={{
                  fontSize: '42px', fontWeight: 900,
                  background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  marginBottom: '8px',
                }}>{s.number}</div>
              ) : (
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{s.icon}</div>
              )}
              <div style={{
                color: '#94a3b8', fontSize: '13px', fontWeight: 500,
                lineHeight: 1.4, whiteSpace: 'pre-line',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
