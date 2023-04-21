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
import './App.css'

function App() {
  return (
    <>
    <header className='bg-no-repeat bg-cover bg-center w-full bg-Bgentero h-128 lg:h-127'>
      <nav></nav>
      <div className=''>
        <p className='text-white text-3xl md:text-4xl text-right p-8 px-16'><span className='text-primary'>Minga</span>雪</p>
      </div>
      <section className='text-white p-4 py-16 md:px-8 lg:px-20'>
        <h1 className='text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>For the love of manga</h1>
        <h3 className='text-lg font-sm lg:text-2xl py-2'>Explore our varieties</h3>
        <p className='text-sm pb-2 lg:text-base'>#MingaLove</p>
        <button className='bg-white w-40 h-12 rounded-lg text-primary font-semibold text-2xl lg:w-48 lg:text-1xl'>Sign in!</button>
      </section>
    </header>
    <section className='flex justify-center items-center md:h-48 my-8 lg:h-96'> 
      <div className='flex flex-row bg-fondo bg-repeat sm:h-40 md:h-44 lg:h-56 w-11/12'>
        <div className='flex items-end justify-around px-20'>
          <img src={Orangeuno} className='w-32 h-44 md:w-38 md:h-48 lg:h-64 lg:w-72 mx-8' alt="" />
          <img src={Orangedos} className='w-36 h-48  md:w-38 md:h-56 lg:h-72 lg:w-52 py-4 mx-8' alt="" />
        </div>
        <div className='flex flex-col justify-center sm:w-56 text-white sm:pb-3 sm:pr-2 md:pb-5 md:pr-4 lg:w-96 mx-8 '>
          <h3 className='lg:text-3xl'>Shonen</h3>
          <p className='text-xs py-2 lg:text-sm'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
        </div>
      </div>
    </section>
    <footer>
      <div>
        <img src={Footer} alt="" className="w-full rounded-[50%_50%_48%52%/_0%_0%_100%_100%]"/>
      </div>
      <div className='flex flex-row justify-around h-60 items-center w-11/12 border-b-4'> 
        <div className='flex-row flex'>
          <p className='px-4'>Home</p>
          <p className='px-4'>Mangas</p>
        </div>
        <div className=''>
          <img src={Logo} alt="" />
        </div>
        <div className=''>
          <div className='flex flex-row justify-between py-4 '>
          <img src={Fb} alt="" />
          <img src={Tw} alt="" />
          <img src={Vm} alt="" />
          <img src={Yt} alt="" />
          </div>
          <div>
            <img src={Donate} alt="" />
          </div>
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