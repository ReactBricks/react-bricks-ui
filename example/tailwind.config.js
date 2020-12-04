module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      sm: '600px',
      md: '768px',
      lg: '900px',
      xl: '1200px',
      xxl: '1800px',
    },
    extend: {
      colors: {
        primary: {
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
        secondary: {
          100: 'hsl(200, 100%, 94%)',
          200: 'hsl(200, 95%, 85%)',
          500: '#1ea7fd',
          600: '#059dfd',
        },
        green: {
          100: 'hsl(91, 100%, 96%)',
          200: 'hsl(94, 73%, 87%)',
          300: 'hsl(95, 60%, 74%)',
          400: 'hsl(98, 55%, 62%)',
          500: 'hsl(100, 46%, 50%)',
          600: 'hsl(103, 48%, 42%)',
          700: 'hsl(105, 48%, 34%)',
          800: 'hsl(107, 44%, 27%)',
          900: 'hsl(108, 42%, 21%)',
        },
      },
      gradientColorStops: {
        ocean1: '#007cf0',
        ocean2: '#00dfd8',
        violet1: '#7928ca',
        violet2: '#ff0080',
        sun1: '#ff4d4d',
        sun2: '#f9cb28',
      },
      margin: {
        sm: '5.55555%',
        md: '11.11111%',
        lg: '16.66667%',
        xl: '22.22222%',
      },
      padding: {
        '1/10': '10%',
      },
      opacity: {
        '10': '0.1',
      },
      fontFamily: {
        content: [
          'Nunito Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
