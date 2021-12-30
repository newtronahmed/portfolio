module.exports = {
  purge: {
    enable: true,
    content: [
      './src/**/*.js'
    ]
  },
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
}