import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Instagram, Twitter, Youtube, ChevronDown } from 'lucide-react'
import { Button, Card, Input } from '@/components/ui'
import { IoShield } from "react-icons/io5";


export default function Step3Socials() {
  const navigate = useNavigate()
  // Estado para controlar el acordeón
  const [showManual, setShowManual] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/onboarding/summary')
  }
  const Categories = ['Personal Blog' ,'Artist','Brand','Fitness','Food','Gaming','Lifestyle','Music','Photography','Tech','Travel','Other'] ;


  return (
    <div className="space-y-6">
      <div className="text-xl font-jakarta text-white mb-2 text-center">
        Sign Up
      </div>

      <Card className="bg-[#1c0d40]/80 backdrop-blur-md border-none p-8 shadow-2xl">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-1 bg-[#411d8f] rounded" />
          <div className="w-8 h-1 bg-[#411d8f] rounded" />
          <div className="w-8 h-1 bg-purple rounded" />
        </div>
        
        <p className="text-gray-400 font-mono mb-6 text-sm uppercase tracking-widest">
          Step 3 of 3
        </p>
        <h1 className="text-4xl font-jakarta text-white mb-2">
          Connect Socials
        </h1>
        <h3 className="text-lg text-gray-300 mb-8 font-inter"> 
          We use basic info to verify your creator account.
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Botón de Instagram que actúa como Trigger */}
          <div 
            onClick={() => setShowManual(!showManual)}
            className="relative cursor-pointer group"
          >
            <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black z-10" />
            <Input
              id="instagram"
              readOnly
              placeholder="Connect with Instagram"
              className="pl-11 bg-white mt-3 mb-3 cursor-pointer hover:bg-gray-100 transition-colors text-black"
            />
            <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition-transform ${showManual ? 'rotate-180' : ''}`} />
          </div>

          
          

          {/* Info Box fija */}
          <div className="flex p-6 flex-col justify-center items-start gap-4 rounded-xl border border-white/10 bg-[#241052]">
            <h3 className="font-bold text-white">We collect:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>Your Instagram username</li>
              <li>Number of followers</li>
              <li>Engagement metrics</li>
            </ul>
          </div>

          <div className="bg-[#241052] p-4 rounded-xl flex items-center gap-3 border border-white/10">
            <IoShield className="text-white w-5 h-5 flex-shrink-0" />
            <p className="text-white text-sm">
              We will never post without your permission.
            </p>
          </div>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showManual ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {/* El separador "or" */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-xs uppercase tracking-widest">or</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>
            <h1 className="text-xl font-jakarta text-white mb-2">
              Manual Verification
            </h1>
            <div className="space-y-5">
            <div>
                <label className="text-sm font-jakarta font-bold text-white">Username</label>
                <Input 
                  className='text-white'
                  placeholder="@yourusername"
                  
                />
            </div>
            <div>
                <label className="text-sm font-jakarta font-bold text-white">Followers</label>
                <Input 
                  className='text-white'
                  placeholder="Enter follower count"
                  
                />
            </div>
            
            <div>
             <label className="text-sm font-jakarta font-bold text-white">Category</label>
                
                <select 
                  className="w-full px-4 py-2 rounded-lg text-white bg-[#1c0d40]  focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="" disabled selected>Select your category</option>
                  {Categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
            </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="secondary"
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