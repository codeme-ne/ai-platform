import { Metadata } from 'next'
import { Header, Footer, PageContainer } from '@/app/components/layout'

export const metadata: Metadata = {
  title: 'KI für Berater und Coaches | Über AI Tricks Platform',
  description: 'Erfahre wie KI-Automationen und Workflows Beratern und Coaches helfen, produktiver zu arbeiten. Praktische Anleitungen für ChatGPT, Claude und mehr.',
  keywords: 'KI für Berater, KI für Coaches, AI Beratung, Automatisierung für Berater, KI-Tools für Coaching',
  openGraph: {
    title: 'KI für Berater und Coaches | AI Tricks Platform',
    description: 'Praktische KI-Lösungen speziell für Berater und Coaches.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <PageContainer>
        <div className="max-w-3xl mx-auto py-16">
          <h1 className="text-3xl font-bold text-neutral-900 mb-8">
            Über AI Tricks
          </h1>
          
          <div className="prose prose-lg text-neutral-600">
            <p className="text-xl mb-6">
              AI Tricks ist eine kuratierte Sammlung praktischer AI-Tipps und Tricks, 
              die dir helfen, deinen Arbeitsalltag zu optimieren.
            </p>
            
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Unsere Mission
            </h2>
            <p>
              Wir glauben daran, dass AI-Tools für jeden zugänglich und nützlich sein sollten. 
              Deshalb sammeln, testen und teilen wir die besten AI-Tricks, die wirklich funktionieren.
            </p>
            
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Was dich erwartet
            </h2>
            <ul>
              <li>Geprüfte und getestete AI-Tricks</li>
              <li>Schritt-für-Schritt Anleitungen</li>
              <li>Kategorisierung nach Anwendungsbereichen</li>
              <li>Schwierigkeitsgrade für jeden Level</li>
              <li>Impact-Bewertungen für schnelle Orientierung</li>
            </ul>
          </div>
        </div>
      </PageContainer>

      <Footer />
    </div>
  )
}