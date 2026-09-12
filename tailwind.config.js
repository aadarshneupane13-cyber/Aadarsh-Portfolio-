/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06070a',
          900: '#0A0C0E',
          850: '#101317',
          800: '#161c2d',
          750: '#1c2438',
          700: '#242e47',
        },
        brand: {
          green: '#0cce49',
          emerald: '#10b981',
          red: '#f30f0f',
          blue: '#0caceb',
          amber: '#E8913C',
          teal: '#2E6B72',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
