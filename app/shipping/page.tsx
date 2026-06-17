
import Link from 'next/link'
import { ArrowLeft, Truck, MapPin, Clock, Package } from 'lucide-react'

export const metadata = {
  title: 'Shipping Policy - Mizatech LLC',
  description: 'Shipping policy for Mizatech LLC. Learn about our shipping methods, delivery times, and shipping costs.',
}

export default function ShippingPage() {
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
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-4xl">Shipping Policy</h1>
              <p className="text-gray-300 mt-2">Last updated: September 26, 2024</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-none">
          <div className="bg-[#F5F7FA] p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-[#1A2A40] mb-3">Shipping Overview</h2>
            <p className="text-gray-600">
              We're committed to getting your Mizatech products to you quickly and safely. 
              Here's everything you need to know about our shipping policies and procedures.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">1. Shipping Locations</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border border-green-200 bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-green-800">Domestic Shipping (USA)</h3>
                </div>
                <p className="text-green-700 mb-3">We ship to all 50 states, including:</p>
                <ul className="list-disc pl-6 text-green-700 space-y-1">
                  <li>All continental United States</li>
                  <li>Alaska and Hawaii</li>
                  <li>US territories (additional fees may apply)</li>
                </ul>
              </div>

              <div className="border border-blue-200 bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-blue-800">International Shipping</h3>
                </div>
                <p className="text-blue-700 mb-3">We ship worldwide to over 100 countries:</p>
                <ul className="list-disc pl-6 text-blue-700 space-y-1">
                  <li>Europe, Asia, Australia</li>
                  <li>Canada and Mexico</li>
                  <li>Select African countries</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">2. Shipping Methods & Times</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-[#1A2A40] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#00AEEF]" />
                    Domestic Shipping (USA)
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-[#1A2A40] mb-2">Standard Shipping</h4>
                      <p className="text-sm text-gray-600 mb-2">5-7 business days</p>
                      <p className="text-lg font-bold text-[#00AEEF]">$5.99</p>
                      <p className="text-xs text-gray-500">Free on orders over $75</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#1A2A40] mb-2">Expedited Shipping</h4>
                      <p className="text-sm text-gray-600 mb-2">2-3 business days</p>
                      <p className="text-lg font-bold text-[#00AEEF]">$12.99</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#1A2A40] mb-2">Overnight Express</h4>
                      <p className="text-sm text-gray-600 mb-2">1 business day</p>
                      <p className="text-lg font-bold text-[#00AEEF]">$24.99</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-[#1A2A40] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#00AEEF]" />
                    International Shipping
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-[#1A2A40] mb-2">International Standard</h4>
                      <p className="text-sm text-gray-600 mb-2">7-14 business days</p>
                      <p className="text-lg font-bold text-[#00AEEF]">$15.99 - $29.99</p>
                      <p className="text-xs text-gray-500">Varies by destination</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#1A2A40] mb-2">International Express</h4>
                      <p className="text-sm text-gray-600 mb-2">3-7 business days</p>
                      <p className="text-lg font-bold text-[#00AEEF]">$35.99 - $59.99</p>
                      <p className="text-xs text-gray-500">Varies by destination</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">3. Order Processing</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Package className="w-6 h-6 text-yellow-600" />
                <h3 className="font-semibold text-yellow-800">Processing Times</h3>
              </div>
              <ul className="list-disc pl-6 text-yellow-700 space-y-2">
                <li><strong>Standard Orders:</strong> 1-2 business days</li>
                <li><strong>Custom/Personalized Items:</strong> 3-5 business days</li>
                <li><strong>High-Volume Periods:</strong> 2-3 business days (holidays/sales)</li>
                <li><strong>Weekends & Holidays:</strong> Orders placed are processed on next business day</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Order Cutoff Times</h3>
            <p className="text-gray-600 mb-4">To ensure same-day processing:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Standard Orders:</strong> Place by 2:00 PM CST</li>
              <li><strong>Express Orders:</strong> Place by 12:00 PM CST</li>
              <li><strong>Weekend Orders:</strong> Processed Monday morning</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">4. Free Shipping</h2>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Qualify for FREE Standard Shipping!</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#1A2A40] mb-2">Domestic (USA)</h4>
                  <ul className="list-disc pl-6 text-green-700 space-y-1">
                    <li>Orders $75 and above</li>
                    <li>Automatically applied at checkout</li>
                    <li>Standard shipping (5-7 business days)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#1A2A40] mb-2">International</h4>
                  <ul className="list-disc pl-6 text-green-700 space-y-1">
                    <li>Orders $150 and above</li>
                    <li>Select countries only</li>
                    <li>Standard shipping (7-14 business days)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">5. Order Tracking</h2>
            
            <div className="border-l-4 border-[#00AEEF] pl-6 mb-6">
              <h3 className="font-semibold text-[#1A2A40] mb-2">Track Your Order</h3>
              <p className="text-gray-600 mb-3">
                Once your order ships, you'll receive a tracking confirmation email with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Tracking number</li>
                <li>Carrier information</li>
                <li>Estimated delivery date</li>
                <li>Direct link to track your package</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Shipping Carriers</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-[#1A2A40]">USPS</h4>
                <p className="text-sm text-gray-600">Standard & Priority Mail</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-[#1A2A40]">UPS</h4>
                <p className="text-sm text-gray-600">Ground & Express</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-[#1A2A40]">FedEx</h4>
                <p className="text-sm text-gray-600">Overnight & International</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">6. International Shipping Details</h2>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 mb-3">Important International Information</h3>
              <ul className="list-disc pl-6 text-blue-700 space-y-2">
                <li><strong>Customs & Duties:</strong> Additional fees may apply and are customer's responsibility</li>
                <li><strong>Documentation:</strong> We handle all export documentation</li>
                <li><strong>Restrictions:</strong> Some products may not be available in certain countries</li>
                <li><strong>Delivery Times:</strong> May vary due to customs processing</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">7. Shipping Restrictions</h2>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">We Cannot Ship To:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#1A2A40] mb-2">Address Types</h4>
                  <ul className="list-disc pl-6 text-red-700 space-y-1">
                    <li>P.O. Boxes (Express orders)</li>
                    <li>Military APO/FPO addresses</li>
                    <li>Freight forwarding services</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#1A2A40] mb-2">Restricted Countries</h4>
                  <p className="text-sm text-red-700">
                    Due to shipping restrictions, we cannot ship to certain countries. 
                    Check at checkout for availability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">8. Delivery Issues</h2>
            
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Lost or Damaged Packages</h3>
            <p className="text-gray-600 mb-4">If your package is lost or arrives damaged:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Contact us immediately at support@mizatechllc.com</li>
              <li>We'll work with the carrier to investigate</li>
              <li>We'll send a replacement or full refund</li>
              <li>Take photos of any damaged packaging/items</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Delivery Attempts</h3>
            <p className="text-gray-600 mb-4">If you're not available for delivery:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Packages may be left in a secure location</li>
              <li>Signature required items will be held at local facility</li>
              <li>You'll receive a delivery notice with pickup instructions</li>
              <li>Packages not collected within 7 days will be returned to us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-[#1A2A40] mb-4">9. Contact Our Shipping Team</h2>
            <div className="bg-[#F5F7FA] p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                Have questions about shipping or need to modify your order? Contact our shipping team:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> support@mizatechllc.com</p>
                <p><strong>Phone:</strong> +261343645786</p>
                <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (CST)</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
