import { createReducer } from '@reduxjs/toolkit'

import actions from '../actions/oneChapter.js'

const { oneChapter } = actions
const initialState = {
  chapters: []
}

const reducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(
      oneChapter,
      (state, action) => {
        const newState = {
          ...state,
          chapters: action.payload.data
        }
        return newState
      }

    )
)
export default reducer
