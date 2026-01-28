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
import { Button, Card, LogoIcon } from '@/components/ui'
import PeopleIcon from '@/assets/People.svg';


export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <Card className="w-full text-center">
        <div className="flex justify-center mb-8 text-white">
          <LogoIcon />
        </div>
        <div className="flex justify-center mb-8">
          <img 
            src={PeopleIcon} 
            alt="People" 
            className="w-auto h-60" 
          />
        </div>
        
        <h1 className="text-5xl font-extrabold font-jakarta text-white mb-2">
          What is Elevn?
        </h1>

        <p className="ext-2xl text-white mb-8">
        Elevn connects creators with real opportunities to grow, collaborate, and earn.
        </p>

        <Button
          
          onClick={() => navigate('/onboarding/bio')}
          className="w-full"
          size="lg"
        >
          Continue
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Card>
    </div>
  )
}
