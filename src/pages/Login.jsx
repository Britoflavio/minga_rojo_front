import React from "react";
import Navbar from "../components/Navbar";
import Homepagesesion from "../components/Homepagesesion"
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";



const SignIn = (props)=>{

    const client_id = "319081117660-1ujigk24s8s35kisom8jc259jqv5bbi6.apps.googleusercontent.com";


    let email= useRef()
    let password= useRef()
    console.log(email);
    console.log(password);
    const [redirect, setRedirect] = useState(false);
    
    useEffect (()=>{
        const start = ()=>{
          gapi.auth2.init({
            client_id: client_id, 
          
          })
        }
        gapi.load("client:auth2",start)
      },[] )

      const onSuccess = (response)=>{
       const {email,  googleId} = response.profileObj;
       let data ={
         email: email,        
         password: googleId,
     }

     axios.post("http://localhost:8000/auth/signin",data)
        .then(res=>{



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
                title: 'User Logged',
            })

            localStorage
            .setItem('token',res.data.token)
            localStorage
            .setItem('user',JSON.stringify(res.data.user))

            navigate('/', { replace: true })
        })
        .catch(err=>{
            console.log(err);
            Swal.fire({
                icon:"error",
                title: err.response.data.message
            })

        })
      }
   const onFailure = ()=>{
    console.log("Something went wrong");
  }


    let navigate=useNavigate()

    function handleform(e){
        e.preventDefault()
        
        let data={
            email: email.current.value,
            password: password.current.value
        }

        axios.post("http://localhost:8000/auth/signin",data)
        .then(res=>{



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
                title: 'User Logged',
            })

            localStorage
            .setItem('token',res.data.token)
            localStorage
            .setItem('user',JSON.stringify(res.data.user))

            navigate('/', { replace: true })
        })
        .catch(err=>{
            console.log(err);
            Swal.fire({
                icon:"error",
                title: err.response.data.message
            })

        })
    }



    return (
        <div>
            <Navbar/>
            <div className="sm:h-screen sm:w-full sm:flex sm:justify-center         sm:items-center          h-screen w-full flex justify-center items-center">
                <div className="sm:hidden h-screen w-1/2 bg-cover bg-center bg-no-repeat bg-bgsignup">
                </div>
                <div className="sm:h-screen sm:w-full
                                h-screen w-1/2 flex justify-center flex-col">
                                    <div className="flex items-center flex-col">
            
            <img src="src\imagenes\logo-dos.png" alt="" />
            <h1 className="font-bold text-4xl m-3">Welcome <span className="text-orange-600">back</span>!</h1>
            <p className="sm:text-center">Discover manga, manhua and manhwa, track your <br/> progress, have fun, read manga.</p>
        
    </div>


    <form onSubmit={(e) => handleform(e)} className="sm:flex sm:justify-center sm:flex-col
                flex justify-center py-4 px-10 flex-col">
                    <fieldset className="flex justify-between border-2 rounded-lg h-14">
                        <legend className="text-orange-600">Email</legend>
                        <input className="" type="email" placeholder="email " ref={email} />

                        <img className='h-5' src="src\imagenes\img@.png" alt="" />

                    </fieldset>


                    <fieldset className="flex justify-between border-2 rounded-lg h-14">
                        <legend className="text-orange-600">Password</legend>
                        <input className="  " type="password" placeholder="password" ref={password} />

                        <img className='h-5' src="src\imagenes\imglock.png" alt="" />

                    </fieldset>
                    
                    <div className=" flex justify-center flex-col items-center text-center py-2">

                        <input value="Sign In" className='mb-2 w-5/6 h-8 md:w-3/4 lg:w-1/2 xl:w-3/12 2xl:w-2/12  rounded bg-primary text-white font-semibold  text-xl' type="submit" />
                    

                        <div className='btn'>
      <GoogleLogin
      client_id = {client_id}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      />
      </div>                 

                    </div>

                        <Homepagesesion/>
                    
                </form>



                </div>
            </div>
        </div>
       
    )
} 

export default SignIn


