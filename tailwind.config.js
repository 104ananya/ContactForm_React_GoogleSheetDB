/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'pink': '#F7418F',
        'yellow': '#FFF3C7',
        'light-pink': "#FC819E"
      },
    },
  },
  plugins: [],
}