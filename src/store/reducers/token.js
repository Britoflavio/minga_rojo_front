import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/token";

const {token} = actions 

let inicialState = {
    user:null,
    token:null
}

const reducer = createReducer(
    inicialState,
    (builder)=>builder
    .addCase(
      token.fulfilled,
      (state,action)=>{
        console.log(action)
        let newState={
              ...state,
              user:action.payload.user,
              token:action.payload.token
            }
        return newState
    }
  )
)
export default reducer