const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
    },
    extend: {
      colors: {
        b2: '#f9fafb',
        'dark-b2': '#2a2e37',
        info: '#2094f3',
        'dark-info': '#66c7ff',
        success: '#009485',
        'dark-success': '#87d039',
        warning: '#ff9900',
        'dark-warning': '#e2d562',
        error: '#ff5724',
        'dark-error': '#ff6f6f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
