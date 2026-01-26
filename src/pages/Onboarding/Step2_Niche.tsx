import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { cn } from '@/lib/utils'

const NICHES = [
  { id: 'tech', label: 'Technology' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'fitness', label: 'Fitness' },
  { id: 'food', label: 'Food & Cooking' },
  { id: 'travel', label: 'Travel' },
  { id: 'business', label: 'Business' },
]

export default function Step2Niche() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string[]>([])

  const toggleNiche = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Save data to state/context
    navigate('/onboarding/socials')
  }

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-1 bg-primary-600 rounded" />
        <div className="w-8 h-1 bg-primary-600 rounded" />
        <div className="w-8 h-1 bg-gray-200 rounded" />
      </div>

      <Card>
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Select your niche
        </h1>
        <p className="text-gray-600 mb-6 text-sm">
          Step 2 of 3 - Choose one or more
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {NICHES.map((niche) => (
              <button
                key={niche.id}
                type="button"
                onClick={() => toggleNiche(niche.id)}
                className={cn(
                  'relative p-4 rounded-lg border-2 text-left transition-all',
                  selected.includes(niche.id)
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                {selected.includes(niche.id) && (
                  <div className="absolute top-2 right-2">
                    <Check className="h-4 w-4 text-primary-600" />
                  </div>
                )}
                <span className="text-sm font-medium">{niche.label}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/onboarding/bio')}
              className="flex-1"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button type="submit" className="flex-1">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
