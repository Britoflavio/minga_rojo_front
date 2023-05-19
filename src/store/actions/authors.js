import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from '../../../api'
import axios from "axios";

const read_authors = createAsyncThunk('read_authors', async()=>{
    try {
        let res = await axios(apiUrl +'authors/admin')
        
        return{
            authors: res.data
        }
        
    } catch (error) {
        return {
            authors:[]
        }
    }

})

const actions ={read_authors}

export default actions