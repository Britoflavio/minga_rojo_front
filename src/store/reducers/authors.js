import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/authors";

const {read_authors} = actions
let initialState = {
    authors:{
        active:[],
        inactive:[]
    }
}
const reducer = createReducer(
    initialState,
    (builder)=>builder
    .addCase(
        read_authors.fulfilled,
        (state, action) =>{
            let newState ={
                ...state,
                authors:action.payload.authors
            }
            return newState
        }
    )
)

export default reducer