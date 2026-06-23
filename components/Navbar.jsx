'use client'
import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (section) => {
    const el = document.getElementById(section.toLowerCase())
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActive(section)
      setMenuOpen(false)
    }
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 50,
      padding: '0 5%',
      height: '70px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(5,5,16,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(59,130,246,0.1)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <div style={{
        fontSize: '22px', fontWeight: 700,
        background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        cursor: 'pointer',
        filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.5))',
        letterSpacing: '-0.02em',
      }} onClick={() => scrollTo('Home')}>
        Sneha
      </div>

      {/* Desktop nav */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}
           className="hidden md:flex">
        {links.map(link => (
          <button key={link} onClick={() => scrollTo(link)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: active === link ? '#3b82f6' : '#94a3b8',
            fontSize: '14px', fontWeight: 500,
            letterSpacing: '0.02em',
            padding: '4px 0',
            position: 'relative',
            transition: 'color 0.3s ease',
            fontFamily: 'var(--font-space)',
          }}>
            {link}
            {active === link && (
              <span style={{
                position: 'absolute', bottom: '-2px', left: 0, right: 0,
                height: '1px', background: '#3b82f6',
                boxShadow: '0 0 6px #3b82f6',
              }} />
            )}
          </button>
        ))}
        <button onClick={() => scrollTo('Contact')} style={{
          background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
          border: 'none', color: 'white', cursor: 'pointer',
          padding: '8px 20px', borderRadius: '8px',
          fontSize: '14px', fontWeight: 600,
          letterSpacing: '0.02em',
          boxShadow: '0 0 20px rgba(59,130,246,0.3)',
          transition: 'all 0.3s ease',
          fontFamily: 'var(--font-space)',
        }}>
          Hire Me
        </button>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: '22px', height: '2px',
              background: '#3b82f6',
              borderRadius: '2px',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 1 ? 'scale(0)' : 'rotate(-45deg) translate(5px, -5px)'
                : 'none',
              transition: 'transform 0.3s ease',
            }} />
          ))}
        </div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '70px', left: 0, right: 0,
          background: 'rgba(5,5,16,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(59,130,246,0.15)',
          padding: '20px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#e2e8f0', fontSize: '16px', fontWeight: 500,
              padding: '12px 16px', textAlign: 'left',
              borderRadius: '8px',
              transition: 'background 0.2s ease',
              fontFamily: 'var(--font-space)',
            }}>
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
