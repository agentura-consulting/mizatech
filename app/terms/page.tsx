
import Link from 'next/link'
import { ArrowLeft, Scale, FileText } from 'lucide-react'

export const metadata = {
  title: 'Terms & Conditions - Mizatech LLC',
  description: 'Terms and conditions for using Mizatech LLC services and purchasing our consumer electronics accessories.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1A2A40] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00AEEF] hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#00AEEF] rounded-xl flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-4xl">Terms & Conditions</h1>
              <p className="text-gray-300 mt-2">Last updated: September 26, 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-none">
          <div className="bg-[#F5F7FA] p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-[#1A2A40] mb-3">Agreement Overview</h2>
            <p className="text-gray-600">
              These Terms and Conditions govern your use of Mizatech LLC's website and services. 
              By accessing our website or purchasing our products, you agree to be bound by these terms.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the Mizatech LLC website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">2. Product Information and Availability</h2>
            <p className="text-gray-600 mb-4">
              We strive to provide accurate product descriptions and pricing information. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All products are subject to availability</li>
              <li>We reserve the right to discontinue any product at any time</li>
              <li>Prices are subject to change without notice</li>
              <li>Product images are for illustration purposes only</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">3. Orders and Payment</h2>
            <p className="text-gray-600 mb-4">
              By placing an order through our Service, you warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>You are legally capable of entering into binding contracts</li>
              <li>You are at least 18 years old</li>
              <li>The information you provide is true, accurate, current and complete</li>
              <li>You have the legal right to use the payment method provided</li>
            </ul>
            <p className="text-gray-600">
              We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">4. Shipping and Delivery</h2>
            <p className="text-gray-600 mb-4">
              Delivery times and shipping costs vary depending on your location and the products ordered. 
              For detailed shipping information, please refer to our <Link href="/shipping" className="text-[#00AEEF] hover:underline">Shipping Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">5. Returns and Refunds</h2>
            <p className="text-gray-600 mb-4">
              Our return and refund policy is detailed in our <Link href="/refund" className="text-[#00AEEF] hover:underline">Refund & Return Policy</Link>. 
              Please review this policy before making a purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">6. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-4">
              The Service and its original content, features and functionality are and will remain the exclusive property of Mizatech LLC and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">7. User Conduct</h2>
            <p className="text-gray-600 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use our service for any unlawful purpose or to solicit others to unlawful acts</li>
              <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>Submit false or misleading information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              In no event shall Mizatech LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">10. Contact Information</h2>
            <div className="bg-[#F5F7FA] p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> support@mizatechllc.com</p>
                <p><strong>Phone:</strong> +261343645786</p>
                <p><strong>Address:</strong> 117 South Lexington Street Ste 100, Harrisonville, MO 64701</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
