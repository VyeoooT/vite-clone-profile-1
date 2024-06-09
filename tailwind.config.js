/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // dark mode
  darkMode: "class",
  theme: {
    extend: {
      // container center
      container: {
        center: true,
      },

      // font google
      fontFamily: {
        oswald: ["Oswald", "sans serif"],
        inter: ["Inter"],
        poppins: ["Poppins"],
      },

      // background image dardmode
      backgroundImage: {
        heroLight: "url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')",
        heroDark: "url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')",
      },

      // color primary
      colors: {
        primary: "#b033fd",
      },
    },
  },
  plugins: [],
}
