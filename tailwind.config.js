/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        accent:['#FB2E86'],
        blue:['#151875'],
        whitebg:['#F7F7F7'],
        "blue-2":["#2F1AC4"]
      },
      fontFamily:{
        body:['Josefin sans'],
        lato:['Lato']
      }
    },
  },
  plugins: [],
}

