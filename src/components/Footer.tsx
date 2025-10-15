import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const branches = [
    { name: 'Branch 1', location: 'Moola Palayam, Erode' },
    { name: 'Branch 2', location: 'Sirupooluvapatti, Tiruppur' },
    { name: 'Branch 3', location: 'Ring Road, Erode' }
  ];

  const services = [
    'MS Grill Window',
    'Compound Gate',
    'Rolling Shutter',
    'Shed Work',
    'Kerala Style Roofing',
    'MS Ladder'
  ];

  return (
    <footer className="bg-[#4B4B4B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#003366] to-[#E67E22] rounded-lg flex items-center justify-center">
                <span style={{ fontSize: '1rem', fontWeight: '700' }}>G</span>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700' }}>GMS CHITRA & CO</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#C0C0C0' }}>
              Steel Fabrication and Roofing Solutions since 1990's. Quality workmanship with trusted service.
            </p>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5 text-[#C0C0C0] hover:text-[#E67E22] cursor-pointer transition-colors" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5 text-[#C0C0C0] hover:text-[#E67E22] cursor-pointer transition-colors" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="w-5 h-5 text-[#C0C0C0] hover:text-[#E67E22] cursor-pointer transition-colors" />
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span style={{ fontSize: '0.875rem', color: '#C0C0C0' }} className="hover:text-[#E67E22] cursor-pointer transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div className="space-y-4">
            <h4 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Our Branches</h4>
            <div className="space-y-3">
              {branches.map((branch, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#E67E22] mt-1 flex-shrink-0" />
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: '500' }}>{branch.name}</p>
                    <p style={{ fontSize: '0.75rem', color: '#C0C0C0' }}>{branch.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#E67E22]" />
                <span style={{ fontSize: '0.875rem' }}>90955 66251</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#E67E22]" />
                <span style={{ fontSize: '0.875rem' }}>99655 82851</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#E67E22]" />
                <span style={{ fontSize: '0.875rem' }}>info@gmschitra.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6c757d] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p style={{ fontSize: '0.875rem', color: '#C0C0C0' }}>
              © 2025 GMS CHITRA & CO. All rights reserved.
            </p>
            <p style={{ fontSize: '0.875rem', color: '#C0C0C0' }}>
              Crafting Strength and Trust Since 1990's
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}