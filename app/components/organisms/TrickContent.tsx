import { KITrick } from '@/app/lib/types'
import { StepCard, ExampleCard } from '@/app/components/molecules'

interface TrickContentProps {
  trick: KITrick
}

export const TrickContent = ({ trick }: TrickContentProps) => {
  return (
    <div className="space-y-8">
      {trick.steps && trick.steps.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Schritt-für-Schritt Anleitung
          </h2>
          <div className="space-y-3">
            {trick.steps.map((step, index) => (
              <StepCard 
                key={index} 
                step={step} 
                number={index + 1} 
              />
            ))}
          </div>
        </section>
      )}
      
      {trick.examples && trick.examples.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Beispiele
          </h2>
          <div className="space-y-3">
            {trick.examples.map((example, index) => (
              <ExampleCard key={index} example={example} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}