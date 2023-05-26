import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/companies";

const {read_companies} = actions

let initialState = {
    companies:{
        active:[],
        inactive:[]
    }
}

const reducer = createReducer(
    initialState,
    (builder)=>builder
    .addCase(
        read_companies.fulfilled,
        (state, action) =>{
            let newState ={
                ...state,
                companies:action.payload.companies
            }
            return newState
        }
    )
)

export default reducer