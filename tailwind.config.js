/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        accent:['#FB2E86']
      },
      fontFamily:{
        body:['Josefin sans'],
        lato:['Lato']
      }
    },
  },
  plugins: [],
}

