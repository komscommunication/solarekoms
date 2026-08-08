/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6fbf4",
          100: "#e8f5e3",
          200: "#cfeac7",
          300: "#abd89f",
          400: "#7fc06e",
          500: "#5fa84d",
          600: "#4a863c",
          700: "#3c6a32",
          800: "#33552d",
          900: "#2c4728"
        }
      }
    }
  },
  plugins: []
}
