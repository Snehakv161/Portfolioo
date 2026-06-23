'use client'
import { useEffect, useRef } from 'react'

const categories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'Python'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Next.js API Routes', 'Node.js'],
  },
  {
    title: 'Tools & Concepts',
    icon: '🛠️',
    skills: ['GitHub', 'VS Code', 'Problem Solving', 'Responsive Design'],
  },
]

export default function Skills() {
  const containerRef = useRef(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(containerRef.current?.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        }
      )
    }
    init()
  }, [])

  return (
    <div style={{ padding: '100px 6%', background: 'rgba(10,10,26,0.4)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            color: '#3b82f6', fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px',
          }}>What I Know</p>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
            letterSpacing: '-0.02em',
          }}>
            Skills &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Technologies</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div ref={containerRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {categories.map((cat, i) => (
            <div key={i} className="skill-card" style={{
              background: 'rgba(10,10,26,0.8)',
              border: '1px solid rgba(59,130,246,0.15)',
              borderRadius: '20px',
              padding: '32px 28px',
              transition: 'all 0.4s ease',
              cursor: 'default',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{cat.icon}</div>
              <h3 style={{
                fontSize: '18px', fontWeight: 700, marginBottom: '20px',
                color: '#e2e8f0',
              }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {cat.skills.map((skill, j) => (
                  <span key={j} style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(59,130,246,0.1)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    color: '#93c5fd',
                    fontSize: '13px',
                    fontWeight: 500,
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(59,130,246,0.25)'
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'
                    e.currentTarget.style.color = '#bfdbfe'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(59,130,246,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)'
                    e.currentTarget.style.color = '#93c5fd'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
