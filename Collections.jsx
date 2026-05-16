// components/Collections.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './ui/Button';

const collections = [
  {
    title: 'Signature Heels',
    description: 'Architectural elegance meets timeless sophistication.',
    image: '/api/placeholder/600/400',
    link: '/collections/heels'
  },
  {
    title: 'Summer Escape',
    description: 'Breezy luxury for sun-drenched adventures.',
    image: '/api/placeholder/600/400',
    link: '/collections/summer'
  },
  {
    title: 'Bridal Collection',
    description: 'Eternal moments deserve eternal beauty.',
    image: '/api/placeholder/600/400',
    link: '/collections/bridal'
  },
  {
    title: 'Casual Chic',
    description: 'Effortless style for every day.',
    image: '/api/placeholder/600/400',
    link: '/collections/casual'
  }
];

const Collections = () => (
  <section className="py-32 px-8 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-24"
    >
      <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl mb-6">
        Our Collections
      </h2>
      <p className="font-garamond text-xl md:text-2xl max-w-3xl mx-auto opacity-80">
        Crafted with the finest Italian leathers and 24k gold accents. 
        Every pair is a masterpiece of design and comfort.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {collections.map((collection, index) => (
        <motion.div 
          key={collection.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500"
          whileHover={{ y: -20 }}
        >
          <div className="relative h-96 w-full">
            <Image 
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="font-playfair text-3xl text-white mb-4 group-hover:text-aurea-gold transition-colors">
              {collection.title}
            </h3>
            <p className="text-white/90 font-avenir mb-6 leading-relaxed">
              {collection.description}
            </p>
            <Button variant="primary" size="sm" className="w-full group-hover:w-auto">
              Explore Collection
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Collections;