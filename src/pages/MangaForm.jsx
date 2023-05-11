import React, { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../../api";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions/mangaForm";

const {formManga}= actions

export default function MangasNew() {
  useEffect(
    ()=>{
      axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))
    },
    []
    )

    /* useSelector(store=>store) */
   /*  console.log(useSelector) */
    const reduxData =  useSelector(store=>store.formManga)
    
    const dispatch = useDispatch()   
    function saveData(){
      let dates = {
        title:title.current.value,
        category:category_id.current.value,
        description:description.current.value
      }
      console.log(dates)
      dispatch(formManga(dates))
    }
    let [categories,setCategories] = useState([])
    const categoryId = () =>{
      return categories.map(categorias=> <option key={categorias._id} value={categorias._id}>{categorias.name}</option>);
    }



  const title = useRef()
  const category_id = useRef()
  const description = useRef()
  
  function handlerForm(botton){
    botton.preventDefault()
    let dates = {
      title:title.current.value,
      category_id:category_id.current.value,
      description:description.current.value
    }

   


    console.log(dates)
/*     if ((title.current.value.length <= 5 || title.current.value.length >= 15 ) ||  (description.current.value.length <= 10) || description.current.value.length >= 75) {
      Swal.fire({
      title:"Upssss",
      text:"Failed to create Manga",
      icon:"error"
    })
      return;
    }else{
      Swal.fire({
        title:'Your new manga has been create successfully',
        icon:"success"
      })
    } */
    axios.post('http://localhost:8000/mangas',dates)
    .then(res => {
        console.log(res)
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 2000,
          width: "400px",
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'success',
          title: 'Your manga was successfully created',
        })
      })
    .catch(error=>{
      error.response.data.message
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        width: "400px",
      })
      Toast.fire({
        icon: 'error',
        title: 'Upps',
        text: error.response.data.message.join('\n')
      })
    })
    
    
  }
      
  return (
    <>

    <div className="flex flex-col justify-center items-center h-screen w-full bg-slate-200">
      <h1 className="text-5xl font-normal sm:text-4xl py-20">New Mangas</h1>
      <form onSubmit={handlerForm} className="w-2/5 h-2/4 flex flex-col justify-around items-center">
        <div>
          <input defaultValue={reduxData.title} onKeyUp={saveData} className="w-96 sm:w-56 border-b-2 bg-slate-200 border-slate-500 px-4 py-2 rounder" type="text" placeholder="Insert title"ref={title}/>
        </div>
        <div>
          <select defaultValue={reduxData.category} onChange={saveData} className="w-96 sm:w-56 border-b-2 bg-slate-200 border-slate-500 px-4 py-2 rounder"  ref={category_id}> 
            <option>Insert Category</option>
            {categoryId()}
          </select>
        </div>
        <div>
          <textarea defaultValue={reduxData.description} onKeyUp={saveData} className="w-96 sm:w-56 border-b-2 bg-slate-200 border-slate-500  px-4 py-2 rounder" type="text" placeholder="Insert description"ref={description}></textarea>
        </div>
        <button type="submit">
        <svg width="280" height="63" viewBox="0 0 280 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="280" height="63" rx="31.5" fill="url(#paint0_linear_2597_2408)"/>
          <path d="M116.576 40.168C115.344 40.168 114.24 39.968 113.264 39.568C112.288 39.168 111.504 38.576 110.912 37.792C110.336 37.008 110.032 36.064 110 34.96H114.368C114.432 35.584 114.648 36.064 115.016 36.4C115.384 36.72 115.864 36.88 116.456 36.88C117.064 36.88 117.544 36.744 117.896 36.472C118.248 36.184 118.424 35.792 118.424 35.296C118.424 34.88 118.28 34.536 117.992 34.264C117.72 33.992 117.376 33.768 116.96 33.592C116.56 33.416 115.984 33.216 115.232 32.992C114.144 32.656 113.256 32.32 112.568 31.984C111.88 31.648 111.288 31.152 110.792 30.496C110.296 29.84 110.048 28.984 110.048 27.928C110.048 26.36 110.616 25.136 111.752 24.256C112.888 23.36 114.368 22.912 116.192 22.912C118.048 22.912 119.544 23.36 120.68 24.256C121.816 25.136 122.424 26.368 122.504 27.952H118.064C118.032 27.408 117.832 26.984 117.464 26.68C117.096 26.36 116.624 26.2 116.048 26.2C115.552 26.2 115.152 26.336 114.848 26.608C114.544 26.864 114.392 27.24 114.392 27.736C114.392 28.28 114.648 28.704 115.16 29.008C115.672 29.312 116.472 29.64 117.56 29.992C118.648 30.36 119.528 30.712 120.2 31.048C120.888 31.384 121.48 31.872 121.976 32.512C122.472 33.152 122.72 33.976 122.72 34.984C122.72 35.944 122.472 36.816 121.976 37.6C121.496 38.384 120.792 39.008 119.864 39.472C118.936 39.936 117.84 40.168 116.576 40.168ZM137.87 33.088C137.87 33.472 137.846 33.872 137.798 34.288H128.51C128.574 35.12 128.838 35.76 129.302 36.208C129.782 36.64 130.366 36.856 131.054 36.856C132.078 36.856 132.79 36.424 133.19 35.56H137.558C137.334 36.44 136.926 37.232 136.334 37.936C135.758 38.64 135.03 39.192 134.15 39.592C133.27 39.992 132.286 40.192 131.198 40.192C129.886 40.192 128.718 39.912 127.694 39.352C126.67 38.792 125.87 37.992 125.294 36.952C124.718 35.912 124.43 34.696 124.43 33.304C124.43 31.912 124.71 30.696 125.27 29.656C125.846 28.616 126.646 27.816 127.67 27.256C128.694 26.696 129.87 26.416 131.198 26.416C132.494 26.416 133.646 26.688 134.654 27.232C135.662 27.776 136.446 28.552 137.006 29.56C137.582 30.568 137.87 31.744 137.87 33.088ZM133.67 32.008C133.67 31.304 133.43 30.744 132.95 30.328C132.47 29.912 131.87 29.704 131.15 29.704C130.462 29.704 129.878 29.904 129.398 30.304C128.934 30.704 128.646 31.272 128.534 32.008H133.67ZM148.195 26.464C149.763 26.464 151.011 26.976 151.939 28C152.883 29.008 153.355 30.4 153.355 32.176V40H149.275V32.728C149.275 31.832 149.043 31.136 148.579 30.64C148.115 30.144 147.491 29.896 146.707 29.896C145.923 29.896 145.299 30.144 144.835 30.64C144.371 31.136 144.139 31.832 144.139 32.728V40H140.035V26.608H144.139V28.384C144.555 27.792 145.115 27.328 145.819 26.992C146.523 26.64 147.315 26.464 148.195 26.464ZM155.391 33.28C155.391 31.904 155.647 30.696 156.159 29.656C156.687 28.616 157.399 27.816 158.295 27.256C159.191 26.696 160.191 26.416 161.295 26.416C162.175 26.416 162.975 26.6 163.695 26.968C164.431 27.336 165.007 27.832 165.423 28.456V22.24H169.527V40H165.423V38.08C165.039 38.72 164.487 39.232 163.767 39.616C163.063 40 162.239 40.192 161.295 40.192C160.191 40.192 159.191 39.912 158.295 39.352C157.399 38.776 156.687 37.968 156.159 36.928C155.647 35.872 155.391 34.656 155.391 33.28ZM165.423 33.304C165.423 32.28 165.135 31.472 164.559 30.88C163.999 30.288 163.311 29.992 162.495 29.992C161.679 29.992 160.983 30.288 160.407 30.88C159.847 31.456 159.567 32.256 159.567 33.28C159.567 34.304 159.847 35.12 160.407 35.728C160.983 36.32 161.679 36.616 162.495 36.616C163.311 36.616 163.999 36.32 164.559 35.728C165.135 35.136 165.423 34.328 165.423 33.304Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_2597_2408" x1="-86.9302" y1="-3.34603" x2="-79.6571" y2="101.627" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5722"/>
          <stop offset="0.666667" stopColor="#F97316"/>
          </linearGradient>
          </defs>
          </svg>
        </button>
      </form>
    </div>
    
    </>
  )
}