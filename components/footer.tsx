import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Rodeo Tint</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium mobile auto spa services specializing in window tinting and paint protection film.
            </p>
            <div className="flex items-center space-x-2 text-primary-400">
              <Clock size={16} />
              <span className="text-sm">Mon-Sat: 8AM - 6PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Premium Window Tinting</li>
              <li>Paint Protection Film (PPF)</li>
              <li>Ceramic Tint Options</li>
              <li>Mobile Installation</li>
              <li>Warranty Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">(323) 717-7202</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@rodeotint.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-gray-400 text-sm">
              © {year} Rodeo Tint. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <p className="text-gray-400 text-sm">Website Developed By:</p>
              <a
                href="https://www.citrusappslab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 text-sm hover:text-primary-200 transition-colors"
              >
                Citrus Apps Lab
              </a>
            </div>
          </div>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div> */}
        </div>
      </div>
    </footer>
  );
}