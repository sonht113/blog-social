/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      tablet: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
