module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
        ...theme('colors'),
        'rebuild': '#faf9f5',
    }),
    extend: {
        fontFamily: {
            'hel': ['"Open Sans Condensed"', '"Helvetica Neue"', 'Helvetica', 'Arial', '"Lucida Grande"', 'sans-serif'],
        },
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
