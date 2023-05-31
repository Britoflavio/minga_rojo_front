import { createReducer } from "@reduxjs/toolkit";

import actions from "../actions/one_chapter.js";

const {one_chapter}=actions
let initial_state={
    chapters:[]
}

const reducer = createReducer(
    initial_state,
    (builder)=> builder
    .addCase(
        one_chapter,
        (state, action)=>{
            const new_state = {
                ...state,
                chapters:action.payload.data
            }
            return new_state
        }

    )
)
export default reducer