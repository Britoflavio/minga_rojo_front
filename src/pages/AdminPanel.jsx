import React, { useEffect, useState } from 'react'
import Authors_table from '../components/Authors_table'
import Companies_table from '../components/Companies_table'
import { useNavigate } from 'react-router-dom'


export default function AdminPanel() {

  
  const [showCompanies, setShowCompanies] = useState(true)
  const [showAuthors, setShowAuthors] = useState(false);
  const navigate = useNavigate()
  
  
  function show(tableType) {
    if (tableType === 'companies') {
      setShowCompanies(!showCompanies);
      setShowAuthors(false);
    } else if (tableType === 'authors') {
      setShowAuthors(!showAuthors);
      setShowCompanies(false);
    }
    
  }
  
 
    
  

  return (
    <>
    <div className=''>
        <div className='h-[70vh] w-full bg-cover flex justify-center items-center' style={{backgroundImage: `url(../../src/imagenes/admin.png)`}}>
          <h1 className='text-white text-5xl'>Panel</h1>
        </div>
        <div className='flex justify-center'>
          <div className='w-[90vw] bg-[#f1f5f9] h-auto flex flex-col items-center rounded-[10px] relative bottom-[10rem]'>
            <h3 className='text-center text-4xl text-[#FF5722] border-b-4 border-[#FF5722] mb-10 mt-12'>Entitites</h3>

            <div className='border border-[#d4d4d4] w-[40rem] rounded-lg mb-7'>
              <table className="table-auto  w-[40rem] text-center rounded-lg">
                  <tr> 
                    <th className= {`w-[50%] bg-[#FF5722] ${showCompanies ? 'bg-white text-[#FF5722]': 'bg-[#FF5722] text-white' } cursor-pointer h-[3rem]`} onClick={() => show('companies')} colSpan={2}>
                      Companies
                    </th>
                    <th className= {`w-[50%] ${showAuthors ? 'bg-white text-[#FF5722]' : 'bg-[#FF5722] text-white' }  bg-[#FF5722] cursor-pointer`} onClick={() => show('authors')} colSpan={3}>
                      Authors
                    </th>
                  </tr>
                  {showCompanies && <Companies_table />}
                  {showAuthors && <Authors_table />}
              </table>
            </div>
          </div>
        </div>
       
    </div>
    </>
  )
}
