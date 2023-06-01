import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import actions from '../store/actions/token'

export default function Main () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.token())
  },
  [])
  const location = useLocation()
  if (['/Login', '/register'].includes(location.pathname)) {
    return <Outlet />
  }
  return (
    <>

      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}
