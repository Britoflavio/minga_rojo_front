import Formsesion from '../components/Formsesion.jsx'

export default function SignIn () {
  return (
    <div>
      <div className='sm:h-screen sm:w-full sm:flex sm:justify-center sm:items-center h-screen w-full flex justify-center items-center'>
        <div className='sm:hidden h-screen w-1/2 bg-cover bg-center bg-no-repeat bg-bgsignup' />
        <div className='sm:h-screen sm:w-full h-screen w-1/2 flex justify-center flex-col'>
          <div className='flex items-center flex-col'>
            <img src='src\imagenes\logo-dos.png' alt='' />
            <h1 className='font-bold text-4xl m-3'>Welcome <span className='text-orange-600'>back</span>!</h1>
            <p className='sm:text-center'>Discover manga, manhua and manhwa, track your <br /> progress, have fun, read manga.</p>
          </div>
          <Formsesion />

        </div>
      </div>
    </div>
  )
}
