'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Calendar,
  MapPin,
  Mail,
  User,
  CheckCircle,
  AlertCircle,
  Car,
  Phone,
  Send,
} from 'lucide-react';
import ParallaxLayer from '@/components/parallax-layer';
import ParallaxBackground from '@/components/parallax-background';

interface SalesRep {
  id: string;
  name: string;
  repId: string;
}

interface BookingData {
  name: string;
  email: string;
  phone: string;
  address: string;
  vehicleType: string;
  serviceType: string;
  package: string;
  avgPrice: number;
  message: string;
  serviceDate: string;
  serviceLocation: string;
  salesRepId: string;
}

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

export default function BookingPage() {
  const searchParams = useSearchParams();
  const repId = searchParams.get('rep');

  const [salesRep, setSalesRep] = useState<SalesRep | null>(null);
  const [isLoadingRep, setIsLoadingRep] = useState(true);
  const [repError, setRepError] = useState('');

  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    vehicleType: '',
    serviceType: '',
    package: '',
    avgPrice: 0,
    message: '',
    serviceDate: '',
    serviceLocation: '',
    salesRepId: repId || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [submitError, setSubmitError] = useState('');

  // Service types & packages
  const serviceTypes: ServiceType[] = [
    {
      id: 'tinting',
      name: 'Window Tinting',
      packages: [
        {
          id: 'Only windshield front or rear',
          name: 'Package 1',
          description: 'Only windshield front or rear',
          sedanPrice: 200,
          suvTruckPrice: 250,
        },
        {
          id: 'Only 2 front door windows and front windshield',
          name: 'Package 2',
          description: '2 front door windows and front windshield',
          sedanPrice: 350,
          suvTruckPrice: 400,
        },
        {
          id: 'Only 2 rear door windows and rear windshield',
          name: 'Package 3',
          description: '2 rear door windows and rear windshield',
          sedanPrice: 350,
          suvTruckPrice: 400,
        },
        {
          id: 'Only 2 windows front or rear',
          name: 'Package 4',
          description: 'Only 2 windows front or rear',
          sedanPrice: 200,
          suvTruckPrice: 250,
        },
        {
          id: '4 door windows, all small vent windows, and rear windshield',
          name: 'Package 5',
          description: '4 door windows, all small vent windows, and rear windshield',
          sedanPrice: 450,
          suvTruckPrice: 500,
        },
      ],
    },
    {
      id: 'ppf',
      name: 'Paint Protection Film (PPF)',
      packages: [
        {
          id: 'full-front',
          name: 'Full Front PPF',
          description: 'Front bumper, Headlights, Hood, Fenders, Mirrors',
          sedanPrice: 3000,
          suvTruckPrice: 3000,
        },
        {
          id: 'full-vehicle',
          name: 'Full Vehicle PPF',
          description: 'Complete vehicle protection',
          sedanPrice: 8000,
          suvTruckPrice: 8000,
        },
      ],
    },
  ];

  const availablePackages = formData.serviceType
    ? serviceTypes.find((s) => s.id === formData.serviceType)?.packages || []
    : [];

  // Auto-calc avgPrice
  useEffect(() => {
    if (formData.serviceType && formData.package && formData.vehicleType) {
      const service = serviceTypes.find((s) => s.id === formData.serviceType);
      const pkg = service?.packages.find((p) => p.id === formData.package);
      if (pkg) {
        const price =
          formData.vehicleType === 'suv' || formData.vehicleType === 'truck'
            ? pkg.suvTruckPrice
            : pkg.sedanPrice;
        setFormData((prev) => ({ ...prev, avgPrice: price }));
      }
    } else {
      setFormData((prev) => ({ ...prev, avgPrice: 0 }));
    }
  }, [formData.serviceType, formData.package, formData.vehicleType]);

  // Load sales rep
  useEffect(() => {
    if (!repId) {
      setRepError('No sales representative ID provided');
      setIsLoadingRep(false);
      return;
    }

    const fetchRep = async () => {
      try {
        const res = await fetch(`/api/validate-rep/${repId}`);
        const data = await res.json();

        if (data.success) {
          setSalesRep(data.data);
          setFormData((prev) => ({ ...prev, salesRepId: data.data.repId }));
        } else {
          setRepError(data.error || 'Invalid sales representative');
        }
      } catch (err) {
        setRepError('Failed to validate sales representative');
      } finally {
        setIsLoadingRep(false);
      }
    };

    fetchRep();
  }, [repId]);

  // Handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'serviceType') setFormData((prev) => ({ ...prev, package: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setBookingRef(data.data.bookingRef);
        setIsSubmitted(true);
      } else {
        setSubmitError(data.error || 'Failed to create booking');
      }
    } catch (err) {
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      vehicleType: '',
      serviceType: '',
      package: '',
      avgPrice: 0,
      message: '',
      serviceDate: '',
      serviceLocation: '',
      salesRepId: repId || '',
    });
    setIsSubmitted(false);
    setBookingRef('');
    setSubmitError('');
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <div className="bg-neutral-100 min-h-screen">
        {/* Success Page */}
        <section className="relative py-24 overflow-hidden">
          <ParallaxBackground speed={0.3} className="absolute inset-0 bg-gradient-to-br from-green-50 to-primary-50">
            <></>
          </ParallaxBackground>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ParallaxLayer speed={0.1} className="relative z-10">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
                  <CheckCircle size={40} />
                </div>
                
                <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-6">
                  Booking Confirmed!
                </h1>
                
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
                  <h2 className="text-lg font-semibold text-green-800 mb-2">Booking Reference</h2>
                  <code className="text-2xl font-mono text-green-700 bg-white px-4 py-2 rounded-lg">
                    {bookingRef}
                  </code>
                </div>

                <div className="text-left max-w-md mx-auto space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <User size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Customer</p>
                      <p className="text-gray-600">{formData.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Service Date</p>
                      <p className="text-gray-600">{new Date(formData.serviceDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Service Location</p>
                      <p className="text-gray-600">{formData.serviceLocation}</p>
                    </div>
                  </div>

                  {salesRep && (
                    <div className="flex items-start space-x-3">
                      <Car size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Sales Representative</p>
                        <p className="text-gray-600">{salesRep.name}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mb-8">
                  <h3 className="font-semibold text-primary-800 mb-2">What's Next?</h3>
                  <p className="text-primary-700 text-sm">
                    We'll contact you within 24 hours to confirm your appointment details and answer any questions. 
                    Please save your booking reference number for future correspondence.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetForm}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book Another Service
                  </button>
                  <a
                    href="/"
                    className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Return to Home
                  </a>
                </div>
              </div>
            </ParallaxLayer>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-neutral-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <ParallaxBackground speed={0.3} className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50">
          <></>
        </ParallaxBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxLayer speed={0.1} className="text-center relative z-10">
            <h1 className="text-4xl sm:text-6xl font-medium text-gray-900 mb-6 leading-tight">
              Book Your Mobile Service<span className="text-primary-600">.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Schedule your premium mobile auto spa service and we'll bring luxury vehicle protection directly to your location.
            </p>
          </ParallaxLayer>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
              {submitError}
            </div>
          )} */}

           {/* Sales Rep Info */}
          {isLoadingRep ? (
            <div className="text-center mb-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-gray-500">Validating sales representative...</p>
            </div>
          ) : repError ? (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-3">
                <AlertCircle size={24} className="text-red-600" />
                <div>
                  <h3 className="font-semibold text-red-800">Invalid Sales Representative</h3>
                  <p className="text-red-700">{repError}</p>
                </div>
              </div>
            </div>
          ) : salesRep && (
            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle size={24} className="text-primary-600" />
                <div>
                  <h3 className="font-semibold text-primary-800">Sales Representative</h3>
                  <p className="text-primary-700">
                    You're booking with <strong>{salesRep.name}</strong> (ID: {salesRep.repId})
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
              <div className="flex items-center space-x-2">
                <AlertCircle size={20} className="text-red-600" />
                <p className="text-red-700">{submitError}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-3xl shadow p-8">
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg"
              />
            </div>

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />

            {/* Address */}
            <textarea
              name="address"
              placeholder="Service Address *"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />

            {/* Vehicle Type */}
            <select
              name="vehicleType"
              required
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="">Select Vehicle Type *</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV/Crossover</option>
              <option value="truck">Pickup Truck</option>
              <option value="van">Van/Minivan</option>
            </select>

            {/* Service Type */}
            <select
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="">Select Service Type *</option>
              {serviceTypes.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>

            {/* Packages */}
            {availablePackages.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4">
                {availablePackages.map((pkg) => {
                  const isSelected = formData.package === pkg.id;
                  const price =
                    formData.vehicleType === 'suv' || formData.vehicleType === 'truck'
                      ? pkg.suvTruckPrice
                      : pkg.sedanPrice;
                  return (
                    <button
                      type="button"
                      key={pkg.id}
                      onClick={() => setFormData((prev) => ({ ...prev, package: pkg.id }))}
                      className={`p-4 border rounded-lg text-left ${
                        isSelected ? 'bg-primary-100 border-primary-600' : ''
                      }`}
                    >
                      <h4 className="font-semibold">{pkg.name}</h4>
                      <p className="text-sm text-gray-600">{pkg.description}</p>
                      <p className="mt-2 font-bold text-primary-700">${price}</p>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Avg Price */}
            {formData.avgPrice > 0 && (
              <div className="bg-primary-50 border p-4 rounded-lg">
                <p>
                  <strong>Estimated Price:</strong> ${formData.avgPrice}
                </p>
              </div>
            )}

            {/* Date + Location */}
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="date"
                name="serviceDate"
                required
                min={getMinDate()}
                value={formData.serviceDate}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg max-h-fit self-start"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Additional Details "
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg self-start"
              />
            </div>


            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || !salesRep}
              className="w-full bg-primary-600 text-white py-3 rounded-full flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <div className="animate-spin h-5 w-5 border-b-2 border-white rounded-full"></div>
              ) : (
                <Send size={18} />
              )}
              <span>{isSubmitting ? 'Booking...' : 'Book Service'}</span>
            </button>
          </form>
          {/* Error Message */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mt-6">
              <div className="flex items-center space-x-2">
                <AlertCircle size={20} className="text-red-600" />
                <p className="text-red-700">{submitError}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}