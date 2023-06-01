/* eslint-disable no-undef */
import React from 'react'
import apiUrl from '../../api'
import axios from 'axios'

export default function SwithCompany (props) {
  const handleCheckboxChange = async () => {
    const isActive = !props.isActive

    const data = {
      active: isActive
    }

    await axios.put(apiUrl + `companies/${props.id}`, data, headers).then(res => {
      console.log(res)
    })

    // Llamar a la función de cambio de interruptor en el componente padre
    props.onSwitchChange(props.id, isActive)
  }

  const token = localStorage.getItem('token')
  const headers = { headers: { Authorization: `Bearer ${token}` } }

  return (
    <>
      <label class='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox' class='sr-only peer' checked={props.isActive}
          onChange={handleCheckboxChange}
        />
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#d1d5db] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF5722]" />
      </label>
    </>
  )
}
