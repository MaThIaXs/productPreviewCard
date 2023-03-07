/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-cyan': {
          500: 'hsl(158, 36%, 37%)',
          700: 'hsl(158, 36%, 24%)',
        },
        'cream': 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'white': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Fraunces': ['Fraunces', 'serif']
      }
    },
  },
  plugins: [],
}
