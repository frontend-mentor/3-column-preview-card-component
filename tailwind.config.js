module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: [/^btn-/],
  },
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Lexend Deca', 'sans-serif'],
      'cursive': ['Big Shoulders Display', 'cursive'],
    },
    extend: {
      colors: {
        'bright-orange': '#E38826',
        'dark-cyan': '#006970',
        'very-dark-cyan': '#004241',
        'transparent-white': '#FFFFFFBF',
        'very-light-gray': '#F2F2F2',
      },
      maxWidth: {
        card: '928px'
      },
      height: {
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
