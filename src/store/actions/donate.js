import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import apiUrl from '../../../api'

export const donate = createAsyncThunk('donate', async (amount) => {
  try {
    const price = { unit_price: amount }
    const res = await axios.post(apiUrl + 'donate', price)
    const preferenceId = res.data.preferenceId
    return {
      preferenceId
    }
  } catch (error) {
  }
})
