import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Instagram, Twitter, Youtube } from 'lucide-react'
import { Button, Card, Input } from '@/components/ui'

export default function Step3Socials() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    instagram: '',
    twitter: '',
    youtube: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Save data to state/context
    navigate('/onboarding/summary')
  }

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-1 bg-primary-600 rounded" />
        <div className="w-8 h-1 bg-primary-600 rounded" />
        <div className="w-8 h-1 bg-primary-600 rounded" />
      </div>

      <Card>
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Connect your socials
        </h1>
        <p className="text-gray-600 mb-6 text-sm">
          Step 3 of 3 - Optional
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="instagram"
              placeholder="Instagram username"
              className="pl-11"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
            />
          </div>

          <div className="relative">
            <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="twitter"
              placeholder="Twitter username"
              className="pl-11"
              value={formData.twitter}
              onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
            />
          </div>

          <div className="relative">
            <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="youtube"
              placeholder="YouTube channel"
              className="pl-11"
              value={formData.youtube}
              onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/onboarding/niche')}
              className="flex-1"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button type="submit" className="flex-1">
              Finish
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
