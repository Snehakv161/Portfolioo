'use client'
import { useEffect, useRef, useState } from 'react'

export default function CinematicOpening({ onComplete }) {
  const [particles, setParticles] = useState([])
  const fillRef = useRef(null)
  const subtitleRef = useRef(null)
  const overlayRef = useRef(null)
  const sectionRef = useRef(null)
  const doneRef = useRef(false)

  useEffect(() => {
    setParticles(Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      width: Math.random() * 4 + 1,
      height: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 8,
      blue: Math.random() > 0.5,
    })))
  }, [])

  useEffect(() => {
    if (!fillRef.current || !subtitleRef.current || !overlayRef.current) return

    let scrollTriggerInstance = null

    const init = async () => {
      try {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)

        if (!fillRef.current || !subtitleRef.current) return

        gsap.fromTo(subtitleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: 'power2.out' }
        )

        scrollTriggerInstance = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=600',
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            if (fillRef.current) {
              const pct = Math.round(self.progress * 100)
              fillRef.current.style.clipPath = `inset(${100 - pct}% 0 0 0)`
            }
          },
          onLeave: () => {
            if (doneRef.current) return
            doneRef.current = true
            if (overlayRef.current) {
              overlayRef.current.style.transition = 'opacity 0.8s ease'
              overlayRef.current.style.opacity = '0'
              setTimeout(() => {
                onComplete?.()
              }, 800)
            }
          },
        })
      } catch (e) {
        console.warn('GSAP init error:', e)
        onComplete?.()
      }
    }

    const timer = setTimeout(init, 100)

    return () => {
      clearTimeout(timer)
      if (scrollTriggerInstance) scrollTriggerInstance.kill()
    }
  }, [onComplete])

  return (
    <div ref={sectionRef} style={{ height: '100vh', position: 'relative', zIndex: 200 }}>
      <div ref={overlayRef} style={{
        position: 'fixed', inset: 0,
        background: 'linear-gradient(135deg, #020d1a 0%, #050510 50%, #010a16 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 200, overflow: 'hidden',
      }}>
        {/* Particles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {particles.map(p => (
            <div key={p.id} style={{
              position: 'absolute',
              left: p.left + '%',
              bottom: '-10px',
              width: p.width + 'px',
              height: p.height + 'px',
              borderRadius: '50%',
              opacity: p.opacity,
              background: p.blue ? '#3b82f6' : '#818cf8',
              animationName: 'particleFloat',
              animationDuration: p.duration + 's',
              animationDelay: p.delay + 's',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }} />
          ))}
        </div>

        {/* Glow */}
        <div style={{
          position: 'absolute', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          borderRadius: '50%', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        }} />

        {/* SNEHA text */}
        <div style={{ position: 'relative', userSelect: 'none' }}>
          <h1 style={{
            fontSize: 'clamp(64px, 16vw, 200px)',
            fontWeight: 900, color: '#1e293b',
            letterSpacing: '-0.03em', lineHeight: 1, margin: 0,
          }}>SNEHA</h1>

          <h1 ref={fillRef} style={{
            fontSize: 'clamp(64px, 16vw, 200px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #3b82f6, #60a5fa, #818cf8)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            letterSpacing: '-0.03em', lineHeight: 1, margin: 0,
            position: 'absolute', top: 0, left: 0,
            clipPath: 'inset(100% 0 0 0)',
            filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.6))',
          }}>SNEHA</h1>
        </div>

        <div style={{
          width: '50px', height: '1px',
          background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
          marginTop: '28px',
        }} />

        <p ref={subtitleRef} style={{
          marginTop: '20px', color: '#475569',
          fontSize: '11px', letterSpacing: '0.4em',
          textTransform: 'uppercase', opacity: 0,
        }}>Scroll to enter</p>

        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '3px',
          animation: 'scrollBounce 1.5s ease-in-out infinite' }}>
          {[0, 1].map(i => (
            <svg key={i} width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 1L7 7L13 1" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" opacity={i === 0 ? 0.4 : 1} />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}
