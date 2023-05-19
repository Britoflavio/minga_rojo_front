import React, { useState} from 'react';
import apiUrl from '../../api';
import axios from 'axios';



export default function SwitchAuthor(props) {
  const [isChecked, setIsChecked] = useState();

  

  const handleCheckboxChange =  async() => {

    let data ={}
    if (props.isChecked === true) {
      data.active = false
    }else if(props.isChecked === false){
      data.active = true
    }
    
    
     await axios.put(apiUrl+`authors/${props.id}`,data ,headers ).then(res =>{
      console.log(res)
  })
  setIsChecked(!isChecked);
  }

  let token = localStorage.getItem('token')
  let headers = {headers:{'Authorization':`Bearer ${token}`}}


  return (
    <>
      
        <label className="relative h-8 w-12 cursor-pointer">
          <input
            type="checkbox"
            
            className="peer sr-only"
            defaultChecked={props.isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>
          <span className="absolute inset-y-0 start-0 m-auto h-6 w-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0">
            <span className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-gray-200 transition"></span>
          </span>
        </label>
      
    </>
  );
}