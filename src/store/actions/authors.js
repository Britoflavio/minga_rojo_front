import { createAsyncThunk } from '@reduxjs/toolkit'
import apiUrl from '../../../api'
import axios from 'axios'

const readAuthors = createAsyncThunk('readAuthors', async () => {
  try {
    const res = await axios(apiUrl + 'authors/admin')
    return {
      authors: res.data
    }
  } catch (error) {
    return {
      authors: []
    }
  }
})

const actions = { readAuthors }

export default actions
