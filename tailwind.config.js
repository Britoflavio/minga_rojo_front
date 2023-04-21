/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Bgentero': "url('./imagenes/bg-1.png')",
        'Orange': "url('./imagenes/orangebg.png')",
        'fondo': 'linear-gradient(162.88deg, #FF5722 -11.37%, #F97316 73.97%)'

      },
      colors:{
        primary: "#FF5722"
      },
      height: {
        '128': '38rem',
        '127': '33rem',
      },
      width:{
        'orange': '38rem',
        'orangedos': '47rem',
        'orangetres': '62rem',
        'orangecuatro': '75rem',
      }
      
    }
  },
  variants: {},
  plugins: []
 }
