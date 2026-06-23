'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const roles = ['Full Stack Developer', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'AI Enthusiast']

const socials = [
  { label: 'GitHub', href: 'https://github.com/Snehakv161', icon: (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
  )},
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sneha-kv-a2b491303', icon: (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/></svg>
  )},
  { label: 'Email', href: 'mailto:snehakv161@gmail.com', icon: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
  )},
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const photoRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const target = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  // Parallax on mouse move
  useEffect(() => {
    const photo = photoRef.current
    if (!photo) return

    const onMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 15
      const y = (clientY / innerHeight - 0.5) * 15
      photo.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 6% 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '15%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{
        width: '100%', maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '60px',
        flexWrap: 'wrap',
      }}>
        {/* Left: Text */}
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '580px' }}>
          <p style={{
            color: '#3b82f6', fontSize: '14px', fontWeight: 600,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ width: '30px', height: '1px', background: '#3b82f6', display: 'inline-block' }} />
            Hello, I'm
          </p>

          <h1 style={{
            fontSize: 'clamp(42px, 6vw, 76px)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: '16px',
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #ffffff 40%, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Sneha K V
          </h1>

          <p style={{
            color: '#64748b', fontSize: '15px',
            marginBottom: '8px', letterSpacing: '0.01em',
          }}>
            Fourth-Year Computer Science and Design Student
          </p>
          <p style={{
            color: '#475569', fontSize: '14px', marginBottom: '28px',
          }}>
            Government Engineering College Kozhikode
          </p>

          {/* Typewriter */}
          <div style={{
            fontSize: 'clamp(18px, 3vw, 26px)',
            fontWeight: 700,
            marginBottom: '36px',
            display: 'flex', alignItems: 'center', gap: '0px',
            color: '#3b82f6',
            letterSpacing: '-0.01em',
          }}>
            {displayed}
            <span style={{
              width: '2px', height: '1.2em',
              background: '#3b82f6',
              display: 'inline-block', marginLeft: '2px',
              animation: 'pulse 1s ease-in-out infinite',
            }} />
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                border: 'none', color: 'white', cursor: 'pointer',
                padding: '14px 32px', borderRadius: '10px',
                fontSize: '15px', fontWeight: 600,
                boxShadow: '0 0 30px rgba(59,130,246,0.35)',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-space)',
              }}>
              View Projects
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn"
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(59,130,246,0.5)',
                color: '#60a5fa', cursor: 'pointer',
                padding: '14px 32px', borderRadius: '10px',
                fontSize: '15px', fontWeight: 600,
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-space)',
              }}>
              Contact Me
            </button>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: '44px', height: '44px',
                  borderRadius: '10px',
                  border: '1px solid rgba(59,130,246,0.25)',
                  background: 'rgba(59,130,246,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#60a5fa',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}>
                {s.icon}
              </a>
            ))}
            <span style={{ color: '#475569', fontSize: '13px', marginLeft: '4px' }}>
              Kerala, India 📍
            </span>
          </div>
        </div>

        {/* Right: Photo */}
        <div style={{ display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
          <div ref={photoRef} style={{ transition: 'transform 0.1s ease' }}>
            <div style={{ position: 'relative' }} className="animate-float">
              {/* Rotating ring */}
              <div style={{
                position: 'absolute', inset: '-20px',
                border: '1px dashed rgba(59,130,246,0.3)',
                borderRadius: '50%',
                animation: 'ringRotate 20s linear infinite',
              }} />
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: '-4px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6, #818cf8, #3b82f6)',
                padding: '3px',
                animation: 'glow 2.5s ease-in-out infinite alternate',
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#050510' }} />
              </div>
              {/* Photo */}
              <div style={{
                width: 'clamp(260px, 28vw, 360px)',
                height: 'clamp(260px, 28vw, 360px)',
                borderRadius: '50%', overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#050510',

              }}>
                <img
                  src="/sneha.jpg"
                  alt="Sneha K V"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 30%',filter: 'blur(0px)',
    WebkitMaskImage: 'radial-gradient(circle, black 20%, transparent 100%)',
    maskImage: 'radial-gradient(circle, black 20%, transparent 100%)', }}
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <span style={{ color: '#475569', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{
          width: '1px', height: '50px',
          background: 'linear-gradient(to bottom, #3b82f6, transparent)',
          animation: 'scrollBounce 1.5s ease-in-out infinite',
        }} />
      </div>
    </div>
  )
}
