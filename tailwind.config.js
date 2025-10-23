/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cv-dark': '#0F141F',
        'cv-gray': '#7A8599',
        'cv-light-gray': '#CFD6E6',
      },
      fontFamily: {
        'calibri': ['Calibri', 'Segoe UI', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
