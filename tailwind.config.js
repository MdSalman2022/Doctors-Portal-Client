/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#3A4256",

          "neutral": "#3A4256",

          "base-100": "#FFFFFF",

          "info": "#ACC8E7",

          "success": "#04342C",

          "warning": "#E27E03",

          "error": "#F03D5E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}