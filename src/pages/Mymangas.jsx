import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../store/actions/mangas";
import categories_read from "../store/actions/categories"
import mangas_actions from "../store/actions/mangaud"
import Swal from "sweetalert2";
import { Link as Anchor, useNavigate} from 'react-router-dom'
import Editmangas from "./Editmanga";

const  {categoriesRead} = categories_read
const {manga_delete, manga_read,manga_update} = mangas_actions
const {mangasFilter} = actions

export default function MangasCreate(){

const [reload,setReload] =useState(false)
const [open,setOpen] = useState(false)
const [mangaId,setMangaId] = useState()
const categories = useSelector(store => store.categories.categories)
const mangas = useSelector(store => store.manga.manga)
const reduxData = useSelector(store => store.mangasFilter)
const category_id = useRef()
const dispatch = useDispatch()
const navigate = useNavigate()

const openModal = (manga_id) => {
  setMangaId(manga_id)
  setOpen(true)
}
  
useEffect(
  ()=>{
    /* let checked = checkedId() */
    dispatch(categoriesRead())
    dispatch(manga_read())
    dispatch(manga_update())
  },
  [dispatch]
  )

  function urlChapter(id){
    navigate(`/chapter-form/${id}`)
  }

  function urlDetails(id){
    navigate(`/mangas/manga/${id}`)
  }

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
      category: category_id.current.value,
      categoriesChecked: checkedId()
    }
    dispatch(mangasFilter(data))
  }
  
  const alertDelete = (httpCb) => {
    Swal.fire({
      title:"WARNING!",
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00BA88',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        httpCb()
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        )
      }
      else {
        Swal.fire(
          'Cancelled',
          'Your manga is safe :)',
          'error'
        )
      }
    })
  }

  const checkbox = ()=> {
   categories.map(category => ({
      id: category._id,
      name: category.name
    }));
    
  }

  let role = JSON.parse(localStorage.getItem("user"))?.role;
  const authorName = mangas.find(each => each?.author_id)?.author_id.name;
 
  return(
    <>
     {role  === 1 || role === 2 ? (<div>
        <div className="h-[24rem] flex flex-col justify-center items-center bg-Mymanga bg-cover bg-center object-cover lg:bg-top lg:bg-Mymanga lg:h-[29rem] xl:bg-Mymanga xl:h-[29rem] 2xl:h-[37rem] 2xl:bg-Mymanga">
          <h1 className="text-5xl h-28 text-white font-bold xl:flex xl:items-center 2xl:flex 2xl:items-center">{authorName}</h1>
        </div>
        <div className=" h-fit bg-slate-200 flex justify-center">
          <div className="min-h-screen rounded-[206px_206px_2px_27px/64px_64px_0px_1px;] w-full mt-[-5rem] lg:mt-[-3rem] lg:bg-white lg:rounded-2xl lg:w-11/12 xl:mt-[-3rem] mb-8 bg-slate-200 xl:bg-white xl:rounded-2xl xl:w-11/12 xl:m-[-2rem] 2xl:bg-white 2xl:rounded-2xl 2xl:w-11/12 2xl:m-[-5rem]">
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
                
                id={category._id} />
              </label>)}
            </form>
            <Anchor to="/mangas-form" className="flex justify-center items-center flex-col-reverse">Add manga<svg width="21" height="21" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M5.5 2C5.71478 2 5.88889 2.17411 5.88889 2.38889V5.11111L8.61111 5.11111C8.82589 5.11111 9 5.28522 9 5.5C9 5.71478 8.82589 5.88889 8.61111 5.88889H5.88889V8.61111C5.88889 8.82589 5.71478 9 5.5 9C5.28522 9 5.11111 8.82589 5.11111 8.61111V5.88889H2.38889C2.17411 5.88889 2 5.71478 2 5.5C2 5.28522 2.17411 5.11111 2.38889 5.11111L5.11111 5.11111V2.38889C5.11111 2.17411 5.28522 2 5.5 2Z" fill="#222222"/>
                              <rect x="0.5" y="0.5" width="10" height="10" rx="5" stroke="#222222"/>
                              </svg></Anchor>
            <div className="m-8 sm:mx-4 lg:gap-2 lg:grid lg:mx-8 lg:grid-cols-2 xl:gap-2 xl:grid xl:mx-20 xl:grid-cols-2 2xl:gap-2 2xl:grid 2xl:grid-cols-2 2xl:mx-60" > 
              {mangas?.map((manga=>
                  <>
                    
                    <div key={manga._id} className="bg-white shadow-xl mt-4 rounded-2xl ml-4 mr-4">
                      <div className="flex h-48 lg:h-56 xl:h-48 2xl:h-56">
                        <div className='flex items-center'>
                          <div className='border-l-8 h-2/3' style={{ borderColor: manga?.category_id.color }}></div>
                        </div>
                        <div className="flex w-3/5 flex-col justify-between">
                          <div className="flex m-2">
                              <svg onClick={()=>urlChapter(manga._id)} width="21" height="21" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M5.5 2C5.71478 2 5.88889 2.17411 5.88889 2.38889V5.11111L8.61111 5.11111C8.82589 5.11111 9 5.28522 9 5.5C9 5.71478 8.82589 5.88889 8.61111 5.88889H5.88889V8.61111C5.88889 8.82589 5.71478 9 5.5 9C5.28522 9 5.11111 8.82589 5.11111 8.61111V5.88889H2.38889C2.17411 5.88889 2 5.71478 2 5.5C2 5.28522 2.17411 5.11111 2.38889 5.11111L5.11111 5.11111V2.38889C5.11111 2.17411 5.28522 2 5.5 2Z" fill="#222222"/>
                              <rect x="0.5" y="0.5" width="10" height="10" rx="5" stroke="#222222"/>
                              </svg>
                            <Anchor className="mx-1">
                              <svg width="21" height="21" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.81694 3.18306C7.57286 2.93898 7.17714 2.93898 6.93306 3.18306L6.65755 3.45857L7.54143 4.34245L7.81694 4.06694C8.06102 3.82286 8.06102 3.42714 7.81694 3.18306Z" fill="#222222"/>
                                <path d="M7.28889 4.59499L6.40501 3.71111L3.51195 6.60416C3.3651 6.75102 3.25715 6.93215 3.19786 7.13119L3.00744 7.77044C2.98872 7.83328 3.00594 7.90133 3.05231 7.94769C3.09867 7.99406 3.16672 8.01128 3.22956 7.99256L3.86881 7.80214C4.06785 7.74285 4.24899 7.6349 4.39584 7.48804L7.28889 4.59499Z" fill="#222222"/>
                                <rect x="0.5" y="0.5" width="10" height="10" rx="5" stroke="#222222"/>
                              </svg>
                            </Anchor>
                          </div>
                          <div >
                            <h1 className=" font-bold text-lg text-start ml-4" onClick={()=>urlDetails(manga._id)}>{manga?.title}</h1>
                            <p className="flex items-center  font-bold ml-4"></p>
                            <p className='ml-4 font-semibold text-base' style={{ color: manga?.category_id.color }}>{manga?.category_id.name}</p>
                          </div>
                         
                          <div className="flex justify-around">
                            <button onClick={() => openModal(manga?._id)} className=" my-2 w-5/12 h-8 rounded-lg text-[#8883F0] bg-[#E0DBFF]">Edit</button>
                            <button onClick={() => alertDelete( () => dispatch(manga_delete({id:manga?._id})))} className=" w-5/12 my-2  rounded-lg text-[#EF8481] bg-[#FFE0DF] ">Delete</button>
                          </div>
                        </div>
                        <img className="rounded-[50%_50%_48%52%/100%_0%_0%_100%] w-1/2 h-full object-fill" onClick={()=>urlDetails(manga._id)} src={manga?.cover_photo} alt="" />
                      </div>
                    </div>
                  </>))
                  }
              </div>
              
          </div>
        </div>
      </div>) : (
        navigate(`/`)
      ) }
      
      <Editmangas open={open} mangaId={mangaId} setOpen={setOpen} />
    </>
  )
}