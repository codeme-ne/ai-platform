import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KI-Automationen & Workflows für Berater | KI Tricks Platform',
  description: 'Entdecke 20+ praktische KI-Automationen für Berater und Coaches. Steigere deine Produktivität mit Claude, ChatGPT und No-Code Tools. KI-Workflows die funktionieren.',
  keywords: 'KI-Automationen, KI-Workflows, KI für Berater und Coaches, KI-Claude Code, KI Tricks, Künstliche Intelligenz, ChatGPT, Claude, Produktivität, Automatisierung',
  authors: [{ name: 'Lukas Zangerl' }],
  creator: 'Lukas Zangerl',
  publisher: 'KI Tricks Platform',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'KI-Automationen & Workflows für Berater | KI Tricks Platform',
    description: 'Entdecke 20+ praktische KI-Automationen für Berater und Coaches. Steigere deine Produktivität mit Claude, ChatGPT und No-Code Tools.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://ai-tricks-platform.vercel.app',
    siteName: 'KI Tricks Platform',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI-Automationen & Workflows für Berater',
    description: 'Entdecke praktische KI-Automationen für deinen Arbeitsalltag',
    creator: '@codeme_ne',
  },
  alternates: {
    canonical: 'https://ai-tricks-platform.vercel.app',
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