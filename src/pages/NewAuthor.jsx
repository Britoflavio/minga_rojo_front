import React, { useRef } from 'react'
import axios from 'axios'
import swal from 'sweetalert'


export default function NewAuthor() {
    let name = useRef()
    let last_name = useRef()
    let city = useRef()
    let createdAt = useRef()
    let photo = useRef()

    function handleform(event) {
        event.preventDefault()

        let data = new FormData()

            data.append('name',name.current.value)
            data.append('last_name',last_name.current.value)
            data.append('city',city.current.value)
            data.append('createdAt',createdAt.current.value)
            data.append('photo',photo.current.files[0])
        
        
        axios.post(`http://localhost:8000/authors`, data)
        .then(res=>{console.log(res)
          swal({
            title:'Author created!',
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
        <form onSubmit={(event)=>handleform(event)} className='flex flex-col items-center justify-center h-[100vh] ' >
          <h2 className='text-4xl' >New Author</h2>
          <div className='mt-10'>
            <div className='border-b-2 border-black border-opacity-50' >
              <input type="text" ref={name} placeholder='name' />
            </div>
            <div className='border-b-2 border-black border-opacity-50 mt-5' >
              <input type="text" ref={last_name} placeholder='Last name'/>
            </div>
            <div className='border-b-2 border-black border-opacity-50 mt-5 '>
              <input type="text" ref={city} placeholder='City'/>
            </div>
            <div className='border-b-2 border-black border-opacity-50 mt-5 '>
              <input type="text" ref={createdAt} placeholder='Date'/>
            </div>
            <div className='border-b-2 border-black border-opacity-50 mt-5 '>
              <input type="file" ref={photo} placeholder='Url profile image'/>
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