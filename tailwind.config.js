/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      container:{
        center:true,
        screens:{
          xsm: "100%",
          xm: "100%",
          xlg: "100%",
          sm: "100%",
          md: "100%",
          tab: "100%",
          lg: "1024px",
          xl: "1245px",
        },
        padding: {
          DEFAULT: "1rem",
          xl: "0rem",
        },
      },
      colors:{
        primary:"#BC2A30",
        secondary:"#D0D8D7"
      }
    },
  },
  plugins: [],

}