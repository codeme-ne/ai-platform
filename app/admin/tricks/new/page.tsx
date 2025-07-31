'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PageContainer } from '@/app/components/layout'
import { TrickForm } from '@/app/components/organisms/TrickForm'
import { AITrick } from '@/app/lib/types'
import { Button } from '@/app/components/atoms'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewTrickPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (trickData: Partial<AITrick>) => {
    setIsSubmitting(true)
    
    try {
      // Hier würde normalerweise die API-Integration stattfinden
      // Für den Moment speichern wir in localStorage
      const existingTricks = JSON.parse(localStorage.getItem('customTricks') || '[]')
      const newTrick: AITrick = {
        id: `custom-${Date.now()}`,
        ...trickData,
        slug: trickData.title?.toLowerCase()
          .replace(/[äöü]/g, (match) => {
            const map: { [key: string]: string } = { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue' }
            return map[match] || match
          })
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '') || '',
        createdAt: new Date(),
        updatedAt: new Date()
      } as AITrick
      
      existingTricks.push(newTrick)
      localStorage.setItem('customTricks', JSON.stringify(existingTricks))
      
      // Erfolgs-Feedback und Weiterleitung
      alert('Trick erfolgreich gespeichert!')
      router.push('/tricks')
    } catch (error) {
      console.error('Fehler beim Speichern:', error)
      alert('Fehler beim Speichern des Tricks')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tricks" 
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </Link>
          
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            Neuen KI Trick erstellen
          </h1>
          <p className="text-lg text-neutral-600">
            Füge einen neuen Trick zur Sammlung hinzu
          </p>
        </div>

        <TrickForm 
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </PageContainer>
  )
}