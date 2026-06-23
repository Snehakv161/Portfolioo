'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setError(data.error || 'Something went wrong.')
        setStatus('idle')
      }
    } catch {
      setError('Failed to send. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <div style={{ padding: '100px 6%', background: 'rgba(10,10,26,0.4)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ color: '#3b82f6', fontSize: '12px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Get In Touch
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Let's{' '}
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Connect
            </span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '15px' }}>
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        {status === 'success' ? (
          <div style={{
            background: 'rgba(10,10,26,0.8)',
            border: '1px solid rgba(59,130,246,0.3)',
            borderRadius: '24px', padding: '60px 40px',
            textAlign: 'center',
            boxShadow: '0 0 60px rgba(59,130,246,0.15)',
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>✅</div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#e2e8f0' }}>
              Message Sent!
            </h3>
            <p style={{ color: '#64748b', fontSize: '15px', marginBottom: '28px' }}>
              Thank you for reaching out. I'll get back to you soon!
            </p>
            <button onClick={() => setStatus('idle')} style={{
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              border: 'none', color: 'white', cursor: 'pointer',
              padding: '12px 28px', borderRadius: '10px',
              fontSize: '15px', fontWeight: 600,
              fontFamily: 'var(--font-space)',
            }}>
              Send Another
            </button>
          </div>
        ) : (
          <div style={{
            background: 'rgba(10,10,26,0.7)',
            border: '1px solid rgba(59,130,246,0.2)',
            borderRadius: '24px', padding: '48px 40px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}>
            {[
              { key: 'name', label: 'Your Name', type: 'text', placeholder: 'Sneha K V' },
              { key: 'email', label: 'Email Address', type: 'email', placeholder: 'sneha@example.com' },
            ].map(field => (
              <div key={field.key} style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', color: '#94a3b8', fontSize: '13px', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={e => setForm(p => ({ ...p, [field.key]: e.target.value }))}
                  style={{
                    width: '100%',
                    background: 'rgba(5,5,16,0.8)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    color: '#e2e8f0',
                    fontSize: '15px',
                    outline: 'none',
                    fontFamily: 'var(--font-space)',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(59,130,246,0.2)'}
                />
              </div>
            ))}

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '13px', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>
                Message
              </label>
              <textarea
                placeholder="Tell me about your project or just say hello..."
                rows={5}
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                style={{
                  width: '100%', resize: 'vertical',
                  background: 'rgba(5,5,16,0.8)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  color: '#e2e8f0',
                  fontSize: '15px',
                  outline: 'none',
                  fontFamily: 'var(--font-space)',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(59,130,246,0.2)'}
              />
            </div>

            {error && (
              <p style={{ color: '#f87171', fontSize: '14px', marginBottom: '16px' }}>{error}</p>
            )}

            <button onClick={handleSubmit} disabled={status === 'loading'} style={{
              width: '100%',
              background: status === 'loading'
                ? 'rgba(59,130,246,0.4)'
                : 'linear-gradient(135deg, #3b82f6, #2563eb)',
              border: 'none', color: 'white', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              padding: '16px', borderRadius: '12px',
              fontSize: '16px', fontWeight: 700,
              letterSpacing: '0.02em',
              boxShadow: status === 'loading' ? 'none' : '0 0 30px rgba(59,130,246,0.35)',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-space)',
            }}>
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>

            <p style={{ textAlign: 'center', color: '#475569', fontSize: '13px', marginTop: '20px' }}>
              Or email me directly at{' '}
              <a href="mailto:snehakv161@gmail.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                snehakv161@gmail.com
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
