/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderColor: "#cccccc6d",
        textColor: "#333333",
        colorRed: "#ED4B4B",
        colorGreen: "#019267",
        primaryColor: "#072AC8"
      }
    },
  },
  plugins: [require("daisyui")],
}