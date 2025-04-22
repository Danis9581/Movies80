module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'retro': ['"Press Start 2P"', 'cursive'],
        'horror': ['"Creepster"', 'serif'],
        'creepster': ['Creepster', 'cursive'],
      },
      colors: {
        '80s-yellow': '#ffff00',
        '80s-purple': '#800080',
        'dark-gray': '#333333',
      },
      boxShadow: {
        'neon-purple': '0 0 5px #800080, 0 0 10px #800080',
      },
      borderColor: {
        'neon-purple': '#800080',
      },
    },
  },
  plugins: [],
};