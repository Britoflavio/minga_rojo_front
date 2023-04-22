import { useState } from 'react'
import Orangeuno from  "./imagenes/mujerUno.png"
import Orangedos from  "./imagenes/orange2.png"
import Footer from "./imagenes/Footer.png"
import Yt from "./imagenes/Youtube.png"
import Fb from "./imagenes/Facebook.png"
import Tw from "./imagenes/Twitter.png"
import Vm from "./imagenes/Vimeo.png"
import Logo from "./imagenes/logo-dos.png"
import Donate from "./imagenes/donate.png"
import Menu from "./imagenes/Menu.png"
import LogoCelu from "./imagenes/LogoCelu.png"
import Izq from "./imagenes/izquierda.png"
import Der from "./imagenes/derecha.png"
import './App.css'

function App() {
  return (
    <>
    <header className=' bg-no-repeat bg-cover bg-center w-full h-screen xl:h-[65vh] bg-Bgentero'>
      <nav className="flex justify-between items-center p-4 xl:px-20">
        <img src={Menu} alt="" />
      <div className=''>
        <img src={Logo} className="sm:hidden md:hidden" alt="" />
        <img src={LogoCelu} className="lg:hidden xl:hidden" alt="" />
      </div>
      </nav>
      <section className='flex flex-col sm:items-center md:items-center lg:items-center text-white py-52 xl:px-20 xl:py-36'>
        <h1 className='sm:text-5xl md:text-6xl text-6xl sm:text-center md:text-center lg:text-center font-bold'>For the love of manga</h1>
        <h3 className='text-lg font-sm py-2'>Explore our varieties</h3>
        <p className='sm:hidden md:hidden lg:hidden md:text-sm py-2 font-semibold'>#MingaLove</p>
        <button className='w-5/6 h-12 md:w-3/4 lg:w-1/2 xl:w-3/12 rounded bg-white text-primary font-semibold text-2xl'>Sign in!</button>
      </section>
    </header>
    <section className='sm:hidden md:flex lg:flex xl:flex justify-center items-center h-72'> 
      <div className='flex flex-row bg-fondo bg-repeat justify-between w-11/12 h-1/2'>
          <button><img src={Izq} alt="" /></button>
        <div className='flex items-end justify-around w-36 mx-4 xl:w-96'>
          <img src={Orangeuno} className='w-24 lg:w-40 h-44 xl:w-48 xl:h-44' alt="" />
          <img src={Orangedos} className='w-24 lg:w-40 h-48 xl:w-36 xl:h-52 py-2 ' alt="" />
        </div>
        <div className='flex flex-col justify-center text-white w-2/4 md:p-4 px-2'>
          <h3 className=''>Shonen</h3>
          <p className='text-xs text-[8px]'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
        </div>
        <button><img src={Der} alt="" /></button>
      </div>
    </section>
    <footer className="h-96">
      <img src={Footer} alt="" className="w-full h-2/4 rounded-[100%_100%_70%70%/_0%_0%_100%_100%]"/>
      <div className='flex flex-col md:flex-row lg:flex-row items-center justify-around border-b-4'> 
        <div className='flex flex-col md:flex-row lg:flex-row just items-center lg:px-2'>
          <btn className='py-2 px-2'>Home</btn>
          <btn className='py-2 px-2'>Mangas</btn>
        </div>
        <div className='flex h-20 justify-center items-center'>
          <img src={Logo} alt="" />
        </div>
        <div className='flex flex-col h-24'>
          <div className='flex flex-row justify-between py-3'>
            <img src={Fb} alt="" />
            <img src={Tw} alt="" />
            <img src={Vm} alt="" />
            <img src={Yt} alt="" />
          </div>
          <img src={Donate} className="" alt="" />
        </div>
      </div>
    </footer>
    </>
  )
}
export default App

/* PascalCase - Ejemplo
Index
Button
Card
Carousel
FormRegister
*/