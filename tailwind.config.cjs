/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",             // Vite's entry HTML
    "./src/**/*.{js,jsx,ts,tsx}" // every component file
  ],
  theme: {
    extend: {
      colors: {
        swiggy: {
          orange: '#FC8019',
          accent: '#FFA500', // lighter orange for subtle accents
          black: '#282c3f', // Swiggy's deep charcoal
          gray: '#F5F5F6', // Swiggy's background gray
          card: '#FAFAFA', // card background
          border: '#E9E9EB', // light border
        },
      },
      fontSize: {
        'responsive-4xl': 'clamp(2rem, 4vw, 2.25rem)',
        'responsive-3xl': 'clamp(1.75rem, 3vw, 1.875rem)',
        'responsive-2xl': 'clamp(1.5rem, 2.5vw, 1.5rem)',
        'responsive-xl': 'clamp(1.25rem, 2vw, 1.25rem)',
      },
      spacing: {
        'responsive': 'clamp(1rem, 2vw, 1.5rem)',
        'responsive-lg': 'clamp(1.5rem, 3vw, 2rem)',
      },
      fontFamily: {
        sans: [
          'Basis Grotesque Pro',
          'Inter',
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        xl: '1rem',
        lg: '0.75rem',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(40,44,63,0.04)',
      },
      clipPath: {
        diagonal: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
      },
      screens: {
        '3xl': '1920px',
        '2xl': '1600px',
        'xl': '1366px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: true,
  },
};
