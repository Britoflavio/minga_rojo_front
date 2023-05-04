import React from 'react'
import Homepage from './homepage'
import Googlesesion from './Googlesesion'
import Homepagesesion from './Homepagesesion'
import { useRef} from 'react'
import axios from 'axios'


export default function Formsesion(e) {
    
    let email= useRef()
    let password= useRef()
    console.log(email);
    console.log(password);
    
    function handleform(e){
        e.preventDefault()
        

        let data={
            email: email.current.value,
            password: password.current.value
        }
        axios.post("http://localhost:8000/auth/signin",data)
        .then(res=>{
            alert('respuesta joi',res)
            console.log(res)
            localStorage
            .setItem('token',res.data.token)
            localStorage
            .setItem('user',JSON.stringify(res.data.user))
        })
        .catch(err=>{
            console.log(err.response.data.message)
        alert(err.response.data.message)
        })
    }
  return (
    
    <form onSubmit={(e) => handleform(e)} className="sm:flex sm:justify-center sm:flex-col
                flex justify-center py-4 px-10 flex-col">
                    <fieldset className="flex justify-between border-2 rounded-lg h-14">
                        <legend className="text-orange-600">Email</legend>
                        <input className="" type="email" placeholder="email " ref={email} />
                        <img src="src\imagenes\img@.png" alt="" />
                    </fieldset>


                    <fieldset className="flex justify-between border-2 rounded-lg h-14">
                        <legend className="text-orange-600">Password</legend>
                        <input className="  " type="password" placeholder="password" ref={password} />
                        <img src="src\imagenes\imglock.png" alt="" />
                    </fieldset>
                    
                    <div className=" flex justify-center flex-col items-center text-center py-2">

                        <input value="Sign In" className='mb-2 w-5/6 h-8 md:w-3/4 lg:w-1/2 xl:w-3/12 2xl:w-2/12  rounded bg-primary text-white font-semibold  text-xl' type="submit" />
                    
                        {/* <button  className='mb-2 w-5/6 h-8 md:w-3/4 lg:w-1/2 xl:w-3/12 2xl:w-2/12  rounded bg-primary text-white font-semibold  text-xl'>Sign in</button> */}

                        <Googlesesion/>                     

                    </div>

                        <Homepagesesion/>
                    
                </form>
                
  )
}
