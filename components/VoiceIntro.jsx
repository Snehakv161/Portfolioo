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

      const getVoice = () => {
        const voices = window.speechSynthesis.getVoices()
        return voices.find(v =>
          v.lang.startsWith('en') && v.name.toLowerCase().includes('female')
        ) || voices.find(v => v.lang.startsWith('en') && v.name.includes('Samantha'))
          || voices.find(v => v.lang.startsWith('en'))
          || voices[0]
      }

      let i = 0
      const sayNext = () => {
        if (i >= lines.length) return
        const utter = new SpeechSynthesisUtterance(lines[i])
        utter.voice = getVoice()
        utter.pitch = 1.1
        utter.rate = 0.92
        utter.volume = 0.85
        utter.onend = () => { i++; sayNext() }
        window.speechSynthesis.speak(utter)
        i++
      }

      window.speechSynthesis.onvoiceschanged = sayNext
      if (window.speechSynthesis.getVoices().length > 0) sayNext()
      sessionStorage.setItem('voice_played', '1')
    }

    const timer = setTimeout(speak, 800)
    return () => clearTimeout(timer)
  }, [])

  return null
}
