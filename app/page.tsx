import { Header, Footer } from '@/app/components/layout'
import Link from 'next/link'
import { 
  getTotalTricksCount, 
  getTotalCategoriesCount, 
  getAllTools,
  getAverageImplementationTime,
  getTrickCountByCategory,
  getAllCategories
} from '@/app/lib/mock-data'
import { categoryLabels, categoryEmojis } from '@/app/lib/constants'

export default function HomePage() {
  // Calculate dynamic statistics
  const totalTricks = getTotalTricksCount()
  const totalCategories = getTotalCategoriesCount()
  const totalTools = getAllTools().length
  const avgImplementationTime = getAverageImplementationTime()
  const tricksByCategory = getTrickCountByCategory()
  const allCategories = getAllCategories()
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Entdecke* bewährte KI-Tricks
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Eine kuratierte Sammlung praktischer KI-Tricks und Tipps, um deinen Arbeitsalltag zu optimieren.
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
              <div className="text-3xl font-bold text-neutral-900">{totalTricks}</div>
              <div className="text-sm text-neutral-600 mt-1">KI Tricks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900">{totalCategories}</div>
              <div className="text-sm text-neutral-600 mt-1">Kategorien</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900">{totalTools}</div>
              <div className="text-sm text-neutral-600 mt-1">KI Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900">{avgImplementationTime}min</div>
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
            {/* Dynamic Category Cards */}
            {allCategories
              .filter(category => (tricksByCategory[category] || 0) > 0) // Only show categories with tricks
              .sort((a, b) => (tricksByCategory[b] || 0) - (tricksByCategory[a] || 0)) // Sort by trick count
              .slice(0, 8) // Show top 8 categories
              .map(category => (
                <Link 
                  key={category} 
                  href={`/tricks?categories=${category}`}
                  className="trick-card text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{categoryEmojis[category]}</div>
                  <h4 className="font-semibold mb-2">{categoryLabels[category]}</h4>
                  <p className="text-sm text-neutral-600">
                    {tricksByCategory[category] || 0} {(tricksByCategory[category] || 0) === 1 ? 'Trick' : 'Tricks'}
                  </p>
                </Link>
              ))}
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