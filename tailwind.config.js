/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      
      backgroundColor: ['checked'],
      borderColor: ['checked'],

      colors: {
        lime: 'hsl(61, 70%, 52%)',
        red: 'hsl(4, 69%, 50%)',
        white: 'hsl(0, 0%, 100%)',
        slate100: 'hsl(202, 86%, 94%)',
        slate300: 'hsl(203, 41%, 72%)',
        slate500: 'hsl(200, 26%, 54%)',
        slate700: 'hsl(200, 24%, 40%)',
        slate900: 'hsl(202, 55%, 16%)'
      },




    },
  },
  plugins: [],
}

