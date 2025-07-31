'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from './Button'

export const BackButton = () => {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      onClick={() => router.back()}
      className="gap-2"
      aria-label="Zurück zur vorherigen Seite"
    >
      <ArrowLeft className="h-4 w-4" />
      Zurück
    </Button>
  )
}