import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Category } from '@/app/lib/types'

interface BreadcrumbNavProps {
  category: Category
  categoryLabel: string
  trickTitle: string
}

export const BreadcrumbNav = ({ category, categoryLabel, trickTitle }: BreadcrumbNavProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-neutral-600">
        <li>
          <Link 
            href="/tricks" 
            className="hover:text-primary-600 transition-colors"
          >
            KI Tricks
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4" />
          <Link 
            href={`/tricks?categories=${category}`}
            className="hover:text-primary-600 transition-colors"
          >
            {categoryLabel}
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4" />
          <span className="text-neutral-900 font-medium truncate max-w-[200px]">
            {trickTitle}
          </span>
        </li>
      </ol>
    </nav>
  )
}