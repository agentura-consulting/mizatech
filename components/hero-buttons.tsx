
'use client'

import { ShoppingCart } from 'lucide-react'

export default function HeroButtons() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button 
        onClick={scrollToProducts}
        className="px-8 py-4 bg-[#00AEEF] text-white font-semibold rounded-lg hover:bg-[#0096D1] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        Shop Now
      </button>
      <button 
        onClick={scrollToAbout}
        className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1A2A40] transition-all duration-300"
      >
        Learn More
      </button>
    </div>
  )
}
