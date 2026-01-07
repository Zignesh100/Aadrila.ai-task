/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3E6EB4',
        secondary: '#CD6028',
        dark: '#141219',
        gray: {
          50: '#F0F7FE',
          100: '#EDEDED',
          500: '#696969',
          600: '#959595',
        },
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
