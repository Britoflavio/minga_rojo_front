import { createAction } from "@reduxjs/toolkit";

const one_manga = createAction(
    'one_manga',
    (objeto)=>{
        return{
            payload:{
                title: objeto.title,
                cover_photo: objeto.cover_photo,
                description: objeto.description
            }
        }
    }
)

const actions = {one_manga}

export default actions