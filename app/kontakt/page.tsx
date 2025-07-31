'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { PageContainer } from '@/app/components/layout'
import { Button } from '@/app/components/atoms'
import { Send, Mail, Github, CheckCircle } from 'lucide-react'

// Metadata wird bei Client Components nicht direkt unterstützt
// Wir müssen dies in eine separate Server Component auslagern oder anders lösen

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Hier würde normalerweise die Form-Submission erfolgen
    // Für Demo-Zwecke simulieren wir einen erfolgreichen Submit
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form nach 3 Sekunden
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Kontakt</h1>
        <p className="text-lg text-neutral-600 mb-8">
          Hast du Fragen, Feedback oder möchtest einen neuen AI-Trick vorschlagen? Ich freue mich von dir zu hören!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Kontaktformular */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Nachricht senden</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <p className="text-green-800 font-medium">Vielen Dank für deine Nachricht!</p>
                <p className="text-green-600 text-sm mt-1">Ich melde mich so schnell wie möglich bei dir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="deine@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Betreff *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Worum geht es?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Deine Nachricht..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Nachricht senden
                    </>
                  )}
                </Button>

                <p className="text-xs text-neutral-500 mt-4">
                  * Pflichtfelder. Deine Daten werden vertraulich behandelt und nur zur Bearbeitung deiner Anfrage verwendet.
                </p>
              </form>
            )}
          </div>

          {/* Direkte Kontaktinformationen */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Direkter Kontakt</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">E-Mail</h3>
                  <a 
                    href="mailto:zangerl.luk@gmail.com" 
                    className="text-primary-600 hover:underline"
                  >
                    zangerl.luk@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">GitHub</h3>
                  <a 
                    href="https://github.com/codeme-ne" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    @codeme-ne
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-medium text-neutral-900 mb-2">Feedback & Vorschläge</h3>
              <p className="text-sm text-neutral-600">
                Du hast einen tollen AI-Trick entdeckt oder Verbesserungsvorschläge für die Plattform? 
                Ich freue mich über jedes Feedback! Gemeinsam machen wir die KI Tricks Platform zur 
                besten Ressource für praktische KI-Anwendungen.
              </p>
            </div>

            <div className="mt-6 p-6 bg-primary-50 border border-primary-200 rounded-lg">
              <h3 className="font-medium text-primary-900 mb-2">Zusammenarbeit</h3>
              <p className="text-sm text-primary-700">
                Interessiert an einer Zusammenarbeit? Ob Content-Partnerschaften, technische 
                Integrationen oder gemeinsame Projekte - lass uns darüber sprechen, wie wir die 
                KI-Community gemeinsam voranbringen können.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}