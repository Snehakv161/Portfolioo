'use client'
import { useEffect } from 'react'

export default function VoiceIntro() {
  useEffect(() => {
    if (typeof window === 'undefined' || sessionStorage.getItem('voice_played')) return

    const speak = () => {
      if (!window.speechSynthesis) return

      const lines = [
        "Hi, I'm Sneha.",
        "I am a Full Stack Developer.",
        "I am passionate about creating modern web applications and exploring Artificial Intelligence.",
        "I enjoy designing beautiful user experiences and building innovative solutions.",
        "Welcome to my portfolio."
      ]

      const voices = window.speechSynthesis.getVoices()
      
      const femaleVoice = 
        voices.find(v => v.name === 'Microsoft Zira - English (United States)') ||
        voices.find(v => v.name === 'Samantha') ||
        voices.find(v => v.name.includes('Female')) ||
        voices.find(v => v.name.includes('Zira')) ||
        voices.find(v => v.name.includes('Susan')) ||
        voices.find(v => v.lang.startsWith('en') && v.name.includes('f')) ||
        voices.find(v => v.lang.startsWith('en'))

      let i = 0
      const sayNext = () => {
        if (i >= lines.length) return
        const utter = new SpeechSynthesisUtterance(lines[i])
        utter.voice = femaleVoice
        utter.pitch = 1.4
        utter.rate = 0.9
        utter.volume = 1
        utter.onend = () => { i++; sayNext() }
        window.speechSynthesis.speak(utter)
        i++
      }

      sayNext()
      sessionStorage.setItem('voice_played', '1')
    }

    const timer = setTimeout(speak, 1000)
    return () => clearTimeout(timer)
  }, [])

  return null
}