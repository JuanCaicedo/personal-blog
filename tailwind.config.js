/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './garden/**/*.{md,mdx}',
    './posts/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1e1b4b',
      },
      fontFamily: {
        display: ['var(--font-display)'],
      },
    },
  },
  plugins: [],
}
