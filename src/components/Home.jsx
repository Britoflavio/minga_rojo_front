import React from 'react'

export default function Home() {
  return (
    <section className='flex flex-col sm:items-center md:items-center lg:items-center text-white py-52 xl:px-20 xl:py-36 2xl:pt-28 2xl:pl-28'>
      <h1 className='sm:text-5xl md:text-6xl text-6xl 2xl:text-8xl sm:text-center md:text-center lg:text-center font-bold'>For the love of manga</h1>
      <h3 className='text-lg font-sm py-2 2xl:text-4xl 2xl:font-light'>Explore our varieties</h3>
      <p className='sm:hidden md:hidden lg:hidden md:text-sm 2xl:text-2xl py-2 font-semibold'>#MingaLove</p>
      <button className='w-5/6 h-12 md:w-3/4 lg:w-1/2 xl:w-3/12 2xl:w-2/12  rounded bg-white text-primary font-semibold text-2xl'>Sign in!</button>
    </section>
  )
}
