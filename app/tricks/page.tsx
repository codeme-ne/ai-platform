import { Suspense } from 'react'
import { PageContainer } from '@/app/components/layout'
import TricksClient from './TricksClient'

export default function TricksPage() {
  return (
    <PageContainer>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">
          Entdecke AI Tricks
        </h1>
        <p className="text-lg text-neutral-600">
          Finde praktische AI-Tipps und Tricks für deinen Arbeitsalltag
        </p>
      </div>

      <Suspense fallback={<div>Lade...</div>}>
        <TricksClient />
      </Suspense>
    </PageContainer>
  )
}