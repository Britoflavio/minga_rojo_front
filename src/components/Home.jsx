import React from 'react'

export default function Home() {
  return (
    <section className='flex flex-col m-20  sm:m-8 sm:items-center md:items-center lg: text-white 2xl:pl-24'>
      <h1 className='sm:text-5xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl sm:text-center md:text-center font-bold'>For the love of manga</h1>
      <h3 className='text-lg font-sm py-2 lg:text-base 2xl:text-4xl 2xl:font-light'>Explore our varieties</h3>
      <p className='sm:hidden py-0 md:text-sm 2xl:text-2xl font-semibold'>#MingaLove</p>
      <button className='w-5/6 h-12 md:w-48 lg:w-1/2 xl:w-3/12 2xl:w-2/12  rounded bg-white text-primary font-semibold text-2xl'>Sign in!</button>
    </section>
  )
}
