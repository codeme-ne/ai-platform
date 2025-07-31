import { AITrick } from '@/app/lib/types'
import { Badge } from '@/app/components/atoms'
import { BackButton } from '@/app/components/atoms'
import { BreadcrumbNav, TrickMeta } from '@/app/components/molecules'

interface TrickHeaderProps {
  trick: AITrick
}

const categoryLabels = {
  'productivity': 'Produktivität',
  'content-creation': 'Content-Erstellung',
  'programming': 'Programmierung',
  'design': 'Design',
  'data-analysis': 'Datenanalyse',
  'learning': 'Lernen',
  'business': 'Business',
  'marketing': 'Marketing'
}

const difficultyLabels = {
  'beginner': 'Anfänger',
  'intermediate': 'Fortgeschritten',
  'advanced': 'Experte'
}

const difficultyVariants = {
  'beginner': 'success' as const,
  'intermediate': 'warning' as const,
  'advanced': 'danger' as const
}

export const TrickHeader = ({ trick }: TrickHeaderProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <BreadcrumbNav 
          category={trick.category}
          categoryLabel={categoryLabels[trick.category]}
          trickTitle={trick.title}
        />
        <BackButton />
      </div>
      
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="primary">
            {categoryLabels[trick.category]}
          </Badge>
          <Badge variant={difficultyVariants[trick.difficulty]}>
            {difficultyLabels[trick.difficulty]}
          </Badge>
        </div>
        
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">
          {trick.title}
        </h1>
        
        <p className="text-lg text-neutral-600 leading-relaxed mb-6">
          {trick.description}
        </p>
        
        <TrickMeta trick={trick} />
      </div>
    </div>
  )
}