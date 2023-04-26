
import Logo from "../imagenes/logo-dos.png"
import Menu from "../imagenes/Menu.png"
import LogoCelu from "../imagenes/LogoCelu.png"
import {useState} from 'react'

export default function Navbar(){
  const [hide, setHide] = useState(false)
  function show() {
      setHide(!hide)
  }
  return(
    <div className="flex justify-between items-center absolute w-full  2xl:px-28 2xl:py-8">
    <button><img onClick={show} src={Menu} alt="" /></button>
    <div className=''>
      <img src={Logo} className="sm:hidden md:hidden" alt="" />
      <img src={LogoCelu} className="lg:hidden xl:hidden 2xl:hidden" alt="" />
    </div>
    {hide ? (
                <>
                    <div className="absolute w-screen sm:w-screen sm:h-screen self-start bg-fondo flex flex-col justify-start items-center xl:w-screen 2xl:w-full 2xl:left-0 2xl:top-0">
                        <div className="w-full flex justify-around items-center h-[15vh]">
                            
                            <div className="mr-12 text-white">
                                <p className="font-medium">Lucas Ezequiel Silva</p>
                                <p>lucasezequielsilva@gmail.com</p>
                            </div>
                            <svg onClick={show} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-start w-full items-center gap-y-4 sm:h-auto sm:text-center">
                            <a className="bg-white rounded-md w-3/4 h-12 flex justify-center items-center text-fondo font-medium" href="#">Home</a>
                            <a className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" href="#">Comics</a>
                            <a className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" href="#">My comics</a>
                            <a className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" href="#">Favorites</a>
                            <a className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" href="#">Logout</a>
                        </div>
                        
                    </div>
                </>
            ) : (
                <>
               
                </>
            )}
            
        </div>
    )
}
