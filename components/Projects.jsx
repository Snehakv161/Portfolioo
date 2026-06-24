'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'AI Code Explainer',
    description: 'An AI-powered tool that explains code in plain English, helps with debugging, and automatically detects programming languages using conversational AI.',
    tech: ['Python', 'Streamlit', 'Ollama', 'LLM'],
    gradient: 'linear-gradient(135deg, #1e3a8a, #1e40af, #2563eb)',
    github: 'https://github.com/Snehakv161/code-explainer',
    demo: null,
    icon: '🤖',
    features: ['AI code explanation', 'Debugging support', 'Language detection', 'Conversational AI'],
  },
  {
    title: 'Skill Enhance',
    description: 'An AI-powered educational platform with OCR, Text-to-Speech, AI Chat, and smart student study tools to enhance the learning experience.',
    tech: ['Python', 'Streamlit', 'Ollama', 'OCR', 'TTS'],
    gradient: 'linear-gradient(135deg, #312e81, #4c1d95, #5b21b6)',
    github: 'https://github.com/Snehakv161/skill-enhance-ai',
    demo: null,
    icon: '📚',
    features: ['OCR Technology', 'Text-to-Speech', 'AI Chat', 'Study tools'],
  },
  {
    title: 'Mellow',
    description: 'A luxury skincare and K-beauty e-commerce platform with a coin reward system, customer discounts, and a modern responsive interface.',
    tech: ['React', 'Next.js', 'Supabase', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #0c4a6e, #075985, #0369a1)',
    github: 'https://github.com/Snehakv161',
    demo: null,
    icon: '✨',
    features: ['Coin rewards', 'Customer discounts', 'Responsive UI', 'Auth & Orders'],
  },
  {
    title: 'VR Hardware Tour',
    description: 'An immersive VR experience that allows users to explore and interact with computer hardware components in a virtual environment.',
    tech: ['Unity', 'C#', 'VR', '3D'],
    gradient: 'linear-gradient(135deg, #064e3b, #065f46, #047857)',
    github: 'https://github.com/Snehakv161',
    demo: null,
    icon: '🥽',
    features: ['Interactive VR', 'Hardware exploration', 'Unity Engine', '3D Experience'],
  },
  {
    title: 'JobFlow',
    description: 'A web application to track job applications and upcoming opportunities with status tracking, search and filter functionality, and dashboard analytics.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #134e4a, #0f766e, #0d9488)',
    github: 'https://github.com/Snehakv161',
    demo: null,
    icon: '💼',
    features: ['Status Tracking', 'Search & Filter', 'Dashboard Analytics', 'Responsive UI'],
},
]

export default function Projects() {
  const cardsRef = useRef(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, stagger: 0.18, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } }
        )
      }
    }
    init()
  }, [])

  return (
    <div style={{ padding: '100px 6%', background: 'rgba(10,10,26,0.4)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#3b82f6', fontSize: '12px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>
            What I've Built
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Featured{' '}
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Projects
            </span>
          </h2>
        </div>

        <div ref={cardsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
        }}>
          {projects.map((proj, i) => (
            <div key={i} style={{
              background: 'rgba(10,10,26,0.9)',
              border: '1px solid rgba(59,130,246,0.15)',
              borderRadius: '20px',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
              position: 'relative',
              opacity: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(59,130,246,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              {/* Banner */}
              <div style={{
                height: '140px',
                background: proj.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '52px',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.2)',
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>{proj.icon}</span>
              </div>

              {/* Content */}
              <div style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: 700, marginBottom: '10px', color: '#e2e8f0' }}>
                  {proj.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7, marginBottom: '18px' }}>
                  {proj.description}
                </p>

                {/* Features */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {proj.features.map((f, j) => (
                    <span key={j} style={{
                      fontSize: '11px', color: '#60a5fa',
                      background: 'rgba(59,130,246,0.08)',
                      padding: '3px 10px', borderRadius: '20px',
                      border: '1px solid rgba(59,130,246,0.15)',
                    }}>{f}</span>
                  ))}
                </div>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {proj.tech.map((t, j) => (
                    <span key={j} style={{
                      fontSize: '12px', color: '#94a3b8',
                      background: 'rgba(255,255,255,0.04)',
                      padding: '4px 10px', borderRadius: '6px',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{
                    flex: 1, textAlign: 'center',
                    padding: '10px', borderRadius: '10px',
                    background: 'rgba(59,130,246,0.1)',
                    border: '1px solid rgba(59,130,246,0.25)',
                    color: '#93c5fd', fontSize: '13px', fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}>
                    GitHub →
                  </a>
                  {proj.demo ? (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" style={{
                      flex: 1, textAlign: 'center',
                      padding: '10px', borderRadius: '10px',
                      background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                      color: 'white', fontSize: '13px', fontWeight: 600,
                      textDecoration: 'none',
                    }}>
                      Live Demo
                    </a>
                  ) : (
                    <span style={{
                      flex: 1, textAlign: 'center',
                      padding: '10px', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#475569', fontSize: '13px',
                    }}>Coming Soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
