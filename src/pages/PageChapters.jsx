import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import saveReadingActions from '../store/actions/saveReading'

const { saveReading } = saveReadingActions

export default function PageChapters () {
  const store = useSelector(store => (store.reading))
  console.log(store)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [next, setNext] = useState('')
  const { id, page } = useParams()
  const [mangaId, setMangaId] = useState('')
  useEffect(
    () => {
      axios(apiUrl + `chapters/${id}`).then(res => {
        console.log(res)
        dispatch(saveReading({
          title: res.data.response.title,
          page
        }))
        setPages(res.data.response.pages)
        /*  setTitle(res.data.response.title) */
        setNext(res.data.next)
        setMangaId(res.data.response.manga_id)
      })
        .catch(err => console.log(err))
    },
    [id, page]
  )
  /* const [title, setTitle] = useState() */
  const [pages, setPages] = useState([])

  const sumar = () => {
    if (Number(page) < pages.length - 1) {
      return navigate(`/chapters/${id}/${Number(page) + 1}`)
    }
    navigate(`/chapters/${next}/0`)
  }
  const restar = () => {
    if (Number(page) > 0) {
      navigate(`/chapters/${id}/${Number(page) - 1}`)
    } else {
      navigate(`/mangas/${mangaId}`)
    }
  }

  return (
    <>
      <div className='bg-state-200 h-screen'>
        <div className='w-full h-10 bg-gradient-to-r   from-[#F97316] to-[#FF5722]'>
          <p className='flex items-center justify-center h-10 '>{store.title}</p>
        </div>

        <div className='w-full h-[78vh]  bg-contain bg-no-repeat bg-center ' style={{ backgroundImage: `url(${pages[page]})` }}>
          <div className='flex justify-between items-center'>
            <div onClick={restar} className='h-[70vh] w-36 flex items-center'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75' /> </svg>
            </div>
            <div onClick={sumar} className='h-[70vh] w-36 flex items-center justify-end'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' /></svg>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <img src='../../src/imagenes/tres_puntos.png' />
          <p>{store.page}</p>
        </div>
      </div>
    </>
  )
}
