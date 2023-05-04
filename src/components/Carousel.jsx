import Izq from "../imagenes/izquierda.png"
import Der from "../imagenes/derecha.png"

import { useState,useEffect } from "react"
import axios from "axios"
import apiUrl from "../../api"

export default function Carousel() {
useEffect(
  ()=>{ axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err)) },
  [] //Array de dependencia vacio porque ftecheamos una vez y esos datos luego no cambian
)
let [categories,setCategories] = useState([])

let [counter, setCounter] = useState(0)
let sumar = () => {
  setCounter(counter + 1)
  if (counter === categories.length-1) {
      setCounter(0)
      /*  clearInterval(timer) */
    }
}
let restar = () => {
  setCounter(counter - 1)
  if (counter === 0) {
  setCounter(categories.length-1)
  }
}
  return (

  <section className='sm:hidden md:flex lg:flex xl:flex 2xl:flex justify-center items-center h-72 lg:h-[35vh] xl:h-[35vh] 2xl:h-[45vh]' >
    <div className='flex flex-row bg-repeat justify-between w-11/12 h-1/2' style={{backgroundColor:categories[counter]?.color}}>
      <button  className='2xl:w-28 2xl:flex 2xl:items-center 2xl:justify-center'><img onClick={restar} src={Izq} alt="" /></button>
      <div className='flex items-end justify-around w-3/6 mx-4'>
        <img src={categories[counter]?.character_photo} className='w-28 h-fit lg:w-40  xl:w-44  2xl:w-48 ' alt="" />
        <img src={categories[counter]?.cover_photo} className='w-28 h-fit lg:w-36 xl:w-36 2xl:w-44 py-2' alt="" />
      </div>
      <div className='flex flex-col justify-center text-white w-2/4 lg:px-4 xl:px-14 2xl:px-20'>
        <h3 className='xl:text-3xl 2xl:text-4xl 2xl:pb-8'>{categories[counter]?.name.charAt(0).toUpperCase()+categories[counter]?.name.slice(1)}</h3>
        <p className='text-xs text-[8px] 2xl:text-[13px] 2xl:w-96 '>{categories[counter]?.description}</p>
      </div>
      <button  className='2xl:w-28 2xl:flex 2xl:items-center 2xl:justify-center'><img onClick={sumar} src={Der} alt="" /></button>
    </div>
  </section>  

  )
}
