/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'style.css'],
  theme: {
    extend: {
      fontFamily: {
        'Open-Sans': 'Open Sans, sans-serif',
      },
      width: {
        18: '72px',
      },
      height: {
        18: '72px',
      },
      colors: {
        'main-bg': 'rgb(30 41 59)', // slate-800
        'main-text': 'rgb(244 244 245)', // zinc-100
      },
    },
  },
};
