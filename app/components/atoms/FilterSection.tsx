import React from 'react'

interface FilterSectionProps {
  title: string
  children: React.ReactNode
  count?: number
}

export const FilterSection: React.FC<FilterSectionProps> = ({ 
  title, 
  children, 
  count 
}) => (
  <div className="border-b border-neutral-200 pb-6 last:border-b-0">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-medium text-neutral-900">{title}</h3>
      {count !== undefined && count > 0 && (
        <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
          {count}
        </span>
      )}
    </div>
    <div className="space-y-3">
      {children}
    </div>
  </div>
)