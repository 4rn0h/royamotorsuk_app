// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',     // Near Black
        accent: '#FF3B30',      // Fire Red
        secondary: '#FFC800',   // Amber Yellow
        neutral: '#F8F8F8',     // Off-White
        cta: '#FF3B30',         // Fire Red (same as accent)
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
