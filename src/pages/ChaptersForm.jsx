import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'


export default function ChaptersForm() {
  let id = useParams()
  let title = useRef()
  let order = useRef()
  let pages = useRef()

  function handleform(event){
    event.preventDefault()

    let data ={
      manga_id: id.id_manga,
      title: title.current.value,
      order: order.current.value,
      pages: pages.current.value.split(",")
    }
    axios.post('http://localhost:8000/chapters/', data)
    .then(res=>{console.log(res)
      console.log(res);
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
    
      
        <form onSubmit={(event)=>handleform(event)} className='flex flex-col items-center justify-center h-[50vh] ' >
          <h2 className='text-4xl' >New chapter</h2>
          <div className='mt-10'>
            <div className='border-b-2 border-black border-opacity-50' >
              <input type="text" ref={title} placeholder='Insert title' />
            </div>
            <div className='border-b-2 border-black border-opacity-50 mt-5' >
              <input type="number" ref={order} placeholder='Insert order'/>
            </div>
            <div className='border-b-2 border-black border-opacity-50 mt-5 '>
              <input type="text" ref={pages} placeholder='Insert pages'/>
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
