import './globals.css'

export const metadata = {
  title: 'Sneha K V | Full Stack Developer',
  description: 'Fourth-Year Computer Science and Design Student at GEC Kozhikode.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning style={{
        margin: 0, padding: 0,
        background: '#050510',
        color: 'white',
        overflowX: 'hidden',
        fontFamily: 'system-ui, sans-serif',
      }}>
        {children}
      </body>
    </html>
  )
}
