import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight} from 'lucide-react'
import { Button, Card, Input } from '@/components/ui'
import CountrySelector, { Country } from '@/components/ui/CountrySelector';

export default function Step1Bio() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
  })
  const listaPaises = [
    { name: 'USA', flag: 'https://readymadeui.com/usa_flag.webp' },
    { name: 'England', flag: 'https://readymadeui.com/uk_flag.webp' }
  ];
  const capturarPais = (pais: Country) => {
    console.log("El país elegido es:", pais.name);
    
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Save data to state/context
    navigate('/onboarding/niche')
  }
  

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-1 bg-purple rounded" />
        <div className="w-8 h-1 bg-gray-200 rounded" />
        <div className="w-8 h-1 bg-gray-200 rounded" />
      </div>

      <Card>
        
        <p className="text-white font-jetbrains mb-6 text-sm">
          Step 1 of 3
        </p>
        <h1 className="text-4xl font-jakarta text-white mb-2">
          Tell us about you
        </h1>
        <h3 className= "ext-xl text-white mb-2"> 
          This helps us personalize your experience
          and show you relevant opportunities.
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            className='text-white'
            id="Firstname"
            label="First Name"
            placeholder="Enter your first name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Input
            className='text-white'
            id="Lastname"
            label="Last Name"
            placeholder="Enter your last name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <h1 className="block text-sm font-medium text-white mb-1">
            Country of Residence
          </h1>
          <CountrySelector 
          countries={listaPaises} onChange={capturarPais} />

          <div className="flex gap-3 pt-4">
          <Button type="submit" className="flex-1">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex ">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/')}
              className="flex-1"
            >
              Back
            </Button>
            
          </div>
          
        </form>
      </Card>
    </div>
  )
}
