import { createReducer } from '@reduxjs/toolkit'
import actions from '../actions/authors'

const { readAuthors } = actions
const initialState = {
  authors: {
    active: [],
    inactive: []
  }
}
const reducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(
      readAuthors.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          authors: action.payload.authors
        }
        return newState
      }
    )
)

export default reducer