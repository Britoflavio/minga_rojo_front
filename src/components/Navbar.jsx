import Logo from "../imagenes/logo-dos.png"
import Menu from "../imagenes/Menu.png"
import LogoCelu from "../imagenes/LogoCelu.png"
import {useState, useEffect} from 'react'
import { useSelector,useDispatch  } from "react-redux"
import { useNavigate , useLocation, Link as Anchor } from "react-router-dom"
import actions  from "../store/actions/token"


export default function Navbar(){

    let user = useSelector(store=>store.user.user)
    const [hide, setHide] = useState(false)
    const dispatch= useDispatch()
    const location = useLocation()
    useEffect(() => {
        setHide(false);
      }, [location]);

    let role = JSON.parse(localStorage.getItem("user"))?.role;
   
    function show() {
        setHide(!hide)
    }
    function handleLogout() {
        try {
            dispatch(actions.logout())
            
        } catch (error) {
            console.log(error)
        }
    }

  return(
    <div className="absolute md:px-8 flex justify-between items-center w-full lg:px-12 xl:px-16 2xl:px-28 2xl:py-8">

    <button><img onClick={show} src={Menu} alt="" /></button>
    <div className=''>
      <img src={Logo} className="sm:hidden" alt="" />
      <img src={LogoCelu} className="md:hidden lg:hidden xl:hidden 2xl:hidden" alt=""/>
    </div>
        {hide && (
                <div className="absolute sm:w-screen self-start bg-fondo flex flex-col justify-start items-center w-[30%] h-screen  left-0 top-0">
                    <div className="w-full flex justify-around items-center h-[15vh]">
                        <div className="mr-12 text-white">
                            {user && <img src={user.photo} className="p-1 h-10  w-10 rounded-[50%]" alt="" />}
                            {user && <p>{user .email}</p>}
                        </div>
                        <svg onClick={ show } className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-start w-full items-center gap-y-4 sm:h-auto sm:text-center">
                        <Anchor className="rounded-md w-[30vw] h-[40px] flex justify-center items-center text-fondo font-medium text-white" to="/">Home</Anchor>
                        {role === 1 || role === 2 ? (user&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="/mymangas">My mangas</Anchor>): null}
                        {role === 1 || role === 2 ? (user&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="/mangas-form">New manga</Anchor>): null}
                        {!user&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="/Register">Register</Anchor>}
                        {!user&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="/Login">LogIn</Anchor>}
                        {user&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="/mangas/:page">Comics</Anchor>}
                        {user&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="#">Favorites</Anchor>}
                        {user&&<Anchor onClick={handleLogout} className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="/Login">Logout</Anchor>}
                    </div>
                </div>
        ) }
        
    </div>
    )
}