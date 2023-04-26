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
      },
      screens: {
        'sm': {'min': '320px', 'max': '499px'},
  
        'md': {'min': '500px', 'max': '619px'},
        // => @media (min-width: 768px) { ... }
        
        'lg': {'min': '620px', 'max': '1023px'},
        // => @media (min-width: 1024px) { ... }
 
        'xl': {'min': '1024px', 'max': '1350px'},
        // => @media (min-width: 1280px) { ... }
  
        '2xl': {'min': '1351px'},

        'xl': {'min': '1024px', 'max': '1300px'},
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px'
        // => @media (min-width: 1536px) { ... }
      }
    }
  },
  variants: {},
  plugins: []
 }
