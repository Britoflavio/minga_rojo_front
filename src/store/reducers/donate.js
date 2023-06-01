import { createReducer } from '@reduxjs/toolkit'
import { donate } from '../actions/donate'

const initialState = {
  preferenceId: '',
  amount: ''
}

const donationReducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(
      donate.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          preferenceId: action.payload.preferenceId,
          amount: action.payload.amount
        }
        return newState
      }
    ))

export default donationReducer
