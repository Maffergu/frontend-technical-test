import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Button, Card, Input } from '@/components/ui'

export default function Step1Bio() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Save data to state/context
    navigate('/onboarding/niche')
  }

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-1 bg-primary-600 rounded" />
        <div className="w-8 h-1 bg-gray-200 rounded" />
        <div className="w-8 h-1 bg-gray-200 rounded" />
      </div>

      <Card>
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Tell us about yourself
        </h1>
        <p className="text-gray-600 mb-6 text-sm">
          Step 1 of 3
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="name"
            label="Your Name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Short Bio
            </label>
            <textarea
              id="bio"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-400 resize-none"
              placeholder="Tell us a bit about yourself..."
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/')}
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
