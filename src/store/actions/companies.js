import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from '../../../api'
import axios from "axios";

const read_companies = createAsyncThunk('read_companies', async()=>{
    try {
        let res = await axios(apiUrl +'companies/admin')
        return{
            companies: res.data
        }

    } catch (error) {
        return {
            companies:[]
        }
    }

})

const actions ={read_companies}

export default actions