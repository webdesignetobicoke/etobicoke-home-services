/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2F52',
          dark: '#0E1C35',
          light: '#243a63',
        },
        gold: {
          DEFAULT: '#C4933F',
          hover: '#B5842E',
          light: '#E8BA6A',
          muted: '#8B6420',
        },
        cream: '#F8F6F1',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
