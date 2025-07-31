'use client'

import React from 'react'
import { TrickCard, SkeletonCard } from '@/app/components/molecules'
import { AITrick } from '@/app/lib/types'
import { Search, Frown } from 'lucide-react'

interface TrickGridProps {
  tricks: AITrick[]
  isLoading?: boolean
  emptyStateMessage?: string
}

export function TrickGrid({ 
  tricks, 
  isLoading = false, 
  emptyStateMessage = "Keine Tricks gefunden" 
}: TrickGridProps) {
  
  // Loading State
  if (isLoading) {
    return (
      <div className="space-y-6">
        {/* Results Counter Skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-6 bg-neutral-200 rounded w-32 animate-pulse"></div>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    )
  }
  
  // Empty State
  if (tricks.length === 0) {
    return (
      <div className="space-y-6">
        {/* Results Counter */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">
            0 Tricks gefunden
          </h2>
        </div>
        
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="bg-neutral-100 rounded-full p-4 mb-4">
            <Search className="w-8 h-8 text-neutral-400" />
          </div>
          <h3 className="text-lg font-medium text-neutral-900 mb-2">
            {emptyStateMessage}
          </h3>
          <p className="text-neutral-500 text-sm max-w-md">
            Versuche deine Suchkriterien zu ändern oder andere Filter zu verwenden, 
            um passende AI-Tricks zu finden.
          </p>
        </div>
      </div>
    )
  }
  
  // Results with Tricks
  return (
    <div className="space-y-6">
      {/* Results Counter */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-neutral-900">
          {tricks.length} {tricks.length === 1 ? 'Trick' : 'Tricks'} gefunden
        </h2>
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tricks.map((trick, index) => (
          <div
            key={trick.id}
            className="opacity-0 translate-y-4 animate-fadeInUp"
            style={{
              animationDelay: `${index * 50}ms`,
              animationDuration: '400ms',
              animationFillMode: 'forwards'
            }}
          >
            <TrickCard trick={trick} />
          </div>
        ))}
      </div>
    </div>
  )
}