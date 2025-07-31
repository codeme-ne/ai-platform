import { CheckCircle2 } from 'lucide-react'

interface StepCardProps {
  step: string
  number: number
}

export const StepCard = ({ step, number }: StepCardProps) => {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-200 transition-colors">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-semibold">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-neutral-700 leading-relaxed">{step}</p>
      </div>
      <div className="flex-shrink-0">
        <CheckCircle2 className="h-5 w-5 text-neutral-300" />
      </div>
    </div>
  )
}