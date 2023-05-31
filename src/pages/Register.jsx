import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { Link as Anchor, useNavigate } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { gapi } from "gapi-script"
import GoogleLogin from 'react-google-login'
import Homepage from "../components/homepage";



const SignUp = (props)=>{
    let name= useRef()
    let email= useRef()
    let photo= useRef()
    let password= useRef()
    let role= useRef()
    let navigate = useNavigate()

    const client_id = "319081117660-1ujigk24s8s35kisom8jc259jqv5bbi6.apps.googleusercontent.com";
  
    useEffect (()=>{
        const start = ()=>{
          gapi.auth2.init({
            client_id: client_id, 
          
          })
        }
        gapi.load("client:auth2",start)
      },[] )
    
      const onSuccess = (response)=>{
         // console.log(response)
        const {email, imageUrl, googleId} = response.profileObj;
        let data ={
          email: email,
          photo: imageUrl,
          password: googleId,
      }
      axios.post( "http://localhost:8000/auth/signup", data)
    .then(res => {
      Swal.fire({
        title: 'check your email to verify your account',
        confirmButtonText: 'Ok!'
      })
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: err.response.data.message,
      })
    })
    }
    const onFailure = ()=>{
        console.log("Something went wrong");
      }




    function handleform(e){
        e.preventDefault()
       

        let data={
            photo:photo.current.value,
            email: email.current.value,
            password: password.current.value,
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
    }
 
    return (
        <div className="">

                <Navbar/>
            <div className="sm:h-screen sm:w-full sm:flex sm:justify-center         sm:items-center          h-screen w-full flex justify-center items-center">
                
                <div className="sm:h-screen sm:w-full
                                h-screen w-1/2 flex justify-center flex-col">
                                    
                    <div className="flex items-center flex-col">
                        <img src="src\imagenes\logo-dos.png" alt="" />
                        <h1 className="sm:font-bold sm:text-4xl sm:m-3">Welcome!</h1>
                        <p className="sm:text-center">Discover manga, manhua and manhwa, track your <br/> progress, have fun, read manga.</p>
                    </div>
                    
                    <form onSubmit={handleform} className="sm:flex sm:justify-center sm:flex-col
                flex justify-center sm:py-4 px-10 flex-col xl:py-16 ">
                    <fieldset className="flex justify-between border-2 rounded-lg h-14">
                        <legend className="text-orange-600">Email</legend>
                        <input ref={email} className="" type="email" placeholder="email" />

                        <img className='h-5' src="src\imagenes\img@.png" alt="" />

                    </fieldset>

                    <fieldset className="flex justify-between border-2 rounded-lg h-14">
                        <legend className="text-orange-600">Photo</legend>
                        <input ref={photo} className="" type="text" placeholder="photo" />

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
                        
                    <div className='btn'>
      <GoogleLogin
      client_id = {client_id}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      />
      </div>                

                    </div>

                        <Homepage/>
                    
                </form>

                </div>

                <div className="sm:hidden h-screen w-1/2 bg-cover bg-center bg-no-repeat bg-bgsignup">
                </div>
            </div>
        </div>

    )
 
}
export default SignUp