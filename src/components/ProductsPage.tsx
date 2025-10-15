import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AnimatedSection from './AnimatedSection';
import { Filter, ArrowRight } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Gates', 'Roofing', 'Ladders', 'Shutters', 'Elevation'];

  const products = [
    {
      id: 1,
      title: 'MS Grill Window',
      category: 'Gates',
      description: 'High-quality mild steel grill windows with 13mm/16mm rods. Complete finishing includes welding, grinding, polishing, and base painting for durability.',
      features: ['13mm/16mm MS rods', 'Full finishing', 'Custom designs', 'Weather resistant'],
      image: 'https://images.unsplash.com/photo-1759064776046-45b988af4b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGdhdGVzJTIwc3RlZWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NTk2NTk5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹150/sq ft'
    },
    {
      id: 2,
      title: 'MS Compound Gate - Folding',
      category: 'Gates',
      description: 'Premium folding compound gates designed for residential and commercial properties. Heavy-duty construction with smooth operation mechanism.',
      features: ['Folding mechanism', 'Heavy-duty hinges', 'Powder coated finish', 'Lock system included'],
      image: 'https://images.unsplash.com/photo-1759064776046-45b988af4b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGdhdGVzJTIwc3RlZWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NTk2NTk5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹400/sq ft'
    },
    {
      id: 3,
      title: 'MS Compound Gate - Swing',
      category: 'Gates',
      description: 'Traditional swing gates with modern design elements. Built for longevity with premium materials and expert craftsmanship.',
      features: ['Single/Double swing', 'Auto-close system', 'Decorative panels', 'Security features'],
      image: 'https://images.unsplash.com/photo-1759064776046-45b988af4b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGdhdGVzJTIwc3RlZWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NTk2NTk5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹300/sq ft'
    },
    {
      id: 4,
      title: 'MS Compound Gate - Rolling',
      category: 'Gates',
      description: 'Space-saving rolling gates perfect for limited space applications. Smooth operation with robust roller mechanism.',
      features: ['Space-saving design', 'Smooth rollers', 'Manual/Electric operation', 'Weather proof coating'],
      image: 'https://images.unsplash.com/photo-1759064776046-45b988af4b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGdhdGVzJTIwc3RlZWwlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NTk2NTk5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹350/sq ft'
    },
    {
      id: 5,
      title: 'Rolling Shutter',
      category: 'Shutters',
      description: 'Heavy-duty rolling shutters for commercial and residential applications. Smooth operation with high security features.',
      features: ['Heavy-duty construction', 'Manual/Electric options', 'Wind lock system', 'Galvanized coating'],
      image: 'https://images.unsplash.com/photo-1641612717055-deea47c3e948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsaW5nJTIwc2h1dHRlciUyMG1ldGFsJTIwZG9vcnxlbnwxfHx8fDE3NTk2NTk5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹250/sq ft'
    },
    {
      id: 6,
      title: 'MS Ladder - Domestic',
      category: 'Ladders',
      description: 'Domestic use MS ladders with safety features. Perfect for home maintenance and light commercial use.',
      features: ['Safety grip steps', 'Powder coated finish', 'Lightweight design', 'Easy storage'],
      image: 'https://images.unsplash.com/photo-1606713174708-20489b8d0d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGxhZGRlciUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5NjU5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹2,500'
    },
    {
      id: 7,
      title: 'MS Ladder - Rolling Step',
      category: 'Ladders',
      description: 'Industrial rolling step ladders with mobility features. Ideal for warehouses and industrial applications.',
      features: ['Mobile wheels', 'Platform step', 'Safety handrails', 'Brake system'],
      image: 'https://images.unsplash.com/photo-1606713174708-20489b8d0d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGxhZGRlciUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5NjU5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹8,500'
    },
    {
      id: 8,
      title: 'MS Ladder - Industrial',
      category: 'Ladders',
      description: 'Heavy-duty industrial ladders meeting safety standards. Built for demanding industrial environments.',
      features: ['Heavy-duty construction', 'Safety compliance', 'Anti-slip steps', 'Corrosion resistant'],
      image: 'https://images.unsplash.com/photo-1606713174708-20489b8d0d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGxhZGRlciUyMGluZHVzdHJpYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5NjU5OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹12,000'
    },
    {
      id: 9,
      title: 'GI Coat Roofing',
      category: 'Roofing',
      description: 'Galvanized iron coating roofing sheets with excellent weather resistance and durability.',
      features: ['Galvanized coating', 'Corrosion resistant', 'Easy installation', '10+ year warranty'],
      image: 'https://images.unsplash.com/photo-1759395162292-728a3279b926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9vZmluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTk1NjE3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹85/sq ft'
    },
    {
      id: 10,
      title: 'Aluminium Roofing',
      category: 'Roofing',
      description: 'Lightweight aluminium roofing solutions with superior thermal properties and modern aesthetics.',
      features: ['Lightweight', 'Thermal efficiency', 'Modern aesthetics', 'Low maintenance'],
      image: 'https://images.unsplash.com/photo-1759395162292-728a3279b926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9vZmluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTk1NjE3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹120/sq ft'
    },
    {
      id: 11,
      title: 'Kerala Clay Tile Roofing',
      category: 'Roofing',
      description: 'Traditional Kerala style clay tile roofing with modern installation techniques for authentic look.',
      features: ['Traditional design', 'Natural cooling', 'Eco-friendly', 'Long lasting'],
      image: 'https://images.unsplash.com/photo-1759395162292-728a3279b926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9vZmluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTk1NjE3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting from ₹90/sq ft'
    },
    {
      id: 12,
      title: 'Steel Elevation Works',
      category: 'Elevation',
      description: 'Custom steel elevation and pergola works for modern architectural aesthetics and functional beauty.',
      features: ['Custom designs', 'Modern aesthetics', 'Structural integrity', 'Weather resistant'],
      image: 'https://images.unsplash.com/photo-1630674997049-4af26f23c238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHN0cnVjdHVyZSUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTY1OTk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Custom Quote'
    }
  ];

  const filteredProducts = selectedFilter === 'All' 
    ? products 
    : products.filter(product => product.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#003366] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 style={{ fontSize: '3rem', fontWeight: '700' }} className="mb-4">
              Our Products
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#C0C0C0' }}>
              High-quality steel fabrication and roofing solutions since 1990's
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center space-x-4 overflow-x-auto">
              <div className="flex items-center space-x-2 flex-shrink-0">
                <Filter className="w-5 h-5 text-[#4B4B4B]" />
                <span style={{ fontSize: '1rem', fontWeight: '500', color: '#4B4B4B' }}>Filter:</span>
              </div>
              <div className="flex space-x-2">
                {filters.map((filter, index) => (
                  <motion.button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                      selectedFilter === filter
                        ? 'bg-[#E67E22] text-white'
                        : 'bg-gray-100 text-[#4B4B4B] hover:bg-[#E67E22] hover:text-white'
                    }`}
                    style={{ fontSize: '0.875rem', fontWeight: '500' }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
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
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003366' }}>
                          {product.title}
                        </h3>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <Badge variant="secondary" className="bg-[#E67E22] text-white">
                            {product.category}
                          </Badge>
                        </motion.div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p style={{ fontSize: '0.875rem', color: '#4B4B4B' }} className="mb-4">
                        {product.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#003366' }} className="mb-2">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {product.features.map((feature, index) => (
                            <motion.li 
                              key={index} 
                              className="flex items-center space-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            >
                              <ArrowRight className="w-3 h-3 text-[#E67E22]" />
                              <span style={{ fontSize: '0.75rem', color: '#4B4B4B' }}>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <motion.div 
                        className="flex items-center justify-between mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      >
                        <span style={{ fontSize: '1rem', fontWeight: '600', color: '#E67E22' }}>
                          {product.price}
                        </span>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          onClick={() => onNavigate('contact')}
                          className="w-full bg-[#003366] hover:bg-[#002244] text-white transition-all duration-300"
                        >
                          Request Quote
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#E67E22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }} className="mb-4">
            Need a Custom Solution?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'white' }} className="mb-8">
            Our expert team can design and fabricate custom steel solutions to meet your specific requirements.
          </p>
          <Button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-[#E67E22] hover:bg-gray-100 px-8 py-3"
            style={{ fontSize: '1.125rem', fontWeight: '600' }}
          >
            Get Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
}