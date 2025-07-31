import { Header, Footer } from '@/app/components/layout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Entdecke* bewährte AI-Tricks
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Eine kuratierte Sammlung praktischer AI-Tricks und Tipps, um deinen Arbeitsalltag zu optimieren.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/tricks" className="btn-primary">
                Tricks entdecken
              </Link>
              <Link href="#categories" className="btn-text">
                Nach Kategorien
              </Link>
            </div>
            <p className="text-xs text-neutral-500 mt-6">
              *Alle Tricks wurden von Experten getestet und verifiziert
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-neutral-900">127</div>
              <div className="text-sm text-neutral-600 mt-1">AI Tricks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900">8</div>
              <div className="text-sm text-neutral-600 mt-1">Kategorien</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900">15+</div>
              <div className="text-sm text-neutral-600 mt-1">AI Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900">5min</div>
              <div className="text-sm text-neutral-600 mt-1">Durchschnittliche Umsetzungszeit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section id="categories" className="py-16 bg-white">
        <div className="container">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Tricks nach Kategorien
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Cards - These will be dynamic later */}
            <div className="trick-card text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-semibold mb-2">Produktivität</h4>
              <p className="text-sm text-neutral-600">23 Tricks</p>
            </div>
            <div className="trick-card text-center">
              <div className="text-4xl mb-3">✍️</div>
              <h4 className="font-semibold mb-2">Content-Erstellung</h4>
              <p className="text-sm text-neutral-600">18 Tricks</p>
            </div>
            <div className="trick-card text-center">
              <div className="text-4xl mb-3">💻</div>
              <h4 className="font-semibold mb-2">Programmierung</h4>
              <p className="text-sm text-neutral-600">21 Tricks</p>
            </div>
            <div className="trick-card text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-sm text-neutral-600">15 Tricks</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/tricks" className="btn-secondary">
              Alle Kategorien ansehen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}