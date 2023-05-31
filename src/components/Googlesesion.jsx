import React from 'react'
import { gapi } from "gapi-script"
import GoogleLogin from 'react-google-login'
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Googlesesion() {
  const client_id = "319081117660-1ujigk24s8s35kisom8jc259jqv5bbi6.apps.googleusercontent.com";
  const [user, setUser] = useState({})

    let navigate = useNavigate()

        let data={
            photo:user.imageUrl,
            email: user.name,
        }
        axios.post("http://localhost:8000/auth/signup",data)

        .then(res => {console.log(res)
            

            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'success',
                title: 'User Registred!',
              })
              navigate('/')}
          )
        .catch(err=>{
           
            Swal.fire({
                        icon:"error",
                        title: err.response.data.message
                    })
        

        })
        

  useEffect (()=>{
    const start = ()=>{
      gapi.auth2.init({
        client_id: client_id,
      
      })
    }
    gapi.load("client:auth2",start)
  },[] )

  const onSuccess = (response)=>{
    setUser(response.profileObj)
  }

  const onFailure = ()=>{
    console.log("Something went wrong");
  }

  return (
    <label>
        
    <button  
    className='sm:flex sm:px-9 sm:items-center  sm:h-10   sm:rounded sm:border-2 sm:bg-white sm:text-stone-400 sm:font-semibold sm:text-sm    

              md:flex md:px-10 md:items-center  md:h-8   md:rounded md:border-2 md:bg-white md:text-stone-400 md:font-semibold md:text-sm    


    '> <img src="src\imagenes\imgGoogle.png" alt="" /> Sign in whith Google</button>
    </label>
  )


    }

   