import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react';
import ParallaxLayer from '@/components/parallax-layer';
import ParallaxBackground from '@/components/parallax-background';
import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  return (
    <div className="bg-neutral-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-t from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center relative z-10">
            <h1 className="text-4xl sm:text-6xl font-medium text-gray-900 mb-6 leading-tight">
              We tint when you want and where you want<span className="text-primary-600">.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Rodeo Tint, we specialize in providing high-end professional mobile auto spa services that bring luxury and convenience directly to our customers.
            </p>
          </ParallaxLayer>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction='left' duration={0.5} distance={50}>
              <ParallaxLayer speed={0.1}>
                <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-8 leading-tight">
                  Our mission.
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    At Rodeo Tint, our mission is simple: to protect, enhance, and elevate your car's appearance—without any inconvenience to you.
                  </p>
                  <p>
                    Equipped with a fully-outfitted mobile service van, we bring luxury window tinting and paint protection film (PPF) directly to your home, office, or desired location.
                  </p>
                  <p>
                    We pride ourselves on offering an exclusive, seamless experience for every client, making premium vehicle protection an effortless part of the luxury car ownership experience.
                  </p>
                </div>
              </ParallaxLayer>
            </ScrollReveal>
            <ScrollReveal direction='right' duration={0.5} distance={50}>
              <ParallaxLayer speed={0.05}>
                <div className="aspect-w-16 aspect-h-10">
                  <img
                    src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Professional window tinting service"
                    className="w-full h-96 object-cover rounded-3xl shadow-lg"
                  />
                </div>
              </ParallaxLayer>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-t from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-6">
              Our values.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core principles of quality, integrity, and customer satisfaction.
            </p>
          </ParallaxLayer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Materials',
                description: 'We use only high-end materials and premium films with the highest standards of precision and quality.'
              },
              {
                icon: Users,
                title: 'Luxury Experience',
                description: 'We provide an exclusive, seamless experience for every client with meticulous attention to detail.'
              },
              {
                icon: Clock,
                title: 'Convenience',
                description: 'Mobile service at your home, office, or desired location. No need for extra trips to the tint shops.'
              },
              {
                icon: Shield,
                title: 'Protection',
                description: 'Enjoy a lifetime warranty provided for your convenience with every service we deliver.' // Lifetime warranty included for your convenience on all provided services.
              }
            ].map((value, index) => (
              <ScrollReveal key={value.title} direction='up' duration={0.5} delay={index * 0.3} distance={30}>
                <div
                  className="bg-white p-8 min-h-[250px] lg:min-h-[380px] rounded-3xl items-center justify-center hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-6">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-6">
              Meet our technicians.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced, meticulous technicians bring years of expertise and passion for precision installations to every project.
            </p>
          </ParallaxLayer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Alex Rodriguez',
                role: 'Lead Technician & Founder',
                experience: '15+ years',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
              },
              {
                name: 'Marcus Thompson',
                role: 'PPF Specialist',
                experience: '8+ years',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
              },
              {
                name: 'Jordan Kim',
                role: 'Tinting Expert',
                experience: '10+ years',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
              }
            ].map((member) => (
              <div key={member.name} className="text-center hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-6">
              Why choose us?
            </h2>
          </ParallaxLayer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 lg:mt-4">
              {[
                'High-end materials and premium films only',
                'Experienced, meticulous technicians with precision installations',
                'State-of-the-art tools and precision installation',
                'Convenient on-site service—no dealership trips required',
                'Fast turnaround times without compromising quality'
              ].map((feature, index) => (
                <ScrollReveal key={index} direction='left' duration={0.5} delay={index * 0.3} distance={30}>
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{feature}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal direction='right' duration={0.5} distance={30}>
              <ParallaxLayer speed={0.05}>
                <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={24} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-2xl font-semibold text-gray-900">4.9/5 Customer Rating</p>
                    <p className="text-gray-600 mt-2">Based on 500+ reviews</p>
                  </div>
                  <blockquote className="text-lg text-gray-600 italic text-center leading-relaxed">
                    "Rodeo Tint provided an exceptional mobile service experience. The technician was professional, the installation was flawless, and the convenience of having it done at my office was incredible. Highly recommended!"
                  </blockquote>
                  <div className="text-center mt-6">
                    <p className="font-medium text-gray-900">Michael Chen</p>
                    <p className="text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </ParallaxLayer>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}