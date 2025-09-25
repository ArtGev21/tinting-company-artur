'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle, Calendar } from 'lucide-react';
import ParallaxLayer from '@/components/parallax-layer';
import ParallaxBackground from '@/components/parallax-background';
import ScrollReveal from '@/components/ScrollReveal';

interface ServicePackage {
  id: string;
  name: string;
  description: string;
  sedanPrice: number;
  suvTruckPrice: number;
}

interface ServiceType {
  id: string;
  name: string;
  packages: ServicePackage[];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    vehicleType: '',
    package: '',
    serviceDate: '', // ✅ new field
    message: '',
    avgPrice: 0,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  // Define services & packages
  const serviceTypes: ServiceType[] = [
    {
      id: 'tinting',
      name: 'Window Tinting',
      packages: [
        { id: 'Only windshield front or rear', name: 'Package 1', description: 'Only windshield front or rear', sedanPrice: 200, suvTruckPrice: 250 },
        { id: '2 front door windows and front windshield', name: 'Package 2', description: '2 front door windows and front windshield', sedanPrice: 350, suvTruckPrice: 400 },
        { id: '2 rear door windows and rear windshield', name: 'Package 3', description: '2 rear door windows and rear windshield', sedanPrice: 350, suvTruckPrice: 400 },
        { id: 'Only 2 windows front or rear', name: 'Package 4', description: 'Only 2 windows front or rear', sedanPrice: 200, suvTruckPrice: 250 },
        { id: '4 door windows, all small vent windows, and rear windshield', name: 'Package 5', description: '4 door windows, all small vent windows, and rear windshield', sedanPrice: 450, suvTruckPrice: 500 },
      ],
    },
    {
      id: 'ppf',
      name: 'Paint Protection Film (PPF)',
      packages: [
        { id: 'full-front', name: 'Full Front PPF', description: 'Front bumper, Headlights, Hood, Fenders, Mirrors', sedanPrice: 3000, suvTruckPrice: 3000 },
        { id: 'full-vehicle', name: 'Full Vehicle PPF', description: 'Complete vehicle protection', sedanPrice: 8000, suvTruckPrice: 8000 },
      ],
    },
  ];

  const availablePackages = formData.serviceType
    ? serviceTypes.find(s => s.id === formData.serviceType)?.packages || []
    : [];

