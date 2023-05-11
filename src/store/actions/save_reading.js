import { createAction } from "@reduxjs/toolkit";

const save_reading = createAction(
    'save_reading', 
    (objeto)=>{
        return{
            payload:{
                title: objeto.title,
                page: objeto.page
            }
        }
    }

)

const actions = {save_reading}
export default actions