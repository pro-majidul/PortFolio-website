/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'railwayfont': "Raleway",
        'interfont': "Inter",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}