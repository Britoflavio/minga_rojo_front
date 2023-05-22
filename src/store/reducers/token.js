import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/token";

const {token,logout,signin} = actions 

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
        let newState={
              ...state,
              user:action.payload.user,
              token:action.payload.token
            }
        return newState
    }
  )
  .addCase(
    logout.fulfilled,
    (state,action)=>{
      let newState={
        ...state,
        user:action.payload.user,
        token:action.payload.token
      }
      return newState
    }
  )
  .addCase(
    signin.fulfilled,
    (state,action)=>{
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