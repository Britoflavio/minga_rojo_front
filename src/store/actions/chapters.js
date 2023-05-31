import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";
let token = localStorage.getItem('token')
let headers = {headers:{'Authorization':`Bearer ${token}`}}


const read_chapters = createAsyncThunk('read_chapters', async({id_manga})=>{
    try {
        let token = localStorage.getItem('token')
        let headers = {headers:{'Authorization':`Bearer ${token}`}}
        console.log(id_manga);
        let response = await axios(apiUrl + 'chapters/me?manga_id=' + id_manga  , headers)
        console.log(response)
        return {
            chapters:response.data.response
        }

    } catch(error) {
        return {
            chapters: []
        }
        
    }
})

const read_manga = createAsyncThunk('read_manga', async({id_manga})=>{
    try {
        let token = localStorage.getItem('token')
        let headers = {headers:{'Authorization':`Bearer ${token}`}}
        console.log(id_manga);
        let response = await axios(apiUrl + 'mangas/' + id_manga  , headers)
        console.log(response)
    
        return {
            mangas:response.data.response
        }

    } catch(error) {
        return {
            mangas: []
        }
        
    }
})


const delete_chapter = createAsyncThunk('delete_chapter', async({id,manga_id}) =>{
    try {
        
        let token = localStorage.getItem('token')
        let headers = {'Authorization':`Bearer ${token}`}

        let response = await axios.delete(apiUrl + 'chapters/' + id,{manga_id,headers})
        console.log(response);
        return {
            id_delete: id,
        }
    } catch (error) {
        console.log(error);
        return {
            chapters: []
        }
    }
})

const update_chapter = createAsyncThunk('update_chapter', async({id,data})=>{
    try {
        
        let token = localStorage.getItem('token')
        let headers = {headers:{'Authorization':`Bearer ${token}`}}

        console.log(data);
        let res = await axios.put(apiUrl + 'chapters/' +id , data, headers)
        console.log(res);
        return {
            data:res.data.response
        }
    } catch (error) {
        console.log(error)
        return{
            chapters: []

        } 
    }
})




const actions = {read_chapters, read_manga, delete_chapter, update_chapter}
export default actions

