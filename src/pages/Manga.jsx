import ok from '../imagenes/ok.png'
import bad from '../imagenes/bad.png'
import like from '../imagenes/like.png'
import sorprise from '../imagenes/sorprise.png'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import VITE_API from '../../api'
import { useSelector, useDispatch } from 'react-redux'
import actionsManga from '../store/actions/oneManga.js'
import actionsChapter from '../store/actions/oneChapter.js'

const { oneManga } = actionsManga
const { oneChapter } = actionsChapter

export default function Manga () {
  const manga = useSelector(store => store.oneManga)
  console.log(manga)

  /* const { manga, chapter } = useSelector((store) => ({
    manga: store.oneManga,
    chapter: store.oneChapter
  })) */

  const { id } = useParams()
  // console.log({ id });
  const [mangas, setMangas] = useState([])
  const [show, setShow] = useState([true])
  const [chapters, setChapters] = useState({ data: [], totalPages: 1 })
  const [page, setPage] = useState(1)
  const [reload, setReload] = useState(false)
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const [cantPages1, setCantPages2] = useState(0)

  useEffect(() => {
    const url = VITE_API + `mangas/${id}`
    console.log(url)
    axios.get(url)
      .then(res => {
        setMangas(res.data.response)
        console.log(res.data.response)
        dispatch(oneManga({
          title: res.data.response.title,
          cover_photo: res.data.response.cover_photo,
          description: res.data.response.description
        }))
      })
      .catch(err => console.log(err))
  }, [dispatch, id])
  // console.log(mangas);

  useEffect(() => {
    axios.get(VITE_API + `chapters?manga_id=${id}&page=${page}&limit=`)
      .then(res => {
        const data = res.data.response
        console.log('chapters', res)
        setChapters(data)
        dispatch(oneChapter(data))
        setCount(res.data.count)
        setCantPages2(res.data.cantPages1)
      })
      .catch(err => console.log(err))
  },
  [dispatch, id, page, reload]
  )
  // console.log(count);
  function next () {
    setPage(prevPage => prevPage + 1)
    setReload(!reload)
  }

  function prev () {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
      setReload(!reload)
    }
    // console.log(page);
  }

  // console.log(page)
  // console.log(chapters.length);

  return (
    <>
      <div />
      {show
        ? (
          <div className='min-h-screen pt-20 flex flex-col items-center'>

            <img className='sm:w-72 sm:h-80 ' src={manga.cover_photo} alt='' />

            <h2 className='text-5xl m-5'>{manga.title}</h2>

            <div className='flex justify-between w-4/5'>
              <h2 className='bg-rose-300 rounded-3xl w-28 h-8 flex items-center justify-center text-pink-600'>{mangas.category_id?.name}</h2>
              <h2 className='bg-slate-300 rounded-3xl w-28 h-8 flex items-center justify-center '>Author</h2>
            </div>

            <div className='flex justify-between w-72 mt-8'>
              <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full w-16 h-16 flex items-center justify-center '>
                <img className='w-12' src={ok} alt='' />
              </div>

              <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full w-16 h-16 flex items-center justify-center'>
                <img className='w-12' src={bad} alt='' />
              </div>

              <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full w-16 h-16 flex items-center justify-center'>
                <img className='w-12' src={sorprise} alt='' />
              </div>

              <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full w-16 h-16 flex items-center justify-center'>
                <img className='w-12' src={like} alt='' />
              </div>
            </div>

            <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-2xl mt-6 flex w-[80%] h-16 items-center justify-evenly'>
              <div className='flex flex-col'>
                <h3 className='text-center'>4.5/5</h3>
                <p className='font-bold'>Rating</p>
              </div>
              |
              <div>
                <h3 className='text-center'>265</h3>
                <p className='font-bold'>Chapters</p>
              </div>
              |
              <div>
                <h3 className='text-center'>Eng</h3>
                <p className='font-bold'>Language</p>
              </div>
            </div>

            <div className='flex w-4/5 justify-center mt-12'>
              <button className={`font-semibold w-48 text-white bg-orange-500  rounded-xl ${show}`} onClick={() => setShow(true)}>Manga</button>
              <button className={`font-semibold w-48 text-slate-500 bg-slate-200 rounded-xl ${!show}`} onClick={() => setShow(false)}>Chapters</button>
            </div>

            <p className='bg-slate-100 rounded-2xl m-8 w-4/5'>{mangas.description}</p>

          </div>
          )
        : (
          <div className='min-h-screen pt-20 flex flex-col items-center'>
            <img className='sm:w-72 sm:h-80' src={manga.cover_photo} alt='' />
            <h3 className='text-xl'>Chapters</h3>
            <div className='flex w-4/5 justify-center mt-12'>
              <button className={` w-48 text-white bg-orange-500 rounded-xl ${show}`} onClick={() => setShow(true)}>Manga</button>
              <button className={` w-48 text-white bg-slate-500 rounded-xl ${!show}`} onClick={() => setShow(false)}>Chapters</button>
            </div>
            <div className='flex flex-col mt-12 sm:w-[95%] md:flex md:flex-col md:mt-12 md:w-[78%] md:p-8 focus:underline-offset-8'>
              {chapters.map(each =>
                <div key={each._id} className='flex items-center justify-between w-full'>
                  <img className='sm:w-20 sm:h-20 sm:m-4 md:w-[10rem] md:h-[18rem] md:m-4' src={each.cover_photo} alt='asd' />
                  <div className=' sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center'>
                    <h3 className='focus:underline-offset-8 text-2xl text-left'>{each.title}</h3>
                    <h3>cort46</h3>
                  </div>
                  <button className='bg-slate-500 text-neutral-50 rounded-3xl sm:w-[25%] sm:h-12 md:w-[25%] md:h-18'>Read</button>
                </div>)}
            </div>
            {count > 5 &&
              <div className='w-3/5 mt-4 mb-6 flex justify-center gap-8'>
                {page !== 1 && (<input className='font-bold w-20 h-8 bg-slate-600 rounded-full' type='button' value='<<' onClick={prev} />)}
                {page !== cantPages1 && (<input className='font-bold w-20 h-8 bg-orange-600 rounded-full' type='button' value='>>' onClick={next} />)}
              </div>}
          </div>
          )}

    </>
  )
}
