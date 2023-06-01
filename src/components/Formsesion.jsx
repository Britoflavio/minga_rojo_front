import React, { useRef } from 'react'
import Googlesesion from './Googlesesion'
import Homepagesesion from './Homepagesesion'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import actions from '../store/actions/token'

export default function Formsesion (e) {
  const dispatch = useDispatch()
  const email = useRef()
  const password = useRef()

  const navigate = useNavigate()
  function handleform (e) {
    e.preventDefault()

    const data = {
      email: email.current.value,
      password: password.current.value
    }
    dispatch(actions.signin(data))
      .then(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 800,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'User Logged'
        })
        navigate('/', { replace: true })
      })
      .catch(err => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: err.response.data.message
        })
      })
  }
  return (

    <form
      onSubmit={(e) => handleform(e)} className='sm:flex sm:justify-center sm:flex-col
                flex justify-center py-4 px-10 flex-col'
    >
      <fieldset className='flex justify-between border-2 rounded-lg h-14'>
        <legend className='text-orange-600'>Email</legend>
        <input className='' type='email' placeholder='email ' ref={email} />
        <img className='h-5' src='src\imagenes\img@.png' alt='' />
      </fieldset>
      <fieldset className='flex justify-between border-2 rounded-lg h-14'>
        <legend className='text-orange-600'>Password</legend>
        <input className='  ' type='password' placeholder='password' ref={password} />
        <img className='h-5' src='src\imagenes\imglock.png' alt='' />
      </fieldset>
      <div className=' flex justify-center flex-col items-center text-center py-2'>
        <input value='Sign In' className='mb-2 w-5/6 h-8 md:w-3/4 lg:w-1/2 xl:w-3/12 2xl:w-2/12  rounded bg-primary text-white font-semibold  text-xl' type='submit' />
        <Googlesesion />
      </div>
      <Homepagesesion />
    </form>
  )
}
