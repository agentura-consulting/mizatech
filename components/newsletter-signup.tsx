
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, CheckCircle } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitted) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
    setEmail('')
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-none transition-all duration-200"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !email}
              className="px-6 py-3 bg-[#00AEEF] text-white rounded-lg hover:bg-[#0096D1] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 min-w-[120px]"
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                'Subscribe'
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-semibold">Thank you!</span>
            </div>
            <p className="text-gray-600">
              You've been successfully subscribed to our newsletter. 
              We'll keep you updated with the latest tech trends and exclusive offers.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
