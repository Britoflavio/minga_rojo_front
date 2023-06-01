import { createReducer } from '@reduxjs/toolkit'
import actions from '../actions/companies'

const { readCompanies } = actions

const initialState = {
  companies: {
    active: [],
    inactive: []
  }
}

const reducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(
      readCompanies.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          companies: action.payload.companies
        }
        return newState
      }
    )
)

export default reducer
