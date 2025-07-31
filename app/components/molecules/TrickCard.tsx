'use client'

import React from 'react'
import Link from 'next/link'
import { Badge } from '@/app/components/atoms'
import { AITrick, TrickCardProps, categoryMetadata, impactMetadata } from '@/app/lib/types'
import { ArrowRight, Clock } from 'lucide-react'

export const TrickCard = React.memo(function TrickCard({ trick, onClick }: TrickCardProps) {
  const categoryMeta = categoryMetadata[trick.category]
  const impactMeta = impactMetadata[trick.impact]
  
  const cardContent = (
    <div className="bg-white rounded-lg border border-neutral-200 p-6 h-[280px] flex flex-col transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
      {/* Category Badge - Top Right */}
      <div className="flex justify-end mb-4">
        <Badge className={categoryMeta.color}>
          {categoryMeta.icon} {categoryMeta.label}
        </Badge>
      </div>
      
      {/* Title - Max 2 lines */}
      <h3 className="text-lg font-semibold text-neutral-900 mb-3 leading-tight line-clamp-2">
        {trick.title}
      </h3>
      
      {/* Description - Max 3 lines */}
      <p className="text-neutral-600 text-sm mb-6 leading-relaxed flex-1 line-clamp-3">
        {trick.description}
      </p>
      
      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-neutral-100">
        {/* Time & Impact */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-neutral-500 text-xs">
            <Clock className="w-3 h-3 mr-1" />
            {trick.timeToImplement}
          </div>
          <Badge className={impactMeta.color}>
            {impactMeta.label}
          </Badge>
        </div>
        
        {/* Link */}
        <div className="flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700">
          Trick ansehen
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
  
  if (onClick) {
    return (
      <div onClick={onClick}>
        {cardContent}
      </div>
    )
  }
  
  return (
    <Link href={`/trick/${trick.slug}`}>
      {cardContent}
    </Link>
  )
})