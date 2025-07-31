import { BadgeProps } from '@/app/lib/types'
import { cn } from '@/app/lib/utils'

export function Badge({
  variant = 'neutral',
  children,
  className = '',
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium'
  
  const variantClasses = {
    neutral: 'bg-neutral-100 text-neutral-700',
    primary: 'bg-primary-100 text-primary-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-amber-100 text-amber-700',
    danger: 'bg-red-100 text-red-700',
  }
  
  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  )
}