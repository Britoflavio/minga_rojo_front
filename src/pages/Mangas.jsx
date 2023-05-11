import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../../api";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../store/actions/mangas.js";


const {mangasFilter} = actions

export default function MangasCreate(){


const search = useRef('')
const category_id = useRef()
const [mangas,setMangas] = useState()
const [reload,setReload] =useState(false)
const [categories,setCategories] = useState([])
const [pagNext, setNextPag] = useState(1)
const [pagPrev, setPrevPag] = useState(0)

useEffect(
  ()=> {
    let checked =  checkedId()
    axios(apiUrl+`mangas?title=${search?.current.value}&category_id=${reduxData.categoriesChecked.join(',')}&order=1&page=${pagNext + pagPrev}&limit=`)
    .then(res=>setMangas(res.data.response))
    .catch(err=>console.log(err))
  },
  [reload, pagNext, pagPrev]
)
useEffect(
  ()=>{
    axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))
  },
  []
)

const reduxData = useSelector(store => store.mangasFilter)
const dispatch = useDispatch()

function checkedId(){
  let categories = Object.values(category_id.current)
    let values = []
      categories.forEach(each=>{
        if(each.checked){
          values.push(each.value)
        }
      })
      return values
}

function sendData() {
  let data = {
    title: search.current.value,
    category: category_id.current.value,
    categoriesChecked: checkedId()
  }
  dispatch(mangasFilter(data))
}

const NextPage = () => {
  setNextPag(pagNext + 1)
}
const PrevPage = () => {
  setPrevPag(pagPrev - 1)
}

const checkbox = (event)=> {
  const array = categories.map(category => ({
    id: category._id,
    name: category.name
  }));
  setReload(!reload)
 
}
  return(
    <>
  
      <div className="w-full h-[24rem] xl:h-[30rem] xl:bg-top flex flex-col justify-center items-center bg-MangasFondo bg-cover bg-center lg:bg-top">
        <h1 className="text-5xl h-28 text-white font-bold">Mangas</h1>
        <form className="flex justify-center rounded-full items-center bg-white w-5/6 h-1/6">
          <label type="button">
            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16.9584" cy="17.4584" r="10.7917" stroke="#F97316" strokeWidth="2"/>
              <path d="M30.8333 31.3333L26.2083 26.7083" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </label>
          <input defaultValue={reduxData.title} onKeyUp={() => { setReload(!reload); sendData() }} type="text" id="title" ref={search} placeholder=" Find your manga here"  className=" w-9/12 caret-inherit text-xl outline-none"/>
        </form>
      </div>
      <div className=" h-fit bg-slate-200 flex justify-center">
        <div className="min-h-screen xl:rounded-2xl xl:w-11/12 xl:m-[-2rem] rounded-[206px_206px_2px_27px/64px_64px_0px_1px;] w-full mt-[-5rem] mb-8 xl:bg-white bg-slate-200">
        <div className="pt-10 ml-[2.3rem] px-4">
          <p className="hidden md:flex sm:flex text-3xl">Explore</p>
        </div>
        <div className="hidden h-28 sm:flex md:flex justify-around mt-4">
          <div className="bg-Adventure bg-cover bg-center bg-black opacity-80 w-24 h-24 rounded-md flex flex-col justify-end pb-4">
            <div className="text-xs text-white font-normal flex justify-center">Adventurers</div>
          </div>
          <div className="bg-Nostalgic bg-cover bg-center bg-black opacity-80 w-24 h-24 rounded-md flex flex-col justify-end pb-4">
            <div className="w-full text-xs text-white font-normal flex justify-center">Nostalgic</div>
          </div>
          <div className="bg-Popular bg-cover bg-center bg-black opacity-80 w-24 h-24 rounded-md flex flex-col justify-end pb-4"> 
            <div className="w-full text-xs text-white font-normal flex justify-center">Popular</div>
          </div>
        </div>
        <form ref={category_id} onChange={() => { setReload(!reload),sendData() }} className="flex items-center justify-center mx-10">
          {categories && categories.map((category)=>
          <label className={ `m-2 h-8 w-1/4 flex items-center justify-center ${reduxData.categoriesChecked.includes(category._id) ? "bg-black !important" : "" }`} htmlFor={category._id} key={category._id} style={{backgroundColor:category.hover, color:category.color, padding:'0.3rem', borderRadius:'20px',  }}> 
            {category.name.charAt(0).toUpperCase()+category.name.slice(1)}
            <input defaultChecked={reduxData.categoriesChecked.includes(category._id)}
            className="hidden"
            name="category_id"
            onChange={checkbox}
            type="checkbox" 
            value={category._id}
            /* ref={category_id} */  
            id={category._id} />
          </label>)}
        </form>
        <div className="xl:grid-cols-2 sm:mx-4 mx-8 xl:gap-2 xl:grid mb-20" >
          {mangas?.map(manga=>
            <div key={manga._id} className="bg-white drop-shadow-xl mt-4 rounded-2xl ml-4 mr-4">
                <div className="flex h-48 xl:h-60 lg:h-64">
                  <div className='flex items-center' >
                    <div className='border-l-8 flex items-center h-[100px]' style={{ borderColor: manga.category_id.color }}></div>
                  </div>
                  <div className="flex w-3/5 flex-col justify-center">
                    <h1 className=" font-bold text-lg text-start ml-4">{manga.title}</h1>
                    <p className="flex items-center  font-bold ml-4">{manga.description.slice(0,40)}...</p>
                    <p className='ml-4 font-[500] font-poppins text-base' style={{ color: manga.category_id.color }} >{manga.category_id.name}</p>
                  </div>
                  <img className="rounded-[50%_50%_48%52%/100%_0%_0%_100%] w-1/2 h-full object-fit" src={manga?.cover_photo} alt="" />
                </div>
              </div>
            )}
        </div>
        <div className='h-32 flex justify-around items-center'>
            <button className='p-4 bg-orange-500' onClick={PrevPage}>Prev Pág</button>
            <button className='p-4 bg-orange-500' onClick={NextPage}>Next Pág</button>
          </div>
      </div>
      </div>
    </>
  )
}