import { createAsyncThunk } from '@reduxjs/toolkit'
import apiUrl from '../../../api'
import axios from 'axios'

const readCompanies = createAsyncThunk('readCompanies', async () => {
  try {
    const res = await axios(apiUrl + 'companies/admin')
    return {
      companies: res.data
    }
  } catch (error) {
    return {
      companies: []
    }
  }
})

const actions = { readCompanies }

export default actions
