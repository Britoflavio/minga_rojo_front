import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import companies_actions from '../store/actions/companies'
import loguito from '../imagenes/Union.png'
import SwithCompany from './SwithCompany'

const {read_companies} = companies_actions

export default function Companies_table() {
    let {active, inactive} = useSelector(store =>store?.companies?.companies)

    let dispatch = useDispatch()

    useEffect(
        ()=>{
         dispatch(read_companies())
        },
        []
    )
    const allcompanies = [...active, ...inactive]
    
  return (
    <>  {allcompanies?.map(company =>(
        <tr>
         <td className='flex'> <img className='h-[20px] mr-2' src={loguito}/> {company.name}</td>
         <td>{company.website}</td>
         <td><img className='w-[2rem] h-[2rem] rounded-full' src={company.logo}/> </td>
         <td> <SwithCompany isChecked = {company.active} id={company._id} /></td>
         </tr> 
        ))} 
    </>
  )
}
