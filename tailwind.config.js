module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgColor: {
          light: '#fff',
          DEFAULT: '#FE415B',
          dark: '#fff',
        },
        txtColor: {
          light: '#fff',
          DEFAULT: '#3B305B',
          dark: '#fff',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
