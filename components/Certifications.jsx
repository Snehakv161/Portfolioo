'use client'
import { useEffect, useRef } from 'react'

const certs = [
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    icon: '🐍',
    color: '#1d4ed8',
    gradient: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta via Coursera',
    icon: '⚛️',
    color: '#0369a1',
    gradient: 'linear-gradient(135deg, #0c4a6e, #0284c7)',
  },
]

export default function Certifications() {
  const cardsRef = useRef(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, stagger: 0.2, duration: 0.8, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } }
        )
      }
    }
    init()
  }, [])

  return (
    <div style={{ padding: '100px 6%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#3b82f6', fontSize: '12px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Credentials
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Certifications
            </span>
          </h2>
        </div>

        <div ref={cardsRef} style={{
          display: 'flex', gap: '28px', justifyContent: 'center', flexWrap: 'wrap',
        }}>
          {certs.map((c, i) => (
            <div key={i} style={{
              background: 'rgba(10,10,26,0.9)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: '20px',
              padding: '40px 36px',
              width: '320px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
              opacity: 0,
              textAlign: 'center',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(59,130,246,0.2)'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)'
            }}>
              {/* Top bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: c.gradient }} />
              
              {/* Icon */}
              <div style={{
                width: '64px', height: '64px',
                background: c.gradient,
                borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px', margin: '0 auto 20px',
                boxShadow: `0 0 30px ${c.color}60`,
              }}>{c.icon}</div>

              {/* Verified badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '11px', color: '#60a5fa', fontWeight: 600,
                marginBottom: '16px',
                letterSpacing: '0.05em',
              }}>
                ✓ Verified
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', color: '#e2e8f0', lineHeight: 1.3 }}>
                {c.title}
              </h3>
              <p style={{ color: '#64748b', fontSize: '14px' }}>{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
