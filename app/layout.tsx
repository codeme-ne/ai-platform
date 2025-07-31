import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Tricks - Entdecke KI-Tricks für deinen Workflow',
  description: 'Entdecke praktische AI-Tricks und Tipps, um deinen Arbeitsalltag zu optimieren. Filtere nach Kategorien, Schwierigkeit und Impact.',
  keywords: 'AI, KI, Tricks, Tipps, Workflow, Produktivität, Automatisierung',
  openGraph: {
    title: 'AI Tricks - Entdecke KI-Tricks für deinen Workflow',
    description: 'Entdecke praktische AI-Tricks und Tipps, um deinen Arbeitsalltag zu optimieren.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.className}>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  )
}