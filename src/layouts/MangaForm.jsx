import React from "react";
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../../api";

export default function MangasNew() {
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
    axios.post(apiUrl+'/mangas-form',dates).then(res=>console.log(res))
  }
  return (
    <>

    <div className="h-screen w-full flex flex-col justify-center items-center bg-slate-200">
      <form onSubmit={handlerForm} className="w-full h-full flex flex-col justify-center items-center">
        <input className="border border-black px-4 py-2 rounder" type="text" placeholder="Insert title"ref={title}/>
        <input className="border border-black px-4 py-2 rounder" type="select" placeholder="Select category"ref={category_id}/>
        <input className="border border-black px-4 py-2 rounder" type="text" placeholder="Insert description"ref={description}/>
        <button type="submit">Send</button>
      </form>
    </div>

    </>
  )
}