  // Update estimated price whenever service/package/vehicle changes
  useEffect(() => {
    if (formData.serviceType && formData.package && formData.vehicleType) {
      const service = serviceTypes.find(s => s.id === formData.serviceType);
      const pkg = service?.packages.find(p => p.id === formData.package);
      if (pkg) {
        const price = formData.vehicleType === 'suv' || formData.vehicleType === 'truck'
          ? pkg.suvTruckPrice
          : pkg.sedanPrice;
        setEstimatedPrice(price);
        setFormData(prev => ({ ...prev, avgPrice: price }));
      }
    } else {
      setEstimatedPrice(null);
      setFormData(prev => ({ ...prev, avgPrice: 0 }));
    }
  }, [formData.serviceType, formData.package, formData.vehicleType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'serviceType') setFormData(prev => ({ ...prev, package: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: '', email: '', phone: '', address: '',
          serviceType: '', vehicleType: '', package: '', serviceDate: '', message: '', avgPrice: 0
        });
        setEstimatedPrice(null);
        setTimeout(() => setIsSubmitted(false), 3000);
      } else alert(data.error || 'Something went wrong');
    } catch {
      alert('Network error. Please try again.');
    }
  };

  return (
    <div className="">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-t from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.2} className="text-center relative z-10">
            <h1 className="text-4xl sm:text-6xl font-medium text-gray-900 mb-6 leading-tight">
              Schedule your mobile service<span className="text-primary-600">.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready for premium mobile auto spa service? Schedule your appointment and we'll bring luxury vehicle protection to your preferred location.
            </p>
          </ParallaxLayer>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal direction="left" duration={1} delay={0.1} distance={150}>
            <ParallaxLayer speed={0.1} className="border-sm shadow-lg p-8 rounded-2xl bg-primary-50 backdrop-blur max-h-fit self-start">
              <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">Schedule your mobile service</h2>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-green-700">Thank you! We'll get back to you within 24 hours.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text" name="name" placeholder="Full Name *" required
                    value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600"
                  />
                  <input
                    type="email" name="email" placeholder="Email *" required
                    value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600"
                  />
                </div>

                {/* Phone + Address */}
                <input
                  type="tel" name="phone" placeholder="Phone Number *" required
                  value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600"
                />
                <input
                  type="text" name="address" placeholder="Address *" required
                  value={formData.address} onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600"
                />

                {/* Vehicle Type */}
                <select name="vehicleType" required value={formData.vehicleType} onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600">
                  <option value="">Select Vehicle Type *</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV/Crossover</option>
                  <option value="truck">Pickup Truck</option>
                  <option value="van">Van/Minivan</option>
                </select>

                {/* Service Date ✅ */}
                <div>
                  <div className="relative">
                    <input
                      type="date" name="serviceDate"
                      required
                      value={formData.serviceDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <select name="serviceType" required value={formData.serviceType} onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600">
                  <option value="">Select Service Type *</option>
                  {serviceTypes.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>

                {/* Package Selection */}
                {availablePackages.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {availablePackages.map(pkg => {
                      const isSelected = formData.package === pkg.id;
                      const price = formData.vehicleType === 'suv' || formData.vehicleType === 'truck'
                        ? pkg.suvTruckPrice
                        : pkg.sedanPrice;
                      return (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, package: pkg.id }))}
                          className={`p-4 border rounded-2xl cursor-pointer transition-all ${
                            isSelected ? 'border-primary-600 bg-primary-100' : 'border-neutral-300 hover:border-primary-500 hover:bg-primary-50'
                          }`}
                        >
                          <h4 className="text-lg font-semibold text-gray-900">{pkg.name}</h4>
                          <p className="text-gray-600 text-sm">{pkg.description}</p>
                          <p className="mt-2 text-primary-700 font-bold">${price}</p>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Estimated Price */}
                {estimatedPrice !== null && (
                  <div className="bg-secondary-50 border border-primary-200 rounded-lg p-4 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-primary-800">Average Price</h3>
                    <p className="text-2xl font-bold text-primary-900">${estimatedPrice}</p>
                  </div>
                )}

                <textarea
                  name="message" placeholder="Service Details & Preferred Location *" rows={4} required
                  value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-600"
                ></textarea>

                <button type="submit" className="w-full py-3 bg-primary-600 text-white rounded-full text-lg font-medium hover:bg-primary-700 transition flex items-center justify-center space-x-2">
                  <span>Schedule Mobile Service</span>
                  <Send size={20} />
                </button>
              </form>
            </ParallaxLayer>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" duration={1} delay={0.1} distance={150}>
            <ParallaxLayer speed={0.2} className="border-sm shadow-lg p-8 rounded-2xl bg-primary-50 backdrop-blur max-h-fit self-start">
              <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">Contact Info</h2>
              <div className="space-y-8">
                {[
                  { icon: Phone, title: 'Phone', info: '(323) 717-7202', description: 'Call during business hours' },
                  { icon: Mail, title: 'Email', info: 'rodeotint@gmail.com', description: 'We reply within 24 hours' },
                  { icon: Clock, title: 'Hours', info: 'Mon-Fri: 8AM - 5PM', description: 'Closed Sat & Sun' },
                ].map(c => (
                  <div key={c.title} className="flex space-x-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                      <c.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{c.title}</h3>
                      <p className="text-primary-600 font-medium mb-1">{c.info}</p>
                      <p className="text-gray-600 text-sm">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ParallaxLayer>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}