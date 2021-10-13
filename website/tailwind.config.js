module.exports = {
  purge: {
    content: ['./**/*.{html,vue,js,ts,jsx,tsx}'],
    safelist: []
  },
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      maxWidth: {
        'content': '1440px',
      }
    },
    colors: {
      'orange': "#F7973A",
      'orange-light': "#211B0F",
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': "#818181",
      'none': "transparent",
      'current': "currentcolor",
    },
    fontFamily: {
      'f-default': ['Poppins', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      'f-title': ['Poppins', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      'f-button': ['Poppins', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
    },
    /* screens: {
      'xs': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    } */
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
