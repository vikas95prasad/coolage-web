/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Courier New", "Courier", "monospace", "sans-serif"],
      },
    },
  },
  plugins: [],
}

