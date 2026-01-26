import { useNavigate } from 'react-router-dom'
import { CheckCircle, RotateCcw } from 'lucide-react'
import { Button, Card } from '@/components/ui'

export default function Summary() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <Card className="w-full text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          All Done!
        </h1>

        <p className="text-gray-600 mb-8">
          Your profile has been set up successfully.
        </p>

        {/* TODO: Display summary of collected data */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h2 className="font-medium text-gray-900 mb-2">Profile Summary</h2>
          <p className="text-sm text-gray-500">
            Data collected from previous steps will be displayed here.
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex-1"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Start Over
          </Button>
          <Button className="flex-1">
            Continue
          </Button>
        </div>
      </Card>
    </div>
  )
}
