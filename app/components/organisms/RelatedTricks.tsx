import { KITrick } from '@/app/lib/types'
import { TrickCard } from '@/app/components/molecules'

interface RelatedTricksProps {
  currentTrickId: string
  category: string
  tricks: KITrick[]
}

export const RelatedTricks = ({ currentTrickId, category, tricks }: RelatedTricksProps) => {
  const relatedTricks = tricks
    .filter(trick => trick.id !== currentTrickId && trick.category === category)
    .slice(0, 3)

  if (relatedTricks.length === 0) {
    return null
  }

  return (
    <section className="bg-neutral-50 -mx-4 px-4 py-8 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">
          Ähnliche Tricks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedTricks.map((trick) => (
            <TrickCard key={trick.id} trick={trick} />
          ))}
        </div>
      </div>
    </section>
  )
}