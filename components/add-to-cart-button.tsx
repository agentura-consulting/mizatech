
'use client'

import { ShoppingCart } from 'lucide-react'

interface AddToCartButtonProps {
  productName: string
}

export default function AddToCartButton({ productName }: AddToCartButtonProps) {
  const handleAddToCart = () => {
    // Demo functionality - just show an alert
    alert(`Added "${productName}" to cart! (This is a demo - no actual cart functionality)`)
  }

  return (
    <button 
      onClick={handleAddToCart}
      className="w-full bg-[#1A2A40] text-white py-3 rounded-lg hover:bg-[#00AEEF] transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
    >
      <ShoppingCart className="w-4 h-4" />
      Add to Cart
    </button>
  )
}
