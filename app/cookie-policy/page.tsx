
import Link from 'next/link'
import { ArrowLeft, Cookie, Settings } from 'lucide-react'

export const metadata = {
  title: 'Cookie Policy - Mizatech LLC',
  description: 'Cookie policy for Mizatech LLC website. Learn about how we use cookies and tracking technologies.',
}

export default function CookiePolicyPage() {
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
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-4xl">Cookie Policy</h1>
              <p className="text-gray-300 mt-2">Last updated: September 26, 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-none">
          <div className="bg-[#F5F7FA] p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-[#1A2A40] mb-3">What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better browsing experience and allow our website to function properly.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">1. How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              Mizatech LLC uses cookies and similar tracking technologies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To ensure our website functions properly</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze website traffic and user behavior</li>
              <li>To provide personalized content and recommendations</li>
              <li>To improve our website's performance and security</li>
              <li>To enable social media features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">2. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Essential Cookies</h3>
                <p className="text-gray-600 mb-3">
                  These cookies are necessary for the website to function and cannot be switched off in our systems.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Session management</li>
                  <li>Security authentication</li>
                  <li>Form submission</li>
                  <li>Shopping cart functionality</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Analytics Cookies</h3>
                <p className="text-gray-600 mb-3">
                  These cookies help us understand how visitors interact with our website.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Website traffic analysis</li>
                  <li>Page performance monitoring</li>
                  <li>User behavior tracking</li>
                  <li>Error reporting</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Functionality Cookies</h3>
                <p className="text-gray-600 mb-3">
                  These cookies enable the website to provide enhanced functionality and personalization.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Language preferences</li>
                  <li>Theme settings</li>
                  <li>Region selection</li>
                  <li>Accessibility features</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Marketing Cookies</h3>
                <p className="text-gray-600 mb-3">
                  These cookies track your activity across websites to deliver more relevant advertising.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Targeted advertising</li>
                  <li>Social media integration</li>
                  <li>Email marketing optimization</li>
                  <li>Conversion tracking</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">3. Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              Our website may use third-party cookies from the following services:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#1A2A40] mb-2">Google Analytics</h4>
                <p className="text-sm text-gray-600">Website traffic analysis and user behavior tracking</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#1A2A40] mb-2">Social Media Platforms</h4>
                <p className="text-sm text-gray-600">Social sharing buttons and embedded content</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#1A2A40] mb-2">Payment Processors</h4>
                <p className="text-sm text-gray-600">Secure payment processing and fraud prevention</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#1A2A40] mb-2">Marketing Tools</h4>
                <p className="text-sm text-gray-600">Email marketing and advertising optimization</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">4. Managing Your Cookie Preferences</h2>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Settings className="w-6 h-6 text-[#00AEEF]" />
                <h3 className="font-semibold text-[#1A2A40]">Cookie Consent Banner</h3>
              </div>
              <p className="text-gray-600">
                When you first visit our website, you'll see a cookie consent banner where you can choose to accept or decline non-essential cookies.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Browser Settings</h3>
            <p className="text-gray-600 mb-4">
              You can also control cookies through your browser settings. Here's how to manage cookies in popular browsers:
            </p>
            
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">5. Cookie Duration</h2>
            <p className="text-gray-600 mb-4">Cookies may be stored for different periods:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#1A2A40] mb-2">Session Cookies</h3>
                <p className="text-gray-600">
                  Temporary cookies that are deleted when you close your browser.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#1A2A40] mb-2">Persistent Cookies</h3>
                <p className="text-gray-600">
                  Cookies that remain on your device for a set period (typically 30 days to 2 years).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">6. Impact of Disabling Cookies</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-[#1A2A40] mb-3">Important Notice</h3>
              <p className="text-gray-600 mb-3">
                Disabling certain cookies may affect your experience on our website:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Some features may not work properly</li>
                <li>Your preferences may not be saved</li>
                <li>You may need to re-enter information repeatedly</li>
                <li>Personalized content may not be available</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in technology, 
              legislation, or our business practices. We will notify you of any significant changes 
              by updating the "Last updated" date at the top of this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">8. Contact Us</h2>
            <div className="bg-[#F5F7FA] p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies, please contact us:
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
