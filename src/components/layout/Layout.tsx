import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-[#2b0c70] isolate">
    <div 
      className="fixed inset-0 -z-10 pointer-events-none opacity-30" 
      style={{
        backgroundImage: `
          linear-gradient(to right, #533599 1px, transparent 1px),
          linear-gradient(to bottom, #533599 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    />

      <main className="relative z-10 container-mobile py-8">
        {children}
      </main>
    </div>
  )
}
