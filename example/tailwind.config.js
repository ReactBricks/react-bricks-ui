const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  //purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        azure: colors.lightBlue,
        pink: {
          100: '#ffebef',
          200: '#ffd6e0',
          300: '#fdb4c6',
          400: '#fb83a3',
          500: '#f65a8e',
          600: '#d9367f',
          700: '#b43179',
          800: '#8f2468',
          900: '#691f53',
        },
        orange: colors.orange,
        green: colors.lime,
      },
      gradientColorStops: {
        ocean1: '#007cf0',
        ocean2: '#00dfd8',
        violet1: '#7928ca',
        violet2: '#ff0080',
        sun1: '#ff4d4d',
        sun2: '#f9cb28',
      },
      padding: {
        '1/10': '10%',
      },
      fontFamily: {
        content: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
