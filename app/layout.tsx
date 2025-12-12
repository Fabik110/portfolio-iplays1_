import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'iplays1_ | Portfolio',
  description: 'Portfolio showcasing projects and applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

