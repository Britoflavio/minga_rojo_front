
import Logo from "../imagenes/logo-dos.png"
import Menu from "../imagenes/Menu.png"
import LogoCelu from "../imagenes/LogoCelu.png"
import {useState} from 'react'
import { Link as Anchor } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../api"
import { useNavigate } from "react-router-dom"



export default function Navbar(){
  const [hide, setHide] = useState(false)
  function show() {
    setHide(!hide)
}

let user = JSON.parse(localStorage.getItem('user'))
let token = localStorage.getItem('token')
let navigate = useNavigate()

function handleLogout() {
    let token = localStorage.getItem('token')
let headers = {headers:{'Authorization':`Bearer ${token}`}}
console.log(token)

    axios.post(apiUrl+'auth/signout',null,headers)
    
        .then(res=> {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            navigate('/')
        })
        .catch(err => alert(err))
}


  return(
    <div className="w-full flex  justify-between  items-center absolute">
        <button><img onClick={show} src={Menu} alt="" /></button>
        <div className=''>
            <img src={Logo} className="sm:hidden" alt="" />
            <img src={LogoCelu} className="md:hidden lg:hidden xl:hidden 2xl:hidden" alt="" />
        </div>
        {hide ? (
            <>
                <div className="absolute w-screen sm:w-screen sm:h-screen self-start bg-fondo flex flex-col justify-start items-center xl:w-screen 2xl:w-full 2xl:left-0 2xl:top-0">
                    <div className="w-full flex justify-around items-center h-[15vh]">
                
                    <div className="mr-12 text-white">
                        {token && <img src={user.photo} className="p-1 h-10  w-10 rounded-[50%]" alt="" />}
                        {token && <p>{user.email}</p>}
                    </div>
                    <svg onClick={ show } className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </div>
                    <div className="flex flex-col justify-start w-full items-center gap-y-4 sm:h-auto sm:text-center">
                        <Anchor className="bg-white rounded-md w-3/4 h-12 flex justify-center items-center text-fondo font-medium" to="/">Home</Anchor>
                        {token&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="#">Comics</Anchor>}
                        {!token&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="/Register">Register</Anchor>}
                        {!token&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="/Login">LogIn</Anchor>}
                        {token&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="#">My comics</Anchor>}
                        {token&&<Anchor className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="#">Favorites</Anchor>}
                        {token&&<Anchor onClick={handleLogout} className="w-[30vw] h-[40px] flex justify-center items-center text-white font-medium" to="/">Logout</Anchor>}
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
