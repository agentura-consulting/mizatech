
import Link from 'next/link'
import { ArrowLeft, RefreshCw, Clock } from 'lucide-react'

export const metadata = {
  title: 'Refund & Return Policy - Mizatech LLC',
  description: 'Refund and return policy for Mizatech LLC products. Learn about our return process and policy terms.',
}

export default function RefundPage() {
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
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-4xl">Refund & Return Policy</h1>
              <p className="text-gray-300 mt-2">Last updated: September 26, 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-none">
          <div className="bg-[#F5F7FA] p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-[#1A2A40] mb-3">Return Policy Overview</h2>
            <p className="text-gray-600">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, we offer a comprehensive return and refund policy.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">1. Return Window</h2>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A2A40] mb-2">30-Day Return Window</h3>
                <p className="text-gray-600">
                  You have 30 days from the date of delivery to return any item for a full refund or exchange. 
                  The return window starts from the day you receive your order.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">2. Return Conditions</h2>
            <p className="text-gray-600 mb-4">To be eligible for a return, your item must meet the following conditions:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Items must be in original, unused condition</li>
              <li>Items must be in original packaging with all accessories included</li>
              <li>Items must include original receipt or proof of purchase</li>
              <li>Items must be free from damage not caused by defect</li>
              <li>Electronic items must not show signs of wear or use</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">3. Non-Returnable Items</h2>
            <p className="text-gray-600 mb-4">Certain items cannot be returned for health and safety reasons:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Earbuds and headphones (for hygiene reasons)</li>
              <li>Items that have been personalized or customized</li>
              <li>Items damaged by misuse or normal wear and tear</li>
              <li>Items returned without original packaging</li>
              <li>Items returned after 30 days from delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">4. How to Return an Item</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[#00AEEF] pl-4">
                <h3 className="font-semibold text-[#1A2A40] mb-2">Step 1: Contact Us</h3>
                <p className="text-gray-600">
                  Email us at support@mizatechllc.com or call +261343645786 to initiate your return. 
                  Please include your order number and reason for return.
                </p>
              </div>
              
              <div className="border-l-4 border-[#00AEEF] pl-4">
                <h3 className="font-semibold text-[#1A2A40] mb-2">Step 2: Receive Return Authorization</h3>
                <p className="text-gray-600">
                  We'll provide you with a Return Merchandise Authorization (RMA) number and return shipping instructions.
                </p>
              </div>
              
              <div className="border-l-4 border-[#00AEEF] pl-4">
                <h3 className="font-semibold text-[#1A2A40] mb-2">Step 3: Package Your Item</h3>
                <p className="text-gray-600">
                  Carefully package the item in its original packaging with all accessories and documentation.
                </p>
              </div>
              
              <div className="border-l-4 border-[#00AEEF] pl-4">
                <h3 className="font-semibold text-[#1A2A40] mb-2">Step 4: Ship the Item</h3>
                <p className="text-gray-600">
                  Send the package to the address provided with your RMA number clearly marked on the package.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">5. Return Shipping</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-[#1A2A40] mb-2">Important: Return Shipping Costs</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li><strong>Defective Items:</strong> We cover return shipping costs</li>
                <li><strong>Wrong Item Sent:</strong> We cover return shipping costs</li>
                <li><strong>Change of Mind:</strong> Customer covers return shipping costs</li>
                <li><strong>Size/Compatibility Issues:</strong> Customer covers return shipping costs</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">6. Refund Processing</h2>
            <p className="text-gray-600 mb-4">Once we receive and inspect your returned item:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>We'll send you an email confirmation of receipt</li>
              <li>Inspection typically takes 2-3 business days</li>
              <li>Approved refunds are processed within 5-7 business days</li>
              <li>Refunds are issued to the original payment method</li>
              <li>Credit card refunds may take 1-2 billing cycles to appear</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">7. Exchanges</h2>
            <p className="text-gray-600 mb-4">
              We offer exchanges for defective or damaged items. If you need to exchange an item:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Follow the same return process outlined above</li>
              <li>Specify that you want an exchange in your initial contact</li>
              <li>We'll send a replacement item once we receive the returned item</li>
              <li>No additional shipping charges for defective item exchanges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">8. Damaged or Defective Items</h2>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-[#1A2A40] mb-2">Received a Damaged Item?</h3>
              <p className="text-gray-600 mb-2">
                If you receive a damaged or defective item, please contact us immediately:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Take photos of the damage</li>
                <li>Contact us within 48 hours of delivery</li>
                <li>We'll arrange immediate replacement or full refund</li>
                <li>We'll cover all return shipping costs</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">9. Partial Refunds</h2>
            <p className="text-gray-600 mb-4">Partial refunds may be granted in the following situations:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Items that show signs of use beyond normal inspection</li>
              <li>Items returned without original packaging</li>
              <li>Items that are damaged but still functional</li>
              <li>Items missing accessories or components</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">10. Contact Information</h2>
            <div className="bg-[#F5F7FA] p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                For all return and refund inquiries, please contact our customer service team:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> support@mizatechllc.com</p>
                <p><strong>Phone:</strong> +261343645786</p>
                <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (CST)</p>
                <p><strong>Address:</strong> 117 South Lexington Street Ste 100, Harrisonville, MO 64701</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
