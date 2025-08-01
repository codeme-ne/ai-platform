import { Clock, Zap, Calendar, Wrench } from 'lucide-react'
import { KITrick } from '@/app/lib/types'

interface TrickMetaProps {
  trick: KITrick
}

const impactLabels = {
  low: 'Niedrig',
  medium: 'Mittel',
  high: 'Hoch'
}

const impactColors = {
  low: 'text-neutral-600',
  medium: 'text-amber-600',
  high: 'text-green-600'
}

export const TrickMeta = ({ trick }: TrickMetaProps) => {
  const formattedDate = new Date(trick.updatedAt).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex items-center gap-2 text-sm">
        <Clock className="h-4 w-4 text-neutral-400" />
        <span className="text-neutral-600">Zeit:</span>
        <span className="text-neutral-900 font-medium">{trick.timeToImplement}</span>
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <Zap className={`h-4 w-4 ${impactColors[trick.impact]}`} />
        <span className="text-neutral-600">Impact:</span>
        <span className={`font-medium ${impactColors[trick.impact]}`}>
          {impactLabels[trick.impact]}
        </span>
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <Wrench className="h-4 w-4 text-neutral-400" />
        <span className="text-neutral-600">Tools:</span>
        <span className="text-neutral-900 font-medium">
          {trick.tools.join(', ')}
        </span>
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <Calendar className="h-4 w-4 text-neutral-400" />
        <span className="text-neutral-600">Aktualisiert:</span>
        <span className="text-neutral-900 font-medium">{formattedDate}</span>
      </div>
    </div>
  )
}