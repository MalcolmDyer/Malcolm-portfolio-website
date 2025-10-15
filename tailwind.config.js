/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#05080f',
        accent: '#5eead4'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        elevate: '0 24px 80px rgba(5, 8, 15, 0.45)',
        glow: '0 40px 80px rgba(94, 234, 212, 0.25)'
      },
      backgroundImage: {
        radial: 'radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 55%), radial-gradient(circle at 30% 80%, rgba(94,234,212,0.18), transparent 65%), radial-gradient(circle at 90% 20%, rgba(139,92,246,0.16), transparent 55%)'
      }
    }
  },
  plugins: []
};
