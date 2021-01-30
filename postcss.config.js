module.exports = {
  purge:{
    enable:true,
    content:[
      './src/App.js'
    ]
  },
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
}