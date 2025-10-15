import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import AnimatedSection from './AnimatedSection';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['90955 66251', '99655 82851'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['gmschitraco@gmail.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 8:00 AM - 7:00 PM', 'Sunday: 9:00 AM - 5:00 PM'],
      action: 'Visit Us'
    }
  ];

  const branches = [
    {
      name: 'Main Branch & Workshop',
      location: 'Moola Palayam, Erode',
      phone: '90955 66251',
      type: 'Headquarters',
      services: ['Manufacturing', 'Custom Fabrication', 'Quality Control']
    },
    {
      name: 'Service Center',
      location: 'Sirupooluvapatti, Tiruppur',
      phone: '99655 82851',
      type: 'Service Branch',
      services: ['Installation', 'Maintenance', 'Customer Support']
    },
    {
      name: 'Sales Office',
      location: 'Ring Road, Erode',
      phone: '90955 66251',
      type: 'Sales Branch',
      services: ['Sales Consultation', 'Project Planning', 'Quotations']
    }
  ];

  const services = [
    'MS Grill Window',
    'MS Compound Gate',
    'Rolling Shutter',
    'MS Ladder',
    'Roofing Solutions',
    'Elevation & Pergola Works',
    'Custom Fabrication',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#003366] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 style={{ fontSize: '3rem', fontWeight: '700' }} className="mb-4">
              Contact Us
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#C0C0C0' }}>
              Get in touch for your steel fabrication and roofing solution needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E67E22] rounded-full mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003366' }} className="mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} style={{ fontSize: '1rem', color: '#4B4B4B' }}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white"
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#003366' }}>
                    Send Us a Message
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: '#4B4B4B' }}>
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        </motion.div>
                        <motion.h3
                          style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003366' }}
                          className="mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          Message Sent Successfully!
                        </motion.h3>
                        <motion.p
                          style={{ fontSize: '0.875rem', color: '#4B4B4B' }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          Thank you for your inquiry. We'll contact you soon.
                        </motion.p>
                      </motion.div>
                    ) : (
                      <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <Label htmlFor="service">Service Required</Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22]"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            required
                            className="mt-1"
                            placeholder="Please describe your requirements in detail..."
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="w-full bg-[#E67E22] hover:bg-[#d35400] text-white transition-all duration-300"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </Button>
                        </motion.div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="bg-gray-200 h-64 flex items-center justify-center rounded-t-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.581243260747!2d77.71674757449418!3d11.292161849470308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96ffb335aab57%3A0x479bb5459ee987f!2sGMS%20Chitra%20%26%20Co!5e0!3m2!1sen!2sin!4v1759677332832!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="p-6">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003366' }} className="mb-4">
                      Visit Our Main Workshop
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#4B4B4B' }} className="mb-4">
                      See our state-of-the-art fabrication facility and meet our expert team.
                      We welcome site visits by appointment.
                    </p>
                    <Button
                      variant="outline"
                      className="border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white"
                      onClick={() => {
                        const destination = "11.292161849470308,77.71674757449418"; // GMS Chitra & Co coordinates
                        const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
                        window.open(url, "_blank");
                      }}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>

                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 p-3 rounded-full">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#003366' }}>
                        Quick Response on WhatsApp
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#4B4B4B' }}>
                        Get instant quotes and quick responses
                      </p>
                    </div>
                    <Button
  className="bg-green-500 hover:bg-green-600 text-white"
  onClick={() => {
    const phoneNumber = "919095566251"; 
    const message = encodeURIComponent("Hello! I’d like to know more about your steel fabrication services.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  }}
>
  Chat Now
</Button>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#003366' }} className="mb-4">
              Our Branch Locations
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4B4B4B' }}>
              Visit any of our three convenient locations across Tamil Nadu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003366' }}>
                      {branch.name}
                    </h3>
                    <div className="bg-[#E67E22] text-white px-2 py-1 rounded text-xs">
                      {branch.type}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#E67E22] mt-1 flex-shrink-0" />
                      <p style={{ fontSize: '1rem', color: '#4B4B4B' }}>
                        {branch.location}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#E67E22]" />
                      <p style={{ fontSize: '1rem', color: '#4B4B4B' }}>
                        {branch.phone}
                      </p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#003366' }} className="mb-2">
                        Services Available:
                      </h4>
                      <ul className="space-y-1">
                        {branch.services.map((service, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span style={{ fontSize: '0.75rem', color: '#4B4B4B' }}>
                              {service}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white"
                    >
                      Contact This Branch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }} className="mb-4">
            Emergency Services Available
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#C0C0C0' }} className="mb-8">
            24/7 emergency repair and maintenance services for existing installations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              className="bg-[#E67E22] hover:bg-[#d35400] text-white px-8 py-3"
              style={{ fontSize: '1.125rem', fontWeight: '600' }}
            >
              Emergency Hotline
            </Button>
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>90955 66251</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>99655 82851</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}