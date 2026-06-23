/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        dark: {
          DEFAULT: '#050510',
          card: '#0a0a1a',
          border: '#1a1a3a',
        }
      },
      fontFamily: {
        sans: ['var(--font-space)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        pulse: 'pulse 2s ease-in-out infinite',
        spin: 'spin 20s linear infinite',
        typing: 'typing 3.5s steps(30) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59,130,246,0.4)' },
          '100%': { boxShadow: '0 0 60px rgba(59,130,246,0.9), 0 0 100px rgba(59,130,246,0.3)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
