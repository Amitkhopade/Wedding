/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F6F0',
        gold: {
          50: '#FFF9E6',
          100: '#FFECB3',
          300: '#FFD680',
          500: '#FFC107',
          700: '#FFA000',
          900: '#FF6F00',
        },
        maroon: {
          50: '#FADBD8',
          100: '#F5B7B1',
          500: '#8B0000',
          700: '#660000',
          900: '#330000',
        },
        emerald: {
          50: '#D4EDDA',
          100: '#C3E6CB',
          500: '#28A745',
          700: '#1B6B2E',
        },
        pastel: {
          pink: '#F8D7DA',
          rose: '#FFE5EC',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.8s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        luxury: '0 20px 60px rgba(0, 0, 0, 0.08)',
        'luxury-lg': '0 30px 80px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
