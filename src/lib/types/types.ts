// Core Data Types
export type Category = 
  | 'vertrieb'
  | 'marketing'
  | 'personal'
  | 'finanzen'
  | 'operations'
  | 'it-entwicklung'
  | 'kundenservice'
  | 'produktion'

export interface KITrick {
  id: string
  title: string
  description: string
  category: Category
  tools: string[]
  // DACH-focused tags
  departmentTags?: string[]
  industryTags?: string[]
  steps?: string[]
  examples?: string[]
  slug: string
  createdAt: Date
  updatedAt: Date
  'Warum es funktioniert': string
}

// Filter Types
export interface FilterState {
  categories: Category[]
  departments?: string[]
  industries?: string[]
  search: string
}

export interface FilterOption {
  value: string
  label: string
  count?: number
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  href?: string
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface BadgeProps {
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'new' | 'new-subtle'
  children: React.ReactNode
  className?: string
}

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'search'
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  icon?: React.ReactNode
  disabled?: boolean
}

export interface TrickCardProps {
  trick: KITrick
  variant?: 'default' | 'compact'
  onClick?: () => void
  className?: string
}

export interface FilterGroupProps {
  title: string
  options: FilterOption[]
  selectedValues: string[]
  onChange: (values: string[]) => void
  type?: 'checkbox' | 'radio'
  className?: string
}

export interface FilterSidebarProps {
  categories: Category[]
  selectedFilters: FilterState
  onFilterChange: (filters: FilterState) => void
  isOpen?: boolean
  onClose?: () => void
  className?: string
  departments?: string[]
  industries?: string[]
}

export interface TrickGridProps {
  tricks: KITrick[]
  isLoading?: boolean
  emptyState?: React.ReactNode
  className?: string
}

export interface SearchBarProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  variant?: 'default' | 'glowing'
}

// Utilities and Constants
export const EMPTY_FILTER_STATE: FilterState = {
  categories: [],
  departments: [],
  industries: [],
  search: ''
}

export interface HeaderProps {
  className?: string
}

export interface ResultsHeaderProps {
  count: number
  sortBy?: 'newest' | 'oldest'
  onSortChange?: (sort: string) => void
  className?: string
}

// Category Metadata
export const categoryMetadata: Record<Category, { label: string; icon: string; color: string }> = {
  'vertrieb': { 
    label: 'Vertrieb', 
    icon: '💰', 
    color: 'bg-blue-100 text-blue-700' 
  },
  'marketing': { 
    label: 'Marketing', 
    icon: '📢', 
    color: 'bg-purple-100 text-purple-700' 
  },
  'personal': { 
    label: 'Personal', 
    icon: '👥', 
    color: 'bg-green-100 text-green-700' 
  },
  'finanzen': { 
    label: 'Finanzen', 
    icon: '💶', 
    color: 'bg-yellow-100 text-yellow-700' 
  },
  'operations': { 
    label: 'Operations', 
    icon: '⚙️', 
    color: 'bg-orange-100 text-orange-700' 
  },
  'it-entwicklung': { 
    label: 'IT & Entwicklung', 
    icon: '💻', 
    color: 'bg-indigo-100 text-indigo-700' 
  },
  'kundenservice': { 
    label: 'Kundenservice', 
    icon: '🎧', 
    color: 'bg-pink-100 text-pink-700' 
  },
  'produktion': { 
    label: 'Produktion', 
    icon: '🏭', 
    color: 'bg-gray-100 text-gray-700' 
  }
}