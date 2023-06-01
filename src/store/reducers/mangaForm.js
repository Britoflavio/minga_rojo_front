import actions from '../actions/mangaForm.js'
import { createReducer } from '@reduxjs/toolkit'

const { formManga } = actions
const initialState = {
  title: '',
  category: '',
  description: ''
}

const reducer = createReducer(
  initialState, builder => builder.addCase(
    formManga, (state, action) => {
      const newState = {
        ...state,
        title: action.payload.title,
        category: action.payload.category,
        description: action.payload.description
      }
      return newState
    }
  )
)
export default reducer
