/* eslint-disable no-undef */
import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function Home () {
  const token = localStorage.getItem('token')
  return (

    <section className='sm:flex sm:justify-center sm:items-center sm:flex-col md:flex md:flex-col md:justify-center md:items-center text-white 2xl:mx-28 lg:mx-12 xl:mx-16'>
      <h1 className='font-bold py-3 text-5xl sm:text-5xl sm:text-center md:text-4xl 2xl:text-6xl'>For the love of manga</h1>
      <h3 className='text-lg font-sm 2xl:text-3xl 2xl:font-light'>Explore our varieties</h3>
      <p className='sm:hidden 2xl:text-2xl font-semibold pb-3'>#MingaLove❤</p>
      {token
        ? (

          <Anchor className='bg-white text-primary font-semibold rounded text-xl flex justify-center items-center h-12 sm:w-3/4 sm:3/4 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-2/12 ' to='/mangas/:page'>Explore Mangas!</Anchor>

          )
        : (

          <Anchor className='bg-white text-primary font-semibold rounded text-xl flex justify-center items-center h-12 sm:w-3/4 sm:3/4 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-2/12 ' to='/Login'>Login!</Anchor>
          )}
    </section>
  )
}
