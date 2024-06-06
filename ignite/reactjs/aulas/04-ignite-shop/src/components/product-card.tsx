import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { ReactNode } from 'react'

interface ProductCardProps {
  children: ReactNode
}

export default function ProductCard({ children }: ProductCardProps) {
  return (
    <a className="bg-product-gradient border-r-0 p-1 cursor-pointer relative flex items-center justify-center group overflow-hidden">
      {children}
    </a>
  )
}

const ProductCardFooter = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }) => (
  <footer
    className={cn(
      'absolute p-8 bottom-1 left-1 right-1 rounded-[6px] flex items-center justify-between bg-[rgba(0,0,0,0.6)] translate-y-[110%] opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100',
      className,
    )}
    {...props}
  />
))
ProductCardFooter.displayName = 'ProductCardFooter'

export { ProductCardFooter }
