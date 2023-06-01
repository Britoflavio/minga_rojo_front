/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import apiUrl from '../../../api'

const token = createAsyncThunk(
  'token',
  async () => {
    try {
      const token = localStorage.getItem('token')
      const headers = { headers: { Authorization: `Bearer ${token}` } }
      const res = await axios.post(apiUrl + 'auth/token', {}, headers)

      return {
        user: res.data.user,
        token: res.data.token
      }
    } catch (error) {

    }
  }
)
const logout = createAsyncThunk(
  'logout',
  async () => {
    try {
      const token = localStorage.getItem('token')
      const headers = { headers: { Authorization: `Bearer ${token}` } }
      await axios.post(apiUrl + 'auth/signout', null, headers)
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return {
        user: null,
        token: null
      }
    } catch (error) {

    }
  }
)

const signin = createAsyncThunk(
  'signin',
  async (data) => {
    try {
      const res = await axios.post('http://localhost:8000/auth/signin', data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))

      return {
        user: res.data.user,
        token: res.data.token
      }
    } catch (error) {

    }
  }
)

const actions = { token, logout, signin }

export default actions
