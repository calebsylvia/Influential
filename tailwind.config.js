/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    './pages/**/*.{html,js}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'heading': ['Kodchasan', 'sans-serif'],
      'body': ['Abel', 'sans-serif']
    }
  },
  plugins: [],
}

