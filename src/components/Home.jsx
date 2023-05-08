import React from 'react'
import { Link as Anchor } from "react-router-dom"
let token = localStorage.getItem('token')

export default function Home() {
  return (


    <section className='md:px-[2%] sm:flex sm:justify-center sm:items-center sm:flex-col  
     md:flex-col md:justify-center text-white '>
      <h1 className='sm:text-5xl md:text-6xl text-6xl 2xl:text-8xl sm:text-center md:text-center lg:text-center font-bold'>For the love of manga</h1>
      <h3 className='text-lg font-sm py-2 2xl:text-4xl 2xl:font-light'>Explore our varieties</h3>
      <p className='sm:hidden   2xl:text-2xl py-2 font-semibold'>#MingaLove</p>
      
      
      
      {token?(
        <div className='sm:w-3/4 sm:3/4 md:w-4/12 sm:flex sm:justify-center sm:items-center rounded bg-white text-primary font-semibold text-xl md:flex md:justify-center'>
        <Anchor to="/" >Explore Mangas!</Anchor>
        </div>):(<div className='sm:w-3/4 sm:h-8 md:w-3/12  sm:flex sm:justify-center sm:items-center rounded bg-white text-primary font-semibold text-xl md:flex md:justify-center'>
      <Anchor to="/Login" >Login!</Anchor>
      </div>)}
    </section>
  )
}
