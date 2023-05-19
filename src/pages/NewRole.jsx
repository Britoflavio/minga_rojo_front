import React from 'react'
import {Link as Anchor } from 'react-router-dom'

export default function NewRole() {
  return (
    <>
    <div className='flex md:flex-col sm:flex-col'>
        <div className=' w-[50vw] h-[83.5vh] lg:h-[93vh] flex flex-col justify-center md:w-screen md:h-[100vh] sm:w-screen sm:h-screen'>
            <div className='flex flex-col items-center'>
                <p className='text-[#FF5722]'>Change rol to</p>
                <img className='w-[8rem]' src="../../src/imagenes/logo-dos.png"/>
            </div>
            
            <div className='flex flex-col items-center mt-8'>
                <Anchor className='border border-[#F97316] rounded-[8px] flex justify-evenly mb-7  w-[30rem] cursor-pointer lg:w-[20rem] md:w-[20rem] sm:w-[20rem]' to={'/'}>
                    <img src="../../src/imagenes/join_author.png"/>
                    <div>
                        <p className='text-bold text-[#f97316]'>Join as an Author!</p>
                        <p className='text-[#fdba74]'>I'm a reader writting a manga</p>
                    </div>  
                </Anchor>
                <Anchor className='border border-[#F97316] rounded-[8px] flex justify-evenly  w-[30rem] cursor-pointer lg:w-[20rem]  md:w-[20rem] sm:w-[20rem]' to={'/'}>
                    <img className='h-[3rem]' src="../../src/imagenes/join_company.png"/>
                    <div>
                        <p className='text-bold text-[#f97316]'>Join as a Company!</p>
                        <p className='text-[#fdba74]'>I'm a company and i want to publish my comics</p>
                    </div>
                </Anchor>
            </div>
        </div>
        <div className=' w-[50vw] h-[83.5vh] bg-cover bg-bottom   bg-no-repeat text-white flex justify-center lg:h-[93vh] md:w-screen md:h-[100vh] sm:w-screen sm:h-screen'  style={{backgroundImage: `url(../../src/imagenes/photo_newrole.png)`}}>
            <div className='w-[25rem] mt-8 text-base lg:w-[20rem]'>
                <p>Minga.com is the best place to find manga reviews. We’ve been super impress by the quality of applicants.</p>
                <p className='mt-[5rem]'>-Ignacio Borraz</p>
            </div>
        </div>
    </div>
    </>
  )
}
