/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       screens: {
        mobile: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
  
}