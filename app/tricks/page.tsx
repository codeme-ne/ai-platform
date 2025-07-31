import { Suspense } from 'react'
import { Metadata } from 'next'
import { PageContainer } from '@/app/components/layout'
import TricksClient from './TricksClient'

export const metadata: Metadata = {
  title: 'KI-Workflows für Professionals | Praktische AI-Tricks 2025',
  description: 'Filtere durch kategorisierte KI-Tricks für Produktivität, Content-Creation und Business. Mit Schwierigkeitsgrad und Zeitschätzung. KI-Automationen die wirklich funktionieren.',
  keywords: 'KI-Workflows, KI-Tricks, AI Automation, ChatGPT Tricks, Claude Tipps, KI für Business, Produktivität steigern',
  openGraph: {
    title: 'KI-Workflows für Professionals | KI Tricks Platform',
    description: 'Entdecke praktische KI-Tricks mit detaillierten Anleitungen und Beispielen.',
  },
}

export default function TricksPage() {
  return (
    <PageContainer>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">
          Entdecke KI Tricks
        </h1>
        <p className="text-lg text-neutral-600">
          Finde praktische KI-Tipps und Tricks für deinen Arbeitsalltag
        </p>
      </div>

      <Suspense fallback={<div>Lade...</div>}>
        <TricksClient />
      </Suspense>
    </PageContainer>
  )
}