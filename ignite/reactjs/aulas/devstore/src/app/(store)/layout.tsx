import { Header } from '@/components/header'
import { ReactNode } from 'react'

interface storeLayoutProps {
  children: ReactNode
}

export default function StoreLayout({ children }: storeLayoutProps) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
