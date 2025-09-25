import Link from 'next/link';
import { Car, Home, Building, Shield, Sun, Eye, CheckCircle, ArrowRight } from 'lucide-react';
import ParallaxLayer from '@/components/parallax-layer';
import ParallaxBackground from '@/components/parallax-background';
import ScrollReveal from '@/components/ScrollReveal';

export default function Services() {
  // Define packages data
  const tintingPackages = [
    {
      id: 'package1',
      name: 'Package 1',
      description: 'Only windshield front or rear',
      sedanPrice: 200,
      suvTruckPrice: 250
    },
    {
      id: 'package2',
      name: 'Package 2',
      description: '2 front door windows and front windshield',
      sedanPrice: 350,
      suvTruckPrice: 400
    },
    {
      id: 'package3',
      name: 'Package 3',
      description: '2 rear door windows and rear windshield',
      sedanPrice: 350,
      suvTruckPrice: 400
    },
    {
      id: 'package4',
      name: 'Package 4',
      description: 'Only 2 windows front or rear',
      sedanPrice: 200,
      suvTruckPrice: 250
    },
    {
      id: 'package5',
      name: 'Package 5',
      description: '4 door windows, all small vent windows, and rear windshield',
      sedanPrice: 450,
      suvTruckPrice: 500
    }
  ];

  const ppfPackages = [
    {
      id: 'full-front',
      name: 'Full Front PPF',
      description: 'Front bumper, Headlights, Hood, Fenders, Mirrors',
      sedanPrice: 3000,
      suvTruckPrice: 3000
    },
    {
      id: 'full-vehicle',
      name: 'Full Vehicle PPF',
      description: 'Complete vehicle protection',
      sedanPrice: 8000,
      suvTruckPrice: 8000
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-t from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center relative z-10">
            <h1 className="text-4xl sm:text-6xl font-medium text-gray-900 mb-6 leading-tight">
              Premium Mobile Tint & Paint Protection Services<span className="text-primary-600">.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Rodeo Tint, we deliver professional mobile auto spa services for luxury vehicles, combining convenience, quality, and protection.
            </p>
          </ParallaxLayer>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-6">
              Our service offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are designed to enhance your vehicle's appearance, protect your investment, and provide a seamless experience.
            </p>
          </ParallaxLayer>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
            {[
              {
                icon: Car,
                title: 'Premium Window Tinting',
                description: 'Reduce heat, enhance privacy, and protect your vehicle\'s interior with our professionally installed, high-performance window tint.',
                image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                features: [
                  'Superior heat rejection',
                  'UV protection (99% UVA/UVB)',
                  'Enhanced privacy and comfort',
                  'Top-quality films',
                  'Professional installation',
                  'Lifetime warranty'
                ],
                types: [
                  { name: 'Ceramic Films', description: 'Premium ceramic with superior heat rejection and clarity' },
                  { name: 'Carbon Films', description: 'Durable carbon films with excellent performance' },
                  { name: 'Hybrid Films', description: 'Advanced hybrid technology for optimal results' }
                ]
              },
              {
                icon: Shield,
                title: 'Paint Protection Film (PPF)',
                description: 'Shield your vehicle\'s paint from scratches, chips, and environmental damage with invisible, long-lasting paint protection film.',
                image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                features: [
                  'Invisible protection',
                  'Self-healing technology',
                  'Preserves showroom finish',
                  'Long-lasting durability',
                  'Precise installations',
                  'Peace of mind protection'
                ],
                types: [
                  { name: 'Full Front Coverage', description: 'Complete protection for hood, bumper, and headlights' },
                  { name: 'Partial Coverage', description: 'Strategic protection for high-impact areas' },
                  { name: 'Custom Coverage', description: 'Tailored protection based on your specific needs' }
                ]
              }
            ].map((service, index) => (
              <ScrollReveal key={service.title} direction={index % 2 === 0 ? 'left' : 'right'} duration={1} delay={0.1} distance={50}>
                <div key={service.title} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <service.icon size={24} className="text-primary-600" />
                      <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-primary-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Film Options:</h4>
                      <div className="space-y-3">
                        {service.types.map((type) => (
                          <div key={type.name} className="border border-neutral-200 rounded-lg p-3">
                            <h5 className="font-medium text-gray-900 text-sm">{type.name}</h5>
                            <p className="text-gray-600 text-xs mt-1">{type.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Book Service</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-20 bg-gradient-to-t from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-6">
              Service Packages & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All packages come with a lifetime warranty. For SUVs and trucks, add $50 to each tinting package.
            </p>
          </ParallaxLayer>

          <div className="">
            {/* Tinting Packages */}
            <div className="">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Window Tinting Packages</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex items-center justify-center mb-16">
                {tintingPackages.map((pkg, index) => (
                  <ScrollReveal key={pkg.id} direction={index % 2 === 0 ? 'left' : 'right'} duration={1} delay={0.1} distance={50}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xl font-semibold text-gray-900">{pkg.name}</h4>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary-600">${pkg.sedanPrice}</div>
                        </div>
                      </div>
                      <p className="text-gray-600">{pkg.description}</p>
                      <div className="bg-primary-50 border border-primary-100 rounded-lg p-3">
                        <p className="text-sm text-primary-700">
                          <strong>SUV/Truck:</strong> ${pkg.suvTruckPrice} (includes $50 surcharge)
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* PPF Packages */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Paint Protection Film Packages</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex items-center justify-center mb-16">
                {ppfPackages.map((pkg, index) => (
                  <ScrollReveal key={pkg.id} direction={index % 2 === 0 ? 'left' : 'right'} duration={1} delay={0.1} distance={50}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-gray-900">{pkg.name}</h4>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary-600">${pkg.sedanPrice}</div>
                          <div className="text-sm text-gray-500">All Vehicle Types</div>
                        </div>
                      </div>
                      <p className="text-gray-600">{pkg.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
                
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-6">
              Why choose Rodeo Tint?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the convenience of professional mobile auto spa services with high-end materials and expert installation.
            </p>
          </ParallaxLayer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: 'Premium Materials',
                stat: 'Up to 70%',
                description: 'High-end materials and premium films that provide superior performance and lasting quality.'
              },
              {
                icon: Eye,
                title: 'Expert Installation',
                stat: 'Precision',
                description: 'Experienced, meticulous technicians with precision installations that meet the highest standards.'
              },
              {
                icon: Car,
                title: 'Mobile Service',
                stat: 'At Your Location',
                description: 'Convenient on-site service at your home, office, or desired location. No need for extra trips to the tint shop.'
              }
            ].map((benefit, index) => (
              <ScrollReveal key={benefit.title} direction='up' duration={0.5} delay={index * 0.3} distance={30}>
                <div key={benefit.title} className="text-center p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white/60 rounded-3xl shadow-sm hover:shadow-md">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-3xl mb-6">
                    <benefit.icon size={36} />
                  </div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-t from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-6">
              Our process.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From booking to completion, we make premium mobile auto spa services simple and convenient.
            </p>
          </ParallaxLayer>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Schedule Service',
                description: 'Book your mobile service online or by phone at your preferred location and time.'
              },
              {
                step: '02',
                title: 'Mobile Service Van',
                description: 'Our fully-outfitted mobile service van arrives at your location with premium equipment.'
              },
              {
                step: '03',
                title: 'Precision Installation',
                description: 'Meticulous installation by experienced technicians using high-end materials and premium films.'
              },
              {
                step: '04',
                title: 'Seamless Experience',
                description: 'Final inspection and quality guarantee ensuring an exclusive, seamless experience.'
              }
            ].map((process, index) => (
              <ScrollReveal key={process.title} direction='up' duration={0.5} delay={index * 0.3} distance={30}>
                <div key={process.step} className="text-center max-h-fit self-start p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-300 bg-white/60 rounded-3xl shadow-sm hover:shadow-md" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl font-bold text-primary-600 mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-b from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ParallaxLayer speed={0.05}>
          <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-6">
            Ready for premium mobile service?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Schedule your mobile auto spa service today and experience luxury vehicle protection at your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule Your Mobile Service Today
            </Link>
            <Link
              href="tel:555-123-4567"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Call (323) 717-7202
            </Link>
          </div>
          </ParallaxLayer>
        </div>
      </section>
    </div>
  );
}