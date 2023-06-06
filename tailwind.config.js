/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Poppins', 'sans-serif'],
        inter: ['Poppins', 'sans-serif'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'primary': '#2C3F63',
        'light': '#F2F7FE',
        'gray': '#CFE4F9',
        'dark-gray':'#CFE4F9',
        'white': '#FFFFFF',
        'primary-green': '#3DBE43',
        'primary-green-dark': '#065B32'
      }
    },
  },
  plugins: [],
});
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         satoshi: ['Satoshi', 'sans-serif'],
//         inter: ['Inter', 'sans-serif'],
//         mono: ['var(--font-roboto-mono)'],
//       },
//       colors: {
//         'primary-orange': '#FF5722',
//         'primary': '#2C3F63',
//         'light': '#F2F7FE',
//         'gray': '#CFE4F9',
//         'dark-gray':'#CFE4F9'
//       }
//     },
//   },
//   plugins: [],
// }