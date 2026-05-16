// components/LoadingScreen.jsx
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-aurea-ivory"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 border-4 border-aurea-gold/30 border-t-aurea-gold rounded-full mx-auto mb-8"
        />
        
        <div className="w-64 bg-gray-200/50 rounded-full h-2 mx-auto overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-aurea-gold to-amber-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
        
        <p className="mt-4 font-avenir text-sm text-gray-600 uppercase tracking-wider">
          Loading luxury...
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;