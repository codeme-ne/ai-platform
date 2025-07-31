'use client'

import { useEffect } from 'react'
import { X, Filter, RotateCcw } from 'lucide-react'
import { FilterSidebarProps, Category, Difficulty, Impact, EMPTY_FILTER_STATE } from '@/app/lib/types'
import { categoryMetadata, difficultyMetadata, impactMetadata } from '@/app/lib/types'
import { createFilterHandler, countActiveFilters } from '@/app/lib/utils'
import { Button, Checkbox, FilterSection } from '@/app/components/atoms'

export function FilterSidebar({
  categories,
  selectedFilters,
  onFilterChange,
  isOpen = false,
  onClose,
  className = ''
}: FilterSidebarProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when sidebar is open on mobile
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Create filter handlers using the utility function
  const handleCategoryChange = createFilterHandler<Category>(
    selectedFilters, 
    'categories', 
    onFilterChange
  )
  
  const handleDifficultyChange = createFilterHandler<Difficulty>(
    selectedFilters, 
    'difficulty', 
    onFilterChange
  )
  
  const handleImpactChange = createFilterHandler<Impact>(
    selectedFilters, 
    'impact', 
    onFilterChange
  )
  

  // Reset all filters
  const handleReset = () => {
    onFilterChange(EMPTY_FILTER_STATE)
  }

  // Count active filters
  const activeFilterCount = countActiveFilters(selectedFilters)

  // FilterSection is now imported as a separate component

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-neutral-600" />
          <h2 className="text-lg font-semibold text-neutral-900">Filter</h2>
          {activeFilterCount > 0 && (
            <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        {/* Close button - only visible on mobile */}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-neutral-100 rounded-md transition-colors"
            aria-label="Filter schließen"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        )}
      </div>

      {/* Filter Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Categories */}
        <FilterSection 
          title="Kategorien" 
          count={selectedFilters.categories.length}
        >
          {categories.map((category) => (
            <Checkbox
              key={category}
              label={categoryMetadata[category].label}
              checked={selectedFilters.categories.includes(category)}
              onChange={(checked) => handleCategoryChange(category, checked)}
            />
          ))}
        </FilterSection>

        {/* Difficulty */}
        <FilterSection 
          title="Schwierigkeit" 
          count={selectedFilters.difficulty.length}
        >
          {Object.entries(difficultyMetadata).map(([difficulty, meta]) => (
            <Checkbox
              key={difficulty}
              label={meta.label}
              checked={selectedFilters.difficulty.includes(difficulty as Difficulty)}
              onChange={(checked) => handleDifficultyChange(difficulty as Difficulty, checked)}
            />
          ))}
        </FilterSection>

        {/* Impact */}
        <FilterSection 
          title="Impact" 
          count={selectedFilters.impact.length}
        >
          {Object.entries(impactMetadata).map(([impact, meta]) => (
            <Checkbox
              key={impact}
              label={meta.label}
              checked={selectedFilters.impact.includes(impact as Impact)}
              onChange={(checked) => handleImpactChange(impact as Impact, checked)}
            />
          ))}
        </FilterSection>

      </div>

      {/* Footer */}
      {activeFilterCount > 0 && (
        <div className="border-t border-neutral-200 p-6">
          <Button
            variant="secondary"
            size="md"
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Filter zurücksetzen
          </Button>
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile: Overlay */}
      {isOpen && (
        <>
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <div className="lg:hidden fixed inset-y-0 left-0 w-full max-w-sm bg-white z-50 shadow-xl">
            {sidebarContent}
          </div>
        </>
      )}

      {/* Desktop: Sticky Sidebar */}
      <div className={`hidden lg:block lg:sticky lg:top-6 lg:h-fit w-64 flex-shrink-0 ${className}`}>
        <div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
          {sidebarContent}
        </div>
      </div>
    </>
  )
}