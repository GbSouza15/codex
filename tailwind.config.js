/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        primaryColor: '#04091C',
        secondaryColor: '#FFFFFF',
        tertiaryColor: '#0F36C3',
        fourthColor: '#2651EE',
    },
  },
  plugins: [require("tailwindcss-animate")],
}
}