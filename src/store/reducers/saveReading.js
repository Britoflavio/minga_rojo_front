import { createReducer } from '@reduxjs/toolkit'
import readingActions from '../actions/saveReading'

const { saveReading } = readingActions

const initialState = {
  title: '',
  page: 0
}

const reducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(
      saveReading,
      (state, action) => {
        const newState = {
          ...state,
          title: action.payload.title,
          page: action.payload.page
        }
        return newState
      }
    )
)

export default reducer
