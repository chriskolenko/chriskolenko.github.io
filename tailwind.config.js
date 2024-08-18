module.exports = {
  content: ["./src/**/*.{html,hbs,js}"],
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
    },
  },
  plugins: [],
}