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
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      rotate: {
        '8': '8deg',
        '65': '65deg',
      }
    },
    colors: {
      'primary': '#13389E',
      'primary-light': '#3C5FAD',
      'orange': "#F7973A",
      'orange-light': "#211B0F",
      'white': '#FFFFFF',
      'danger': '#D43738',
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
    keyframes: {
      'custom-nav-button': {
        'from': { transform: 'rotate(-55deg)' },
        '50%': { transform: 'rotate(-75deg)' },
        'to': { transform: 'rotate(-55deg)' },
      },
      'custom-nav-logo': {
        'from': { 'margin-left': '0', 'margin-top': '0' },
        '15%': { 'margin-top': '15px', transform: 'rotate(-16deg)' },
        '60%': { transform: 'translateX(0) translateY(0) rotate(-16deg)' },
        'to': { 'margin-left': '105%', 'margin-top': '15px', transform: 'translateX(5%) translateY(-5%) rotate(-20deg)' },
      },
      'custom-article': {
        'from': { transform: 'rotate(-45deg)' },
        '50%': { transform: 'rotate(-25deg)' },
        'to': { transform: 'rotate(-45deg)' },
      },
    },
    animation: {
      'custom-nav-button': 'custom-nav-button 5s ease-in-out infinite',
      'custom-nav-logo': 'custom-nav-logo 3s ease forwards',
      'custom-article': ' 8s ease-in-out 2300ms infinite custom-article',
    }
  },
  variants: {
    extend: {
      padding: ['dark'],
      margin: ['dark'],
      animation: ['dark'],
      rotate: ['dark'],
      skew: ['dark'],
      display: ['dark'],
      opacity: ['dark'],
      gradientColorStops: ['dark'],
      backgroundImage: ['dark']
    },
  },
  plugins: [],
}
