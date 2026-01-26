import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Welcome from '@/pages/Welcome'
import Step1Bio from '@/pages/Onboarding/Step1_Bio'
import Step2Niche from '@/pages/Onboarding/Step2_Niche'
import Step3Socials from '@/pages/Onboarding/Step3_Socials'
import Summary from '@/pages/Onboarding/Summary'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/onboarding/bio" element={<Step1Bio />} />
        <Route path="/onboarding/niche" element={<Step2Niche />} />
        <Route path="/onboarding/socials" element={<Step3Socials />} />
        <Route path="/onboarding/summary" element={<Summary />} />
      </Routes>
    </Layout>
  )
}

export default App
