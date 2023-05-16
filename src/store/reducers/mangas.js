import { createReducer } from "@reduxjs/toolkit";
import mangasActions from '../actions/mangas.js'

const { mangasFilter } = mangasActions

const initialState = {
    title: '',
    category: '',
    categoriesChecked: [],
}

const reducer = createReducer(
    initialState,
    (builder) => builder.addCase(
          mangasFilter, 
          (state, action) => {
              const newState = {
                ...state,
                title: action.payload.title,
                category: action.payload.category,
                categoriesChecked: action.payload.categoriesChecked,
              }
                return newState
            }
        )
)
export default reducer