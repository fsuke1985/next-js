module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
        ...theme('colors'),
        'rebuild': '#faf9f5',
    }),
    extend: {
        spacing: {
            '26': '6.5rem',
        }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
