/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'primary': '#2C3F63',
        'light': '#F2F7FE',
        'gray': '#CFE4F9',
        'dark-gray':'#CFE4F9'
      }
    },
  },
  plugins: [],
}