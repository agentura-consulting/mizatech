
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Mizatech LLC - Digital Excellence. Business Growth. Results That Matter.',
  description: 'Business consulting firm specializing in digital services: website creation, digital marketing, social media advertising, Google Ads management, e-commerce solutions, and business analytics. Transform your business with expert digital consulting.',
  keywords: 'digital consulting, website design, website development, digital marketing, social media advertising, Google Ads, Facebook ads, Instagram ads, e-commerce solutions, business analytics, SEO, content marketing, online marketing, web design, business consulting, mizatech',
  authors: [{ name: 'Mizatech LLC' }],
  openGraph: {
    title: 'Mizatech LLC - Digital Excellence. Business Growth. Results That Matter.',
    description: 'Business consulting firm specializing in digital services including website creation, digital marketing, and advertising campaigns that drive real results.',
    type: 'website',
    siteName: 'Mizatech LLC',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
