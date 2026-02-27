/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        rwanda: {
          green: '#00A651',
          yellow: '#FCDC04',
          blue: '#206EB3',
          red: '#E51B24',
        },
        earth: {
          50: '#FDFBF7',
          100: '#F7F3EB',
          200: '#EDE5D3',
          300: '#DBCFB3',
          400: '#C4B389',
          500: '#AD9963',
          600: '#9A8256',
          700: '#7D6947',
          800: '#64553C',
          900: '#524633',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
