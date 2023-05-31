import { createReducer } from "@reduxjs/toolkit";
import  reading_actions from '../actions/save_reading'

const {save_reading} = reading_actions

let initial_state ={
    title: '',
    page:0
}

const reducer = createReducer(
    initial_state,
    (builder)=> builder
    .addCase (
        save_reading, 
        (state,action) =>{
            const new_state ={
                ...state,
                title:action.payload.title,
                page:action.payload.page 
            }
            return new_state
        }
    )
)

export default reducer