// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'garamond': ['EB Garamond', 'serif'],
        'avenir': ['Avenir Next', 'sans-serif'],
      },
      colors: {
        'aurea-gold': '#D4AF37',
        'aurea-cream': '#F5F3EE',
        'aurea-beige': '#E8DAB2',
        'aurea-ivory': '#FDF6E3',
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-20px,0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'luxury': '0 20px 60px rgba(0,0,0,0.15)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.5)',
      }
    },
  },
  plugins: [],
}