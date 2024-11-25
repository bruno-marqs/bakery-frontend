/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['Playfair Display', 'serif']
      },
      colors: {
        yellow: {
          pale: "#F0D67F",
          old: "#AD9128",
        },
        black: {
          'nav-color': '#0E0E0E',
          'body-color': '#1A1A1A',
          border: '#807F7E',
        },
        gold: {
          nav: '#F2A20D',
          body: '#FFB800',
          darker: '#402E00',
        },
        green: {
          body: '#233131',
        },
        clear: {
          body: '#FFFEF8',
          card: '#E6E4DB',
        },
      },
      fontFamily: {
        
      },
    },
  },
  plugins: [],
}

