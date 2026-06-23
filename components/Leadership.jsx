'use client'
import { useEffect, useRef } from 'react'

const activities = [
  { icon: '🤝', title: 'NSS Volunteer', description: 'Actively contributed to community service and social development initiatives as an NSS volunteer.', color: '#1d4ed8' },
  { icon: '💡', title: 'IEDC Member', description: 'Member of the Innovation and Entrepreneurship Development Cell, exploring startup ideas and innovation.', color: '#7c3aed' },
  { icon: '🏆', title: 'Hackathon Participant', description: 'Participated in competitive hackathons, building solutions under pressure and learning collaborative development.', color: '#0369a1' },
]

export default function Leadership() {
  const cardsRef = useRef(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, stagger: 0.2, duration: 0.9, ease: 'power3.out',
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
            Beyond Coding
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Leadership &{' '}
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Activities
            </span>
          </h2>
        </div>

        <div ref={cardsRef} style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px',
        }}>
          {activities.map((a, i) => (
            <div key={i} style={{
              background: 'rgba(10,10,26,0.8)',
              border: '1px solid rgba(59,130,246,0.15)',
              borderRadius: '20px',
              padding: '32px',
              transition: 'all 0.4s ease',
              opacity: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
              e.currentTarget.style.boxShadow = '0 16px 50px rgba(59,130,246,0.12)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{a.icon}</div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, marginBottom: '12px', color: '#e2e8f0' }}>{a.title}</h3>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7 }}>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
