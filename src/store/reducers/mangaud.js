import { createReducer } from '@reduxjs/toolkit'
import actions from '../actions/mangaud'

const { mangaRead, mangaDelete, mangaUpdate } = actions

const inicialState = {
  manga: []
}

const reducer = createReducer(
  inicialState,
  (builder) => builder
    .addCase(
      mangaRead.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          manga: action.payload.manga
        }
        return newState
      }
    )
    .addCase(
      mangaDelete.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          manga: state.manga.filter((manga) => manga._id !== action.payload.manga_id)
        }
        return newState
      }
    )
    .addCase(
      mangaUpdate.fulfilled,
      (state, action) => {
        const mangas = state.manga.map(manga => {
          if (manga._id === action.payload.manga._id) {
            return action.payload.manga
          } else {
            return manga
          }
        })
        const newState = {
          ...state,
          manga: mangas
        }
        return newState
      }
    )
)
export default reducer
