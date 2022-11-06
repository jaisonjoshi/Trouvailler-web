/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'evergreen':'#2AF599',
      'midnight':'#303030',
      'whiteglow': '#FFFFFF',
      'blacky': {
        'dark':'#000000',
        'medium':'#1A1A1A',
        'light':'#303030',
      },
      'graydust':{
        'light':'#F6F6F6',
        'dark':'#000000a6',
      }
    },
    extend: {
      backgroundImage : {
        'hero-image' :'url("./Pages/Assets/b_img2.jpg")'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
