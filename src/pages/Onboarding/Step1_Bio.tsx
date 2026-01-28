import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button, Card, Input } from '@/components/ui'
import CountrySelector, { Country } from '@/components/ui/CountrySelector';

export default function Step1Bio() {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '', 
  })

  // Lista actualizada con Guatemala, México y USA
  const listaPaises = [
    { name: 'Guatemala', flag: 'https://flagcdn.com/gt.svg' },
    { name: 'Mexico', flag: 'https://flagcdn.com/mx.svg' },
    { name: 'USA', flag: 'https://flagcdn.com/us.svg' }
  ];

  const capturarPais = (pais: Country) => {
    setFormData({ ...formData, country: pais.name });
  };

  // El botón solo se activa si los tres campos tienen texto (sin contar espacios)
  const isFormValid = 
    formData.firstName.trim() !== '' && 
    formData.lastName.trim() !== '' && 
    formData.country !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      navigate('/onboarding/niche')
    }
  }

  return (
    <div className="space-y-6">
      {/* Indicador de progreso */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-1 bg-purple rounded" />
        <div className="w-8 h-1 bg-gray-600 rounded" />
        <div className="w-8 h-1 bg-gray-600 rounded" />
      </div>

      <Card className="bg-[#1c0d40]/80 backdrop-blur-md border-none p-8 shadow-2xl">
        <p className="text-gray-400 font-mono mb-6 text-sm uppercase tracking-widest">
          Step 1 of 3
        </p>
        <h1 className="text-4xl font-jakarta font-extrabold text-white mb-2">
          Tell us about you
        </h1>
        <h3 className="text-lg text-gray-300 mb-8 font-inter"> 
          This helps us personalize your experience.
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
                <label className="text-sm font-jakarta font-bold text-white">First Name</label>
                <Input 
                  className='text-white'
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
            </div>
            <div>
              <label className="text-sm font-jakarta font-bold text-white">Last Name</label>
              <Input
                className='text-white'
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
        

          <div className="space-y-1">
            <label className="block text-sm font-jakarta font-bold text-white mb-1">
              Country of Residence
            </label>
            <CountrySelector 
              countries={listaPaises} 
              onChange={capturarPais} 
              
            />
            {!formData.country && (
              <p className="text-[10px] text-gray-500 mt-1 uppercase">* Selection required</p>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <Button 
              type="submit" 
              disabled={!isFormValid}
              className={`flex-1 text-lg '
                ${isFormValid 
                  ? 'bg-[#FF1493] text-white hover:bg-[#C71073] cursor-pointer' 
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50 shadow-none'
                }`}
            >
              Next
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/')}
              className="w-full bg-transparent border border-gray-800 text-gray-500 hover:text-white transition-colors"
            >
              Back
            </Button>
          </div>
          <div className="flex gap-3 pt-4">

          </div>
        </form>
      </Card>
    </div>
  )
}