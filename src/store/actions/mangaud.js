/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import apiUrl from '../../../api'
import Swal from 'sweetalert2'

const mangaRead = createAsyncThunk('mangaRead', async () => {
  try {
    const token = localStorage.getItem('token')
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    const res = await axios(apiUrl + 'mangas/me', headers)

    return {
      manga: res.data.response
    }
  } catch (error) {

  }
})

const mangaDelete = createAsyncThunk('mangaDelete', async ({ id }) => {
  // tiene que eliminar el manga de la base de datos y luego tiene
  // que modificar el array de mangas del estado para SACAR de ese array el manga eliminado.
  try {
    const token = localStorage.getItem('token')
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    const url = apiUrl + 'mangas/' + id
    const res = await axios.delete(url, headers)
    console.log(res)
    // mas allá de la respuesta de la peticion necesito enviar algun parametro hacia el reductor
    // para poder quitar con filter el objeto que se eliminó de la base de datos del array
    return {
      manga_id: id
    }
  } catch (error) {
    return {
      manga: []
    }
  }
})

const mangaUpdate = createAsyncThunk('mangaUpdate', async ({ id, data }) => {
  // tiene que eliminar el manga de la base de datos y luego tiene
  // que modificar el array de mangas del estado para SACAR de ese array el manga eliminado.
  try {
    const token = localStorage.getItem('token')
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    const url = apiUrl + 'mangas/' + id
    const res = await axios.put(url, data, headers)
    // mas allá de la respuesta de la peticion necesito enviar algun parametro hacia el reductor
    // para poder quitar con filter el objeto que se eliminó de la base de datos del array
    console.log(res.data.manga)
    return {
      manga: res.data.manga
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: error.response.data.message
    })
  }
})

const actions = { mangaRead, mangaDelete, mangaUpdate }

export default actions
