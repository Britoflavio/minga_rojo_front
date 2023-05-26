import React, { useRef } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'
import apiUrl from '../../api'

export default function NewCompany() {
    let name = useRef()
    let website = useRef()
    let logo = useRef()
    let description= useRef()
    function handleform(event){
        event.preventDefault()
        let data ={
            name:name.current.value,
            website:website.current.value,
            logo:logo.current.value,
            description:description.current.value
        }
        axios.post(`http://localhost:8000/companies/`, data)
        .then(res=>{console.log(res)
          swal({
            title:'Company created!',
            icon: 'success'
          })
        })
        .catch(err=>{
          console.log(err.response)
           swal({
            title:'Error',
            text: err.response.data.message.join('\n') ,
            icon: 'error'
          })
        })
    }
  return (
    <>
    <div>
        <form onSubmit={(event)=>handleform(event)} className='flex flex-col items-center justify-center h-[100vh]' >
          <h2 className='text-4xl' >New Company</h2>
          <div className='mt-10'>
            <div className='border-b-2 border-black border-opacity-50' >
              <input type="text" ref={name} placeholder='name' />
            </div>
            <div className='border-b-2 border-black border-opacity-50 mt-5' >
              <input type="text" ref={website} placeholder='website'/>
            </div>
            <div className='border-b-2 border-black border-opacity-50 mt-5 '>
              <input type="text" ref={logo} placeholder='URL Profile image'/>
            </div>
            <div className='border-b-2 border-black border-opacity-50 mt-5 '>
              <input type="text" ref={description} placeholder='Description'/>
            </div>
          </div>
          <div className='mt-10'>
            <input className='text-white bg-gradient-to-r from-[#F97316] to-[#FF5722] py-[1rem] px-[5rem] rounded-full text-bold text-lg cursor-pointer' type="submit" value="Send" />
          </div>
        </form>
    </div>    
    </>
  )
}