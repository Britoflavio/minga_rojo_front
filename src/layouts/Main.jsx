import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import actions  from "../store/actions/token"



export default function Main() {
  
  const dispatch= useDispatch()
  const store = useSelector(store=>store)
  useEffect(()=>{
    dispatch(actions.token())
  },
  [])


  const location = useLocation()
  if (["/Login","/Register"].includes(location.pathname)){ 
    return <Outlet/>
 }
  return (
    <>
    
    <Navbar/>
      <Outlet/>
    <Footer/>

    </>
  )
}

