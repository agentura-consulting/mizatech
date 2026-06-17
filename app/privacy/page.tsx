
import Link from 'next/link'
import { ArrowLeft, Shield, Eye } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - Mizatech LLC',
  description: 'Privacy policy for Mizatech LLC - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
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
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-4xl">Privacy Policy</h1>
              <p className="text-gray-300 mt-2">Last updated: September 26, 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-none">
          <div className="bg-[#F5F7FA] p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-[#1A2A40] mb-3">Privacy Overview</h2>
            <p className="text-gray-600">
              This Privacy Policy describes how Mizatech LLC collects, uses, and shares your personal information when you visit or make a purchase from our website.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us.
            </p>
            
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Name and contact information (email address, phone number, shipping address)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Account information (username, password)</li>
              <li>Order history and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Website usage and navigation patterns</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We may share your personal information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Service Providers:</strong> Third parties who perform services on our behalf</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to such sharing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">4. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar technologies to enhance your experience on our website. 
              For detailed information about our use of cookies, please see our <Link href="/cookie-policy" className="text-[#00AEEF] hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">6. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">7. Your Rights</h2>
            <p className="text-gray-600 mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Rectify inaccurate personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your personal information</li>
              <li>Data portability</li>
              <li>Withdraw consent (where processing is based on consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">8. Third-Party Links</h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">9. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">11. Contact Us</h2>
            <div className="bg-[#F5F7FA] p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
