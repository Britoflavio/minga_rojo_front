import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import authors_actions from '../store/actions/authors'
import muñeco from '../imagenes/Vector.png'
import SwitchAuthor from './SwitchAuthor'


const {read_authors} = authors_actions

export default function Authors_table() {
    let {active, inactive} = useSelector(store =>store?.authors?.authors)
    

    let dispatch = useDispatch()

    useEffect(
        ()=>{
         dispatch(read_authors())
        },
        []
    )
    const allAuthors = [...active, ...inactive]
    console.log(allAuthors)
  return (
    <>  {allAuthors?.map(author =>(
        <tr>
         <td className='flex'> <img className='h-[20px] mr-2' src={muñeco}/> {author.name}</td>
         <td>{author.createdAt}</td>
         <td>{author.city}</td>
         <td><img className='w-[2rem] h-[2rem] rounded-full' src={author.photo}/></td>
         <td><SwitchAuthor isChecked = {author.active} id={author._id}/></td>
         </tr> 
        ))} 
    </>
    
  )
}
