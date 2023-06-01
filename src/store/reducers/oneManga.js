import { createReducer } from '@reduxjs/toolkit'

import actions from '../actions/oneManga.js'

const { oneManga } = actions

const initialState = {
  title: '',
  cover_photo: '',
  description: ''
}

const reducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(
      oneManga,
      (state, action) => {
        const newState = {
          ...state,
          title: action.payload.title,
          cover_photo: action.payload.cover_photo,
          description: action.payload.description
        }
        return newState
      }
    )
)

export default reducer
