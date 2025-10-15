import { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AnimatedSection from './AnimatedSection';
import CounterAnimation from './CounterAnimation';
import { 
  Shield, 
  Users, 
  Clock, 
  Award, 
  Building, 
  Home, 
  Layers, 
  Settings, 
  Phone,
  Star
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const highlights = [
    { icon: Award, title: '30+ Years Experience', subtitle: 'Since 1990\'s', count: 30 },
    { icon: Shield, title: 'Quality Workmanship', subtitle: 'Premium materials', count: 100 },
    { icon: Users, title: 'Trusted by 1000+ Clients', subtitle: 'Satisfied customers', count: 1000 },
    { icon: Clock, title: 'On-Time Project Delivery', subtitle: 'Reliable service', count: 98 }
  ];

  const products = [
    {
      title: 'MS Grill Window',
      description: '13mm/16mm rods with full finishing (welding, grinding, polishing, base painting)',
      image: 'https://images.unsplash.com/photo-1759064776046-45b988af4b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGdhdGVzJTIwc3RlZWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NTk2NTk5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'MS Compound Gate',
      description: 'Folding, Swing, Rolling types with heavy-duty construction',
      image: 'https://images.unsplash.com/photo-1759064776046-45b988af4b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGdhdGVzJTIwc3RlZWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NTk2NTk5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Rolling Shutter',
      description: 'Heavy-duty with smooth operation for commercial and residential use',
      image: 'https://images.unsplash.com/photo-1641612717055-deea47c3e948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsaW5nJTIwc2h1dHRlciUyMG1ldGFsJTIwZG9vcnxlbnwxfHx8fDE3NTk2NTk5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'MS Ladder',
      description: 'Domestic, Rolling Step, Industrial models with safety standards',
      image: 'https://images.unsplash.com/photo-1606713174708-20489b8d0d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGxhZGRlciUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5NjU5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Roofing Solutions',
      description: 'GI coat, Aluminium, UPVC, Puff Panel, Kerala Clay Tile roofing',
      image: 'https://images.unsplash.com/photo-1759395162292-728a3279b926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9vZmluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTk1NjE3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Elevation & Pergola Works',
      description: 'Custom aesthetic steel structures for modern architecture',
      image: 'https://images.unsplash.com/photo-1630674997049-4af26f23c238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHN0cnVjdHVyZSUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTY1OTk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const services = [
    { icon: Building, name: 'Grill Window' },
    { icon: Home, name: 'Compound Gate' },
    { icon: Layers, name: 'Rolling Shutter' },
    { icon: Settings, name: 'Shed Work' },
    { icon: Building, name: 'Kerala Style Roofing' },
    { icon: Settings, name: 'MS Ladder' },
    { icon: Building, name: 'Custom Fabrication' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      comment: 'Excellent quality work on our compound gate. Professional team and timely delivery.',
      project: 'Compound Gate Installation'
    },
    {
      name: 'Priya Nair',
      rating: 5,
      comment: 'Outstanding roofing solution for our warehouse. Highly recommend GMS Chitra & Co.',
      project: 'Industrial Roofing'
    },
    {
      name: 'Suresh Babu',
      rating: 5,
      comment: 'Quality craftsmanship and reliable service. Our steel ladder is built to last.',
      project: 'MS Ladder Fabrication'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black/70 to-black/50 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1738162837335-3745e5d16c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3AlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc1OTY1OTk3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/80 to-[#4B4B4B]/60" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            style={{ fontSize: '3.5rem', fontWeight: '700', color: 'white' }} 
            className="mb-4 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GMS CHITRA & CO
          </motion.h1>
          <motion.h2 
            style={{ fontSize: '1.5rem', fontWeight: '400', color: '#C0C0C0' }} 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Steel Fabrication and Roofing Solutions – Since 1990's
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={() => onNavigate('products')}
              className="bg-[#E67E22] hover:bg-[#d35400] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ fontSize: '1.125rem' }}
            >
              Explore Our Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-[#E67E22] rounded-full mb-4"
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 10px 30px rgba(230, 126, 34, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#003366' }} className="mb-2">
                    <CounterAnimation 
                      value={highlight.count} 
                      suffix={index === 0 ? '+' : index === 2 ? '+' : index === 3 ? '%' : '%'} 
                    />
                    {index === 0 ? ' Years Experience' : index === 1 ? '% Quality' : index === 2 ? ' Clients' : ' On-Time'}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#4B4B4B' }}>
                    {highlight.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#003366' }} className="mb-4">
              Our Products
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4B4B4B' }}>
              High-quality steel fabrication and roofing solutions
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <motion.div 
                    className="aspect-w-16 aspect-h-9 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003366' }} className="mb-2">
                      {product.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#4B4B4B' }} className="mb-4">
                      {product.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        onClick={() => onNavigate('contact')}
                        variant="outline" 
                        className="w-full border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white transition-all duration-300"
                      >
                        Request Quote
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white' }} className="mb-4">
              Our Services
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#C0C0C0' }}>
              Comprehensive steel fabrication and installation services
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 bg-[#E67E22] rounded-full mb-3"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 10px 30px rgba(230, 126, 34, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>
                <p style={{ fontSize: '0.875rem', color: 'white', fontWeight: '500' }}>
                  {service.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#003366' }} className="mb-4">
              What Our Clients Say
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4B4B4B' }}>
              Trusted by thousands of satisfied customers
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  transition: { duration: 0.3 } 
                }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <motion.div 
                      className="flex items-center mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-[#E67E22] fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <p style={{ fontSize: '0.875rem', color: '#4B4B4B' }} className="mb-4 italic">
                      "{testimonial.comment}"
                    </p>
                    <div>
                      <p style={{ fontSize: '1rem', fontWeight: '600', color: '#003366' }}>
                        {testimonial.name}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                        {testimonial.project}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 bg-[#E67E22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }} className="mb-4">
            Looking for reliable steel fabrication and roofing solutions?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'white' }} className="mb-8">
            Get in touch with our expert team today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#E67E22] hover:bg-gray-100 px-8 py-3"
              style={{ fontSize: '1.125rem', fontWeight: '600' }}
            >
              Call Us Today
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