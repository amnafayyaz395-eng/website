// components/ui/Button.jsx
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Button = ({ children, variant = 'primary', size = 'base', className, ...props }) => {
  const baseStyles = 'font-avenir font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden relative group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-aurea-gold to-amber-500 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 px-8 py-4',
    secondary: 'bg-white/80 backdrop-blur-sm text-gray-900 border border-gray-200/50 shadow-glass hover:shadow-luxury px-8 py-4',
    ghost: 'text-aurea-gold hover:text-amber-500 px-6 py-3',
  };

  const sizes = {
    base: 'text-lg',
    lg: 'text-xl px-12 py-5',
    sm: 'text-sm px-6 py-3',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 origin-center transition-transform duration-300 rounded-full" />
    </motion.button>
  );
};

export default Button;