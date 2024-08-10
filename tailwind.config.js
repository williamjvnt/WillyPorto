/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#235594',
        'secondary': '#57B8DD',
        'third': '#E1F1F3',
        'fourth': '#0E1D2B',
        'fifth': '#BF3554'
      }
    },
  },
  plugins: [],
}

