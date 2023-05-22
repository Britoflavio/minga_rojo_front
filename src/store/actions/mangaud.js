import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";
import Swal from "sweetalert2";

const manga_read = createAsyncThunk('manga_read', async () => {
  try {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let res = await axios(apiUrl + 'mangas/me' , headers)
    
    return {
      manga: res.data.response
    }
  } 
  catch (error) {
    next(error)
  }
})

const manga_delete = createAsyncThunk('manga_delete', async ({id}) => {
  //tiene que eliminar el manga de la base de datos y luego tiene 
  //que modificar el array de mangas del estado para SACAR de ese array el manga eliminado.
  try {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let url = apiUrl + "mangas/" + id ;
    let res = await axios.delete(url, headers)
    console.log(res)
    //mas allá de la respuesta de la peticion necesito enviar algun parametro hacia el reductor
    //para poder quitar con filter el objeto que se eliminó de la base de datos del array
    return{
      manga_id: id
    }
  } catch (error) {
    return {
      manga: []
    }
  }
})

const manga_update = createAsyncThunk('manga_update', async ({id, data}) => {
  //tiene que eliminar el manga de la base de datos y luego tiene 
  //que modificar el array de mangas del estado para SACAR de ese array el manga eliminado.
  try {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let url = apiUrl + "mangas/" + id ;
    let res = await axios.put(url, data, headers)
    //mas allá de la respuesta de la peticion necesito enviar algun parametro hacia el reductor
    //para poder quitar con filter el objeto que se eliminó de la base de datos del array
    console.log(res.data.manga)
    return{
      manga: res.data.manga
    }
  } catch (error) {
    Swal.fire({
      icon:'error',
      title:error.response.data.message
    })
  }
})

const actions={ manga_read, manga_delete, manga_update }

export default actions