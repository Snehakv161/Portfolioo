'use client'
import { useEffect, useRef } from 'react'

export default function SmoothScroll({ children }) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    let lenis
    let rafId

    const init = async () => {
      try {
        const LenisModule = await import('lenis')
        const Lenis = LenisModule.default || LenisModule
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)

        lenis = new Lenis({
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        lenis.on('scroll', ScrollTrigger.update)

        const raf = (time) => {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)

      } catch (e) {
        console.warn('SmoothScroll init error:', e)
      }
    }

    init()

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
