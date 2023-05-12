

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { Link as Anchor } from "react-router-dom"





export default function Main() {
  const location = useLocation()
  if (location.pathname !== '/'){

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

