// components/Hero.jsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from './ui/Button';
import Scene from './3d/SandalModel';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const titleY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ y: titleY, opacity }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-playfair text-7xl md:text-9xl lg:text-[10rem] leading-none tracking-[-0.05em] mb-6 bg-gradient-to-r from-white to-aurea-cream/80 bg-clip-text text-transparent">
            AUREA
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-aurea-gold to-amber-500 mx-auto rounded-full glow" />
          <p className="font-garamond text-xl md:text-2xl mt-6 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Timeless elegance meets modern craftsmanship. 
            Where every step tells a story of luxury.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button size="lg" className="shadow-2xl shadow-aurea-gold/25">
            Discover Collection
          </Button>
          <Button variant="secondary" size="lg">
            Book Appointment
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-white/60 animate-pulse" />
          <p className="text-xs font-avenir uppercase tracking-wider opacity-75">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;