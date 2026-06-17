
import Navigation from '../components/navigation'
import CookieBanner from '../components/cookie-banner'
import NewsletterSignup from '../components/newsletter-signup'
import HeroButtons from '../components/hero-buttons'
import { 
  Shield, 
  Users, 
  Headphones, 
  Award, 
  Zap,
  Monitor,
  Megaphone,
  TrendingUp,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Target,
  BarChart
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Digital Services data
const digitalServices = [
  {
    id: 1,
    name: 'Website Design & Development',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Custom website design and development tailored to your business needs. Responsive, modern, and user-friendly.'
  },
  {
    id: 2,
    name: 'Digital Marketing',
    icon: Megaphone,
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80',
    description: 'Comprehensive digital marketing strategies including SEO, content marketing, and social media management.'
  },
  {
    id: 3,
    name: 'Social Media Advertising',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
    description: 'Targeted social media ad campaigns on Facebook, Instagram, LinkedIn, and more to reach your audience.'
  },
  {
    id: 4,
    name: 'Google Ads Management',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80',
    description: 'Expert Google Ads campaign setup and management to maximize your ROI and drive qualified traffic.'
  },
  {
    id: 5,
    name: 'E-commerce Solutions',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    description: 'Complete e-commerce website development with payment integration, inventory management, and optimization.'
  },
  {
    id: 6,
    name: 'Business Analytics',
    icon: BarChart,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Data-driven insights and analytics to help you make informed business decisions and track performance.'
  }
]

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'Bloom & Co.',
    location: 'San Francisco, USA',
    rating: 5,
    comment: 'Mizatech transformed our online presence with a stunning website and effective digital marketing strategy. Our sales increased by 150% in just 3 months!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
  },
  {
    name: 'David Chen',
    company: 'TechStart Inc.',
    location: 'Austin, USA',
    rating: 5,
    comment: 'The team delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80'
  },
  {
    name: 'Jennifer Rodriguez',
    company: 'Elite Fitness Studio',
    location: 'Miami, USA',
    rating: 5,
    comment: 'Our Google Ads campaigns managed by Mizatech have consistently delivered great results. Professional service and excellent ROI.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
  }
]

const whyChoosePoints = [
  {
    icon: Shield,
    title: 'Proven Expertise',
    description: 'Years of experience delivering successful digital solutions for businesses across various industries.'
  },
  {
    icon: Award,
    title: 'Results-Driven',
    description: 'We focus on measurable outcomes that drive growth, increase revenue, and enhance your online presence.'
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Efficient project delivery without compromising on quality. We value your time and business goals.'
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Work with experienced professionals who are committed to your success and available when you need them.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Ongoing support and maintenance to ensure your digital assets perform optimally at all times.'
  }
]

const howItWorksSteps = [
  {
    icon: Phone,
    title: 'Consultation',
    description: 'Schedule a free consultation to discuss your business goals, challenges, and digital needs.'
  },
  {
    icon: Target,
    title: 'Strategy & Planning',
    description: 'We develop a customized strategy tailored to your objectives with clear timelines and deliverables.'
  },
  {
    icon: TrendingUp,
    title: 'Execution & Growth',
    description: 'Implementation of solutions followed by continuous optimization to drive sustainable growth.'
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <CookieBanner />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
              alt="Business consulting team collaboration"
              fill
              className="object-cover"
              style={{ transform: 'translateZ(0)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A40]/90 via-[#1A2A40]/75 to-[#1A2A40]/60"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white space-y-8">
            <div className="space-y-6">
              <h1 className="font-poppins font-bold text-5xl lg:text-7xl leading-tight">
                <span className="gradient-text">Digital Excellence.</span><br />
                <span className="gradient-text">Business Growth.</span><br />
                <span className="text-white">Results That Matter.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
                Transform your business with expert digital consulting services. From stunning 
                websites to high-converting ad campaigns, we deliver solutions that drive real results.
              </p>
            </div>

            {/* CTA Buttons */}
            <HeroButtons />

            {/* Key Services Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
              {[
                { icon: Monitor, label: 'Web Development' },
                { icon: Megaphone, label: 'Digital Marketing' },
                { icon: Target, label: 'Ad Campaigns' },
                { icon: BarChart, label: 'Analytics' }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#00AEEF] mx-auto mb-3" />
                    <p className="text-white text-sm font-medium">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-4xl text-[#1A2A40] mb-6">About Mizatech LLC</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Mizatech LLC is a business consulting firm specializing in digital services that help businesses 
              thrive in the modern marketplace. We partner with companies of all sizes to create powerful 
              digital solutions that drive growth, increase visibility, and maximize return on investment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of experienced professionals brings expertise in website creation, digital marketing, 
              social media advertising, Google Ads management, e-commerce development, and business analytics. 
              We combine strategic thinking with technical excellence to deliver solutions that produce measurable 
              results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Mizatech Section */}
      <section id="why-choose" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-[#1A2A40] mb-6">Why Choose Mizatech</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner with a team that combines technical expertise, creative innovation, and 
              data-driven strategies to achieve your business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div key={index} className="bg-[#F5F7FA] rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1A2A40] to-[#00AEEF] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-[#1A2A40] mb-4">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-[#1A2A40] mb-6">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures smooth project delivery from initial consultation to successful implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#1A2A40] to-[#00AEEF] transform -translate-y-1/2 z-0"></div>
            
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-white border-4 border-[#00AEEF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-[#00AEEF]" />
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <span className="inline-block w-8 h-8 bg-[#00AEEF] text-white rounded-full text-sm font-bold mb-4 leading-8">
                      {index + 1}
                    </span>
                    <h3 className="font-poppins font-semibold text-xl text-[#1A2A40] mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-[#1A2A40] mb-6">Our Digital Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. From web development to targeted 
              advertising campaigns, we've got you covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className="aspect-video bg-gray-50 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A40]/80 to-transparent flex items-end p-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-[#1A2A40] mb-3">{service.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-[#1A2A40] to-[#00AEEF] text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-[#1A2A40] mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. See how we've helped businesses achieve their digital goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full relative overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A2A40]">{testimonial.name}</h4>
                    <p className="text-sm text-[#00AEEF] font-medium">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section id="newsletter" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl text-[#1A2A40] mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for digital marketing insights, industry trends, and exclusive tips to grow your business online.
          </p>
          <NewsletterSignup />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A2A40] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-white to-[#00AEEF] rounded-lg flex items-center justify-center">
                  <span className="font-bold text-[#1A2A40]">M</span>
                </div>
                <span className="font-poppins font-bold text-2xl">Mizatech LLC</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Digital Excellence. Business Growth. Results That Matter. Your trusted partner for 
                comprehensive digital consulting services that drive measurable business success.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00AEEF]" />
                  <span>+261343645786</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00AEEF]" />
                  <span>support@mizatechllc.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00AEEF] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm mb-1">Registered Address:</p>
                    <p>117 South Lexington Street Ste 100</p>
                    <p>Harrisonville, MO 64701</p>
                    <p className="font-medium text-sm mt-3 mb-1">Physical Address:</p>
                    <p>LOT IBG 53 Antsahavola</p>
                    <p>Antananarivo, Analamanga, Madagascar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-[#00AEEF] transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-[#00AEEF] transition-colors">Our Services</a></li>
                <li><a href="#why-choose" className="text-gray-300 hover:text-[#00AEEF] transition-colors">Why Choose Us</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-[#00AEEF] transition-colors">Client Success</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-6">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/terms" className="text-gray-300 hover:text-[#00AEEF] transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-[#00AEEF] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund" className="text-gray-300 hover:text-[#00AEEF] transition-colors">Refund Policy</Link></li>
                <li><Link href="/cookie-policy" className="text-gray-300 hover:text-[#00AEEF] transition-colors">Cookie Policy</Link></li>
                <li><Link href="/shipping" className="text-gray-300 hover:text-[#00AEEF] transition-colors">Shipping Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Mizatech LLC. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#00AEEF] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#00AEEF] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#00AEEF] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#00AEEF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
