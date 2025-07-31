export function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-6 h-[280px] animate-pulse">
      {/* Category Badge Skeleton */}
      <div className="flex justify-end mb-4">
        <div className="h-5 w-20 bg-neutral-200 rounded-md"></div>
      </div>
      
      {/* Title Skeleton */}
      <div className="mb-3">
        <div className="h-6 bg-neutral-200 rounded w-3/4 mb-2"></div>
        <div className="h-6 bg-neutral-200 rounded w-1/2"></div>
      </div>
      
      {/* Description Skeleton */}
      <div className="mb-6 space-y-2">
        <div className="h-4 bg-neutral-200 rounded w-full"></div>
        <div className="h-4 bg-neutral-200 rounded w-full"></div>
        <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
      </div>
      
      {/* Footer Skeleton */}
      <div className="mt-auto pt-4 border-t border-neutral-100">
        <div className="flex items-center justify-between mb-3">
          <div className="h-4 bg-neutral-200 rounded w-16"></div>
          <div className="h-5 w-12 bg-neutral-200 rounded-md"></div>
        </div>
        
        {/* Link Skeleton */}
        <div className="h-4 bg-neutral-200 rounded w-24"></div>
      </div>
    </div>
  )
}