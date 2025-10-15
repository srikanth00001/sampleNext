import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Target, 
  Heart, 
  CheckCircle,
  Calendar,
  MapPin,
  Phone
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We never compromise on quality. Every product undergoes rigorous quality checks to ensure durability and performance.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We understand the importance of time in construction projects. Our efficient processes ensure on-time project completion.'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Our customers are our priority. We work closely with clients to understand their needs and exceed expectations.'
    },
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: 'With 30+ years of experience, our skilled craftsmen bring expertise and precision to every project.'
    }
  ];

  const services = [
    'Custom Steel Fabrication',
    'Industrial Roofing Solutions',
    'Residential Gate Installation',
    'Commercial Shutter Systems',
    'Structural Steel Work',
    'Maintenance & Repair Services'
  ];

  const milestones = [
    { year: '1990', event: 'Company Founded', description: 'GMS Chitra & Co established in Erode' },
    { year: '2000', event: 'First Major Project', description: 'Completed large-scale industrial roofing project' },
    { year: '2010', event: 'Expansion', description: 'Opened second branch in Tiruppur' },
    { year: '2015', event: '1000+ Projects', description: 'Milestone of 1000 successful projects completed' },
    { year: '2020', event: 'Third Branch', description: 'Expanded operations with Ring Road, Erode branch' },
    { year: '2025', event: 'Modern Operations', description: 'Continuing legacy with modern techniques and technology' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#003366] to-[#4B4B4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 style={{ fontSize: '3rem', fontWeight: '700' }} className="mb-6">
              Crafting Strength and Trust Since 1990's
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#C0C0C0' }} className="max-w-3xl mx-auto">
              For over three decades, GMS Chitra & Co has been the trusted name in steel fabrication and roofing solutions, 
              building lasting relationships through quality workmanship and reliable service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#003366' }} className="mb-6">
                Our Story
              </h2>
              <div className="space-y-4">
                <p style={{ fontSize: '1.125rem', color: '#4B4B4B' }}>
                  Founded in the 1990's, GMS Chitra & Co began as a small steel fabrication workshop in Erode with a 
                  simple vision: to provide high-quality steel solutions that stand the test of time.
                </p>
                <p style={{ fontSize: '1.125rem', color: '#4B4B4B' }}>
                  Over the decades, we have grown from a local fabrication shop to a trusted name across Tamil Nadu, 
                  serving residential, commercial, and industrial clients with unwavering commitment to excellence.
                </p>
                <p style={{ fontSize: '1.125rem', color: '#4B4B4B' }}>
                  Today, with three strategic locations and a team of skilled craftsmen, we continue to build on our 
                  legacy of quality, innovation, and customer satisfaction.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="bg-[#E67E22] hover:bg-[#d35400] text-white px-8 py-3"
                >
                  Work With Us
                </Button>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="/src/assets/office.jpg"
                alt="GMS Chitra & Co Workshop"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#003366' }} className="mb-4">
              Our Values
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4B4B4B' }}>
              The principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E67E22] rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003366' }} className="mb-3">
                    {value.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#4B4B4B' }}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#003366' }} className="mb-4">
              Our Journey
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4B4B4B' }}>
              Key milestones in our 30+ year journey
            </p>
          </AnimatedSection>

          <div className="relative">
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#E67E22] h-full hidden md:block"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-0">
                          <div className="flex items-center space-x-3 mb-3">
                            <Calendar className="w-5 h-5 text-[#E67E22]" />
                            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#003366' }}>
                              {milestone.year}
                            </span>
                          </div>
                          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#003366' }} className="mb-2">
                            {milestone.event}
                          </h3>
                          <p style={{ fontSize: '0.875rem', color: '#4B4B4B' }}>
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="hidden md:flex items-center justify-center w-8 h-8 bg-[#E67E22] rounded-full z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                  >
                    <motion.div 
                      className="w-4 h-4 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.5 }}
                    />
                  </motion.div>
                  
                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white' }} className="mb-4">
              What We Do
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#C0C0C0' }}>
              Comprehensive steel fabrication and roofing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-[#E67E22] flex-shrink-0" />
                <span style={{ fontSize: '1rem', color: 'white', fontWeight: '500' }}>
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#003366' }} className="mb-4">
              Our Locations
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4B4B4B' }}>
              Serving clients across Tamil Nadu from three strategic locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <MapPin className="w-12 h-12 text-[#E67E22] mx-auto mb-4" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003366' }} className="mb-2">
                  Branch 1
                </h3>
                <p style={{ fontSize: '1rem', color: '#4B4B4B' }} className="mb-4">
                  Moola Palayam, Erode
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6c757d' }}>
                  Main Branch & Workshop
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <MapPin className="w-12 h-12 text-[#E67E22] mx-auto mb-4" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003366' }} className="mb-2">
                  Branch 2
                </h3>
                <p style={{ fontSize: '1rem', color: '#4B4B4B' }} className="mb-4">
                  Sirupooluvapatti, Tiruppur
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6c757d' }}>
                  Service & Installation Center
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <MapPin className="w-12 h-12 text-[#E67E22] mx-auto mb-4" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003366' }} className="mb-2">
                  Branch 3
                </h3>
                <p style={{ fontSize: '1rem', color: '#4B4B4B' }} className="mb-4">
                  Ring Road, Erode
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6c757d' }}>
                  Sales & Customer Service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#E67E22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }} className="mb-4">
            Ready to Build Something Great Together?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'white' }} className="mb-8">
            Join thousands of satisfied customers who trust GMS Chitra & Co for their steel fabrication needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#E67E22] hover:bg-gray-100 px-8 py-3"
              style={{ fontSize: '1.125rem', fontWeight: '600' }}
            >
              Get In Touch
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