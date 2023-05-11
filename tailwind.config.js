/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important:true,
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme: {
    
    extend: {
      backgroundImage:{
        'Bgentero': "url('./imagenes/bg-1.png')",
        'Nostalgic':"url('./imagenes/nostalgic.png')",
        'Popular':"url('./imagenes/popular.png')",
        'Adventure':"url('./imagenes/adventure.png')",
        'MangasFondo':"url('./imagenes/mangasfondo.png')",
        'fondo': 'linear-gradient(162.88deg, #FF5722 -11.37%, #F97316 73.97%)',
        'bgsignup': "url('./imagenes/imgsignup.png')",

      },
      colors:{
        primary: "#FF5722"
      },
      height: {
        '128': '38rem',
        '127': '33rem',
      },
      width:{
      },
      screens: {
        'sm': {'min': '320px', 'max': '426px'},
        'md': {'min': '427px', 'max': '619px'},
        'lg': {'min': '620px', 'max': '1023px'},
        'xl': {'min': '1024px', 'max': '1350px'},
        '2xl': {'min': '1351px'},

      }
    }
  },
  variants: {},
  plugins: []
 }
