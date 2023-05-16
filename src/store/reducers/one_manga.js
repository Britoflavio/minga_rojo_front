import { createReducer } from "@reduxjs/toolkit";

import actions from "../actions/one_manga.js"


const {one_manga} = actions

let initial_state = {
    title:'',
    cover_photo:'',
    description:''
}

const reducer = createReducer(
    initial_state,
    (builder)=> builder
    .addCase(
        one_manga,
        (state, action)=>{
            const new_state = {
                ...state,
                title: action.payload.title,
                cover_photo: action.payload.cover_photo,
                description: action.payload.description
            }
            return new_state
        }
    )
)

export default reducer