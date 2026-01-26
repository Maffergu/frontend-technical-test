/**
 * ============================================
 *  START HERE - Welcome Screen
 * ============================================
 *
 * This is the entry point of the onboarding flow.
 *
 * YOUR TASKS:
 * 1. Replace the placeholder logo with the actual design
 * 2. Match the visual design from Figma (colors, spacing, typography)
 * 3. Ensure the "Get Started" button navigates to /onboarding/bio
 *
 * NAVIGATION FLOW:
 *   Welcome -> Step1_Bio -> Step2_Niche -> Step3_Socials -> Summary
 *
 * AVAILABLE COMPONENTS:
 *   - Button: <Button variant="primary|secondary|outline" size="sm|md|lg">
 *   - Input:  <Input label="..." placeholder="..." error="..." />
 *   - Card:   <Card className="...">content</Card>
 *
 * UTILITY:
 *   - cn(): import { cn } from '@/lib/utils' for conditional classes
 *
 * ICONS:
 *   - import { IconName } from 'lucide-react'
 *   - Browse: https://lucide.dev/icons
 *
 * Good luck!
 * ============================================
 */

import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button, Card } from '@/components/ui'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <Card className="w-full text-center">
        {/* TODO: Replace with actual logo from /src/assets/ */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-600">L</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome
        </h1>

        <p className="text-gray-600 mb-8">
          Let's set up your profile in just a few steps.
        </p>

        <Button
          onClick={() => navigate('/onboarding/bio')}
          className="w-full"
          size="lg"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Card>
    </div>
  )
}
