import FooterDos from '../imagenes/Footer.png'
import Yt from '../imagenes/Youtube.png'
import Fb from '../imagenes/Facebook.png'
import Tw from '../imagenes/Twitter.png'
import Vm from '../imagenes/Vimeo.png'
import Donate from '../imagenes/donate.png'
import Logo from '../imagenes/logo-dos.png'
import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'
import DonateCM from '../pages/donate.jsx'

export default function Footer () {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  return (

    <>
      <footer className='h-full'>
        <img src={FooterDos} alt='' className='w-full h-32 2xl:h-52 xl:h-48 rounded-[100%_100%_70%70%/_0%_0%_100%_100%]' />
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 2xl:py-12 items-center justify-around border-b-4'>
          <div className='flex flex-col md:flex-row lg:flex-row  xl:flex-row 2xl:flex-row  just items-center lg:px-2'>
            <Anchor to='/' className='p-2'>Home</Anchor>
            <Anchor to='/mangas/:page' className='p-2'>Mangas</Anchor>
          </div>
          <div className='flex h-20 justify-center items-center sm:w-28'>
            <img src={Logo} alt='' />
          </div>
          <div className='flex flex-col h-24 sm:w-44'>
            <div className='flex flex-row justify-between py-3 '>
              <img src={Fb} alt='' />
              <img src={Tw} alt='' />
              <img src={Vm} alt='' />
              <img src={Yt} alt='' />
            </div>
            <button onClick={openModal}><img src={Donate} className='' alt='' /></button>
          </div>
        </div>
      </footer>
      <DonateCM open={open} setOpen={setOpen} />
    </>
  )
}
