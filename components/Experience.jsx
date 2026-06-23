'use client'
import { useEffect, useRef } from 'react'

export default function Experience() {
  const cardRef = useRef(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 80%' } }
      )
    }
    init()
  }, [])

  const highlights = [
    'Worked with HTML, CSS and JavaScript to build web interfaces.',
    'Learned website design fundamentals and best practices.',
    'Explored AI-powered resume building and ATS systems.',
  ]

  return (
    <div style={{ padding: '100px 6%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#3b82f6', fontSize: '12px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Work History
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Experience
            </span>
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div ref={cardRef} style={{
            background: 'rgba(10,10,26,0.8)',
            border: '1px solid rgba(59,130,246,0.2)',
            borderRadius: '20px', padding: '40px',
            position: 'relative', overflow: 'hidden',
            opacity: 0,
          }}>
            {/* Glow */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '6px', color: '#e2e8f0' }}>
                  Tomercon Developers LLP
                </h3>
                <p style={{ color: '#3b82f6', fontSize: '15px', fontWeight: 600 }}>
                  Short-Term Online Internship
                </p>
              </div>
              <span style={{
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.25)',
                color: '#93c5fd', padding: '6px 16px', borderRadius: '20px',
                fontSize: '13px', fontWeight: 500,
              }}>
                Internship
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#3b82f6', flexShrink: 0, marginTop: '7px',
                    boxShadow: '0 0 8px rgba(59,130,246,0.8)',
                  }} />
                  <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.7 }}>{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
