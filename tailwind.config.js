/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        primary: '#1DA1F2', 
        secondary: '#14171A', 
        accent: '#657786',
      },
    },
  },  
  plugins: [],
}

