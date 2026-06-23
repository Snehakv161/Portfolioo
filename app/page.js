'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { ssr: false })
const CinematicOpening = dynamic(() => import('@/components/CinematicOpening'), { ssr: false })
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Certifications = dynamic(() => import('@/components/Certifications'), { ssr: false })
const Leadership = dynamic(() => import('@/components/Leadership'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false })
const VoiceIntro = dynamic(() => import('@/components/VoiceIntro'), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [openingDone, setOpeningDone] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <CinematicOpening onComplete={() => setOpeningDone(true)} />

      <div style={{
        opacity: openingDone ? 1 : 0,
        transition: 'opacity 0.8s ease',
        pointerEvents: openingDone ? 'all' : 'none',
        position: 'relative',
        zIndex: 1,
      }}>
        <SmoothScroll>
          {openingDone && <VoiceIntro />}
          <Navbar />
          <main>
            <section id="home"><Hero /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="experience"><Experience /></section>
            <section id="projects"><Projects /></section>
            <section id="certifications"><Certifications /></section>
            <section id="leadership"><Leadership /></section>
            <section id="contact"><Contact /></section>
          </main>
          <footer style={{
            padding: '32px', textAlign: 'center',
            color: '#475569', fontSize: '14px',
            borderTop: '1px solid rgba(59,130,246,0.1)',
          }}>
            © 2026 Sneha K V
          </footer>
        </SmoothScroll>
      </div>
    </>
  )
}
