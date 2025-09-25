import React from 'react';
import Link from 'next/link';
import { Shield, Sun, Eye, Car, ArrowRight, CheckCircle, Star } from 'lucide-react';
import ParallaxBackground from '@/components/parallax-background';
import { Bayon } from 'next/font/google';
import ParallaxLayer from '@/components/parallax-layer';
import ScrollReveal from '@/components/ScrollReveal';

const bayon = Bayon({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-neutral-100">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu will-change-transform"
            style={{
              backgroundImage: "url(/tinting-image.webp)" //'url(https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 to-secondary-900/70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in" style={{ animationDuration: '0.5s', }}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-bayon text-white mb-10 leading-tight">
              We tint WHEN you want and WHERE you want
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Rodeo Tint, we specialize in providing high-end professional mobile auto spa services. We bring luxury window tinting and paint protection film directly to your location.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/services"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 will-change-transform"
              >
                <span>Our Services</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 will-change-transform"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-t from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-6">
              Why choose mobile tinting?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the convenience of professional window tinting that comes to your location.
            </p>
          </ParallaxLayer>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Sun,
                  title: 'UV Protection',
                  description: 'Block up to 99% of harmful UV rays that can damage your skin and fade interiors.'
                },
                {
                  icon: Eye,
                  title: 'Glare Reduction',
                  description: 'Reduce eye strain and improve visibility by minimizing harsh sunlight glare.'
                },
                {
                  icon: Shield,
                  title: 'Privacy & Security',
                  description: 'Enhanced privacy and security with films that prevent easy viewing from outside.'
                },
                {
                  icon: Car,
                  title: 'Mobile Auto Spa',
                  description: 'Fully-outfitted mobile service van brings luxury services to your home, office, or desired location.'
                }
              ].map((benefit, index) => (
                <ScrollReveal key={benefit.title} direction='up' duration={0.5} delay={index * 0.3} distance={30}>
                  <div
                    key={benefit.title}
                    className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary-100/50 hover:bg-primary-50/80 hover:border-primary-200 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700 rounded-2xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg group-hover:from-primary-200 group-hover:to-primary-300">
                      <benefit.icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.15} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-6">
              Premium mobile services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional mobile auto spa services combining convenience, quality, and protection for luxury vehicles.
            </p>
          </ParallaxLayer>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Premium Window Tinting',
                  description: 'Reduce heat, enhance privacy, and protect your vehicle\'s interior with professionally installed, high-performance window tint.',
                  features: ['99% UV protection', 'Superior heat rejection', 'No signal interference', 'Lifetime warranty'],
                  image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                },
                {
                  title: 'Paint Protection Film (PPF)',
                  description: 'Shield your vehicle\'s paint from scratches, chips, and environmental damage with invisible, long-lasting paint protection film.',
                  features: ['Invisible protection', 'Self-healing technology', 'Preserves showroom finish', 'Long-lasting durability'],
                  image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
              ].map((service, index) => (
                <ScrollReveal key={service.title} direction={index % 2 === 0 ? 'left' : 'right'} duration={0.5} distance={30}>
                  <div
                    key={service.title}
                    className="bg-white/90 backdrop-blur-sm border border-secondary-100/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary-200 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-3">
                            <CheckCircle size={16} className="text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href="/services"
                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                      >
                        <span>Book Now</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
        </div>
      </section>

      {/* Trust Section */}
      {/* <section className="py-20 bg-gradient-to-br from-white to-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-6">
              Trusted by luxury dealerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by luxury dealerships for post-sale add-on services and by discerning car owners who demand the best.
            </p>
          </ParallaxLayer>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '3000+', label: 'Vehicles Serviced' },
              { number: '15+', label: 'Years Experience' },
              { number: '98%', label: 'Customer Satisfaction' },
              { number: 'Premium', label: 'Materials Only' }
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="space-y-2 transform hover:scale-110 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12 transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
            <ParallaxLayer speed={0.05}>
              <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Ready for premium mobile service?
                </h3>
                <p className="text-xl text-gray-600 max-w-lg">
                  Book your mobile auto spa service today and experience luxury vehicle protection at your location.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                >
                  Book Your Mobile Service Today
                </Link>
                <Link
                  href="tel:555-123-4567"
                  className="border-2 border-primary-600 bg-white/80 backdrop-blur-sm text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  Call Now
                </Link>
              </div>
            </div>
            </ParallaxLayer>
          </div>
        </div>
      </section> */}
    </div>
  );
}