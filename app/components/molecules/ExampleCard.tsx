import { Lightbulb } from 'lucide-react'

interface ExampleCardProps {
  example: string
}

export const ExampleCard = ({ example }: ExampleCardProps) => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
      <div className="flex gap-3">
        <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-neutral-700 leading-relaxed">{example}</p>
      </div>
    </div>
  )
}