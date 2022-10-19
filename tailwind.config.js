/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'evergreen':'#2AF599',
      'whiteglow': '#FFFFFF',
      'blacky': {
        'dark':'#000000',
        'medium':'#1A1A1A',
        'light':'#303030',
      },
      'graydust':{
        'extralight':'#F7F7F7',
        'light':'#F6F6F6',
        'normal':'#949494',
        'medium':'#666666',
        'dark':'#000000a6',
      }
    },
    extend: {},
  },
  plugins: [],
}
