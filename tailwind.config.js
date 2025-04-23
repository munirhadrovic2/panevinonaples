/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000', // Luxury dark red
        'primary-dark': '#6B0000', // Hover color
        secondary: '#333333', // Main text dark
        accent: '#F9F6F1', // Soft background
        footer: '#0D0D0D',
      },
    },
  },
  plugins: [],
}
