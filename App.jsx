import { useState } from 'react'
import { Phone, MapPin, Menu, X, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Star, Calendar, Clock, CheckCircle } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <a href="tel:+9779801358600" className="flex items-center gap-2 hover:text-primary-200 transition">
              <Phone size={16} />
              <span>+977 9801358600</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-primary-200 transition">
              <MapPin size={16} />
              <span>4th Floor Bishal Bhawan, Basundhara Chowki</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-200 transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-primary-200 transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-primary-200 transition"><Instagram size={18} /></a>
            <a href="#" className="hover:text-primary-200 transition"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Sahara Skin Clinic</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition">Services</a>
              <a href="#treatments" className="text-gray-700 hover:text-primary-600 font-medium transition">Treatments</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition">Contact</a>
              <a href="#appointment" className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition font-medium">
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-primary-600 font-medium">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-primary-600 font-medium">About</a>
              <a href="#services" className="block text-gray-700 hover:text-primary-600 font-medium">Services</a>
              <a href="#treatments" className="block text-gray-700 hover:text-primary-600 font-medium">Treatments</a>
              <a href="#contact" className="block text-gray-700 hover:text-primary-600 font-medium">Contact</a>
              <a href="#appointment" className="block bg-primary-600 text-white px-6 py-2 rounded-full text-center hover:bg-primary-700 transition font-medium">
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Dermatologist & Skin Clinic in Kathmandu, Nepal
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Expert Acne, Laser, Allergy, Wart & STD Testing by Dr. Sharma
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition font-medium flex items-center gap-2">
                <Calendar size={20} />
                Book Appointment
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full hover:bg-primary-50 transition font-medium">
                Learn More
              </button>
            </div>
            
            {/* Quick Services */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: 'Allergy Testing', color: 'bg-blue-100 text-blue-700' },
                { name: 'Laser Hair Removal', color: 'bg-pink-100 text-pink-700' },
                { name: 'GFC Therapy', color: 'bg-purple-100 text-purple-700' },
                { name: 'Anti-Aging', color: 'bg-green-100 text-green-700' },
                { name: 'STD Testing', color: 'bg-red-100 text-red-700' }
              ].map((service, index) => (
                <button key={index} className={`${service.color} px-4 py-3 rounded-lg font-medium hover:opacity-80 transition`}>
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Advanced dermatology treatments with cutting-edge technology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Allergy Test in Kathmandu',
                description: 'Comprehensive allergy testing including patch and prick tests for accurate diagnosis',
                icon: '🧪',
                cta: 'Learn More'
              },
              {
                title: 'Laser Hair Removal',
                description: 'Advanced laser technology for permanent hair reduction with minimal discomfort',
                icon: '✨',
                cta: 'Know More'
              },
              {
                title: 'GFC Therapy',
                description: 'Growth Factor Concentrate therapy for hair loss and skin rejuvenation',
                icon: '💉',
                cta: 'Know More'
              },
              {
                title: 'Anti-Aging Treatment',
                description: 'Advanced treatments to reduce wrinkles and restore youthful skin',
                icon: '🌟',
                cta: 'Know More'
              },
              {
                title: 'STD Checkup & Treatment',
                description: 'Confidential and comprehensive STD testing and treatment services',
                icon: '🔬',
                cta: 'Know More'
              },
              {
                title: 'Acne Treatment',
                description: 'Effective acne solutions for clear, healthy skin',
                icon: '🧴',
                cta: 'Know More'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  {service.cta} <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section id="treatments" className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Most sought-after dermatology treatments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Melasma Treatment', image: '🌅' },
              { name: 'Acne Treatment', image: '✨' },
              { name: 'Allergy Test & Treatment', image: '🧪' },
              { name: 'Wart Removal', image: '🎯' },
              { name: 'STD Testing & Treatment', image: '🔬' },
              { name: 'Hydrafacial', image: '💧' },
              { name: 'PRP/Growth Factor', image: '💉' },
              { name: 'Chemical Peeling', image: '🧴' }
            ].map((treatment, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-pointer">
                <div className="text-5xl mb-4 text-center">{treatment.image}</div>
                <h3 className="font-semibold text-gray-900 text-center">{treatment.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Treatments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Kinds of Dermatology Treatment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive skin care solutions for all conditions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              'Allergy Testing (Patch/Prick)',
              'Vitiligo Treatment',
              'Fungal Infection Treatment',
              'STD Testing & Treatment',
              'Growth Factor Injection (GFC)',
              'Laser Hair Removal'
            ].map((treatment, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg hover:bg-primary-50 transition cursor-pointer">
                <CheckCircle className="text-primary-600" size={20} />
                <span className="text-gray-700 font-medium">{treatment}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition font-medium">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pick Your Treatment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from our wide range of specialized treatments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Face Treatments', description: 'Rejuvenate your facial skin', icon: '😊' },
              { title: 'Skin Treatments', description: 'Comprehensive skin care', icon: '🧴' },
              { title: 'Chemical Peeling', description: 'Renew your skin', icon: '✨' },
              { title: 'HydraFacial', description: 'Deep cleansing treatment', icon: '💧' },
              { title: 'Laser Hair Removal', description: 'Permanent hair reduction', icon: '🔥' },
              { title: 'Hair Loss & GFC Therapy', description: 'Restore hair growth', icon: '💇' }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition group cursor-pointer">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Now <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Doctor Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Dr. Sharma – Top Dermatologist in Nepal</h2>
              <p className="text-gray-600 mb-6">
                With years of experience and specialized training, Dr. Sharma provides expert dermatological care for patients of all ages. From pediatric dermatology to geriatric skin care, our clinic is equipped for the whole family.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={20} />
                  <span className="font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium">5000+ Happy Patients</span>
                </div>
              </div>
              <button className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition font-medium">
                Learn More About Dr. Sharma
              </button>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">👨‍⚕️</div>
                <p className="text-xl font-semibold text-gray-800">Dr. Sharma</p>
                <p className="text-gray-600">Dermatologist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Reviews & Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See what our patients say about their experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', rating: 5, text: 'Excellent service and professional care. Dr. Sharma is amazing!' },
              { name: 'Rajesh K.', rating: 5, text: 'Best laser hair removal experience. Highly recommended!' },
              { name: 'Priya S.', rating: 5, text: 'Finally found a solution for my acne. Thank you Sahara Skin Clinic!' }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <p className="font-semibold text-gray-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Appointment?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step towards healthier skin
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="tel:+9779801358600" className="bg-white text-primary-600 px-8 py-3 rounded-full hover:bg-gray-100 transition font-medium flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now: +977 9801358600
              </a>
              <button className="bg-accent-500 text-white px-8 py-3 rounded-full hover:bg-accent-600 transition font-medium flex items-center justify-center gap-2">
                <Calendar size={20} />
                Book Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Have questions? Reach out to us and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+977 9801358600</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">4th Floor Bishal Bhawan, Basundhara Chowki, Kathmandu, Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">Sun - Fri: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition" placeholder="+977 XXXXXXXXXX" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition resize-none" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sahara Skin Clinic</h3>
              <p className="text-gray-400">
                Best skin clinic in Kathmandu providing expert dermatological care for all skin conditions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Allergy Testing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Laser Hair Removal</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Acne Treatment</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">STD Testing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-primary-600 transition"><Facebook size={20} /></a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-primary-600 transition"><Twitter size={20} /></a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-primary-600 transition"><Instagram size={20} /></a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-primary-600 transition"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sahara Skin Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
