/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF7A1A',
          lightorange: '#FF9A4D',
          teal: '#13C4D4',
          purple: '#8B5CF6'
        }
      },
      boxShadow: {
        card: '0 12px 30px rgba(16,24,40,0.06)',
        soft: '0 6px 18px rgba(16,24,40,0.04)'
      },
      borderRadius: {
        xl2: '18px'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // <-- Set Inter as default sans
      }
    }
  },
  plugins: [],
}
