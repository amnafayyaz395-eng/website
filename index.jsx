// pages/index.jsx - Home Page
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import StoryPreview from '@/components/StoryPreview';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-aurea-ivory">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <Navbar />
      
      <main>
        <Hero />
        <Collections />
        <StoryPreview />
        <Reviews />
        <Gallery />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}