import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const token = createAsyncThunk(
    'token', 
    async ()=>{  
      console.log(`me ejecute papu`)
     
     try {
      let token = localStorage.getItem('token')
      let headers = { headers: { 'Authorization': `Bearer ${token}` } }
      let res = await axios.post(apiUrl + 'auth/token' ,{},headers)   
      console.log(res)
        return {
             user:res.data.user,
             token:res.data.token
        }
     } catch (error) {
        alert(error)
     }
    }
)

const actions = {token:token}

export default actions