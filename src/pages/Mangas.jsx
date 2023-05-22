import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../../api";
import { useSelector, useDispatch } from "react-redux";
import actions from "../store/actions/mangas";
import { Link as Anchor, useNavigation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const {mangasFilter} = actions

export default function MangasCreate(){


const search = useRef('')
const category_id = useRef()
const [mangas,setMangas] = useState()
const [reload,setReload] =useState(false)
const [categories,setCategories] = useState([])
const [page,setPage] = useState(1)
const [count,setCount] = useState()


useEffect(
  ()=> {
    let checked =  checkedId()
    axios(apiUrl+`mangas?title=${search?.current.value}&category_id=${reduxData.categoriesChecked.join(',')}&order=1&page=${page}&limit=`)
    .then(res=>{
      setMangas(res.data.response)
      setCount(res.data.count)
    })
    .catch(err=>console.log(err))
  },
  [reload, page,count]
  )
 
  useEffect(
  ()=>{
    axios(apiUrl+'categories')
    .then(res=>setCategories(res.data.categories))
    .catch(err=>console.log(err))
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
  setPage(page + 1)
}
const PrevPage = () => {
  setPage(page- 1)
}

const checkbox = (event)=> {
  const array = categories.map(category => ({
    id: category._id,
    name: category.name
  }));

 
}
  return(
    <>
  
      <div className="h-[24rem] flex flex-col justify-center items-center bg-MangasFondo bg-cover bg-center object-cover lg:bg-top lg:bg-MangasFondoDos lg:h-[29rem] xl:bg-MangasFondoDos xl:h-[29rem] 2xl:h-[37rem] 2xl:bg-MangasFondoDos">
        <h1 className="text-5xl h-28 text-white font-bold xl:flex xl:items-center 2xl:flex 2xl:items-center">Mangas</h1>
        <form className="flex justify-center rounded-full items-center bg-white w-5/6 h-1/6 lg:mt-4 lg:justify-start lg:bg-slate-200 lg:h-12 lg:w-4/6 lg:rounded-lg xl:mt-4 xl:justify-start xl:bg-slate-200 xl:h-12 xl:w-4/6 xl:rounded-lg 2xl:mt-4 2xl:justify-start 2xl:bg-slate-200 2xl:h-16 2xl:w-7/12 2xl:rounded-lg">
          <label type="button" className="w-12 flex justify-center lg:ml-4 xl:ml-4 2xl:ml-4">
            <svg width="40" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16.9584" cy="17.4584" r="10.7917" stroke="#F97316" strokeWidth="2"/>
              <path d="M30.8333 31.3333L26.2083 26.7083" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </label>
          <input defaultValue={reduxData.title} onKeyUp={() => { setReload(!reload); sendData() }} type="text" id="title" ref={search} placeholder="Find your manga here"  className="w-9/12 caret-inherit text-xl outline-none lg:bg-slate-200 xl:bg-slate-200 2xl:bg-slate-200"/>
        </form>
      </div>
      <div className=" h-fit bg-slate-200 flex justify-center">
        <div className="min-h-screen rounded-[206px_206px_2px_27px/64px_64px_0px_1px;] w-full mt-[-5rem] lg:mt-[-3rem] lg:bg-white lg:rounded-2xl lg:w-11/12 xl:mt-[-3rem] mb-8 bg-slate-200 xl:bg-white xl:rounded-2xl xl:w-11/12 xl:m-[-2rem] 2xl:bg-white 2xl:rounded-2xl 2xl:w-11/12 2xl:m-[-5rem]">
          <div className="pt-10 ml-[2.3rem] px-4">
            <p className="hidden sm:flex md:flex text-3xl">Explore</p>
          </div>
          <div className="hidden h-28 justify-around mt-4 sm:flex md:flex">
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
          <form ref={category_id} onChange={() => { setReload(!reload),sendData() }} className="flex items-center justify-center mx-10 lg:mx-8 lg:justify-start xl:mx-20  xl:justify-start 2xl:mx-60 2xl:justify-start">
            {categories && categories.map((category)=>
            <label className={ `m-2 h-8 w-1/4 flex items-center font-bold justify-center lg:w-20 xl:w-20 2xl:w-20 ${reduxData.categoriesChecked.includes(category._id) ? "bg-orange-400 text-black font-semibold !important" : "" }`} htmlFor={category._id} key={category._id} style={{backgroundColor:category.hover, color:category.color ,padding:'0.3rem', borderRadius:'20px',  }}> 
              {category.name}
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
          <div className="m-8 sm:mx-4 lg:gap-2 lg:grid lg:mx-8 lg:grid-cols-2 xl:gap-2 xl:grid xl:mx-20 xl:grid-cols-2 2xl:gap-2 2xl:grid 2xl:grid-cols-2 2xl:mx-60" >
            {mangas && mangas.length > 0 ? (
              mangas?.map((manga=>
                <>
                  <div key={manga._id} className="bg-white shadow-xl mt-4 rounded-2xl ml-4 mr-4">
                    <div className="flex h-48 lg:h-56 xl:h-48 2xl:h-56">
                      <div className='flex items-center'>
                        <div className='border-l-8 h-2/3' style={{ borderColor: manga.category_id.color }}></div>
                      </div>
                      <div className="flex w-3/5 flex-col justify-center">
                        <h1 className=" font-bold text-lg text-start ml-4">{manga.title}</h1>
                        <p className="flex items-center  font-bold ml-4"></p>
                        <p className='ml-4 font-semibold text-base' style={{ color: manga.category_id.color }}>{manga.category_id.name}</p>
                        <Anchor className="flex justify-center" to={`/mangas/manga/${manga._id}`}><button className="bg-[#D1FBF0] text-[#00BA88] rounded-xl m-4 w-1/2">Read</button></Anchor>
                      </div>
                      <img className="rounded-[50%_50%_48%52%/100%_0%_0%_100%] w-1/2 h-full object-fill" src={manga?.cover_photo} alt="" />
                    </div>
                  </div>

                </>))
                
                  ) : (
                  <p className='xl:grid-hidden flex justify-center items-center text-black font-semibold h-36'>We couldn't find this title.</p>
                )}
            </div>
            <div className='h-32 flex justify-around items-center mb-8 2xl:mb-16'>
             {page == 1 ? null : (<button className='p-4 bg-orange-500' onClick={PrevPage}>Prev Pág</button>)}
             {page > count-1 ? null : (<button className='p-4 bg-orange-500' onClick={NextPage}>Next Pág</button>) }
            </div>
        </div>
      </div>
    </>
  )
}