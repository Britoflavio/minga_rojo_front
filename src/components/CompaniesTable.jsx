import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import companiesActions from '../store/actions/companies'
import loguito from '../imagenes/Union.png'
import SwithCompany from './SwithCompany'

const { readCompanies } = companiesActions

export default function CompaniesTable () {
  const { active, inactive } = useSelector(store => store?.companies?.companies)
  const [filteredCompanies, setFilteredCompanies] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(readCompanies())
  }, [])

  useEffect(() => {
    const sortedCompanies = [...active, ...inactive]
    setFilteredCompanies(sortedCompanies)
  }, [active, inactive])

  const handleSwitchChange = (companyId, isActive) => {
    // Actualizar el estado de la empresa en el array correspondiente (activo o inactivo)
    const updatedCompanies = filteredCompanies.map(company => {
      if (company._id === companyId) {
        return { ...company, active: isActive }
      }
      return company
    })
    setFilteredCompanies(updatedCompanies)
  }

  return (
    <>
      {filteredCompanies.map(company => (
        <tr className='border border-gray-400' key={company._id}>
          <td className=''>
            <div className='flex'>
              <img className='h-auto mr-2' src={loguito} alt='Loguito' />
              {company.name}
            </div>
          </td>
          <td>{company.website}</td>
          <td className=' flex justify-center'>
            <div>
              <img className='w-[2rem] h-[2rem] rounded-full' src={company.logo} alt='Logo' />
            </div>

          </td>
          <td className=''>
            <SwithCompany
              isActive={company.active}
              id={company._id}
              onSwitchChange={handleSwitchChange}
            />
          </td>
        </tr>
      ))}
    </>
  )
}
