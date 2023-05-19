import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/mangaud";

const { manga_read, manga_delete, manga_update } = actions 

let inicialState={
    manga:[]
}

const reducer = createReducer(
    inicialState,
    (builder)=>builder
    .addCase(
      manga_read.fulfilled,
      (state, action) => {
        let newState = {
              ...state,
              manga:action.payload.manga
            }
        return newState
    }
  )
  .addCase(
    manga_delete.fulfilled,
    (state, action) => {
      let newState = {
        ...state,
        manga: state.manga.filter((manga) => manga._id !== action.payload.manga_id)
      }
      return newState
    }
  )
  .addCase(
    manga_update.fulfilled,
    (state, action) => {
      let newState = {
        ...state,
        manga: state.manga.map(manga =>{
          if(manga._id === action.payload.manga._id){
            return action.payload.data
          }
          else{
            return manga
          }
        })
      }
      return newState
    }
  )
)
export default reducer