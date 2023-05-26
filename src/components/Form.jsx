import React from 'react'
import Google from './google'
import Homepage from './homepage'

import { Link as Anchor, useNavigate } from "react-router-dom"
import {useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'




export default function Form() {
   
    let email= useRef()
    let photo= useRef()
    let password= useRef()
    let navigate = useNavigate()


    function handleform(e){
        e.preventDefault()
       

        let data= new FormData()
        data.append('email',email.current.value)
        data.append('photo',photo.current.files[0])
        data.append('password',password.current.value)
        


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
    }
  return (
    <form onSubmit={handleform} className="sm:flex sm:justify-center sm:flex-col
                flex justify-center sm:py-4 px-10 flex-col xl:py-16 ">
                    <fieldset className="flex justify-between border-2 rounded-lg h-14">
                        <legend className="text-orange-600">Email</legend>
                        <input ref={email} className="" type="email" placeholder="email" />

                        <img className='h-5' src="src\imagenes\img@.png" alt="" />

                    </fieldset>

                    <fieldset className="flex justify-between border-2 rounded-lg h-14">
                        <legend className="text-orange-600">Photo</legend>
                        <input ref={photo} className="" type="file" placeholder="photo" />

                        <img className='h-5' src="src\imagenes\imgcam.png" alt="" />

                    </fieldset>

                    <fieldset className="flex justify-between border-2 rounded-lg h-14">
                        <legend className="text-orange-600">Password</legend>
                        <input ref={password} className="  " type="password" placeholder="password" />

                        <img className='h-5' src="src\imagenes\imglock.png" alt="" />

                    </fieldset>
                    
                    <div className=" flex justify-center flex-col items-center text-center py-2">
                    <label htmlFor="" className="flex items-center">
                    <input  required className="sm:w-5 sm:h-5" type="checkbox" />
                        Send notification to my email                        
                    </label>
                    <input className='mb-2 w-5/6 h-8 md:w-3/4 lg:w-1/2 xl:w-3/12 2xl:w-2/12  rounded bg-primary text-white font-semibold  text-xl' type="submit" value="SignUp" />
                        
                        <Google/>                     

                    </div>

                        <Homepage/>
                    
                </form>
  )
}