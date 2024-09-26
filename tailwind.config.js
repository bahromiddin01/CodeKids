/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,css,js}"],
  theme: {
    extend: {
      fontSize: {
        '5xl': '46px',
        '4.5xl': '44px',
        '2xs': '10px',
      },

      fontFamily: {
        catchyMelody: ['Catchy Melody', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        baloo: ['Baloo', 'sans-serif'],
      },

      colors: {
        customGray: '#B3B3B3',
        customBlue: '#365CA7',
        customOrange: '#F4961D',
        customCream: '#FEF4E8',
      },

      boxShadow: {
        'orange-bottom-left': '-5px 5px 0px rgba(244, 150, 29, 1)',
        'bottom-left-orange': '-4px 4px 0px rgba(244, 150, 29, 1)',
        'bottom-left-blue': '-4px 4px 0px #365ca7',
      },

      screens: {
        '3xl': '1600px',
      },

      keyframes: {
        leftToRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },

      animation: {
        leftToRight: 'leftToRight 60s linear infinite',
        rightToLeft: 'rightToLeft 60s linear infinite',
      },
    },
  },
  plugins: [],
}

