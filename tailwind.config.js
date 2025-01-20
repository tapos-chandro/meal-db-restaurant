/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('https://i.ibb.co.com/y50GSfz/banner3.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

