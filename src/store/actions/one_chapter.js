import { createAction } from "@reduxjs/toolkit";


const one_chapter = createAction(
    'one_chapter',
    (objeto)=> {
        return {
            payload:{
                data:objeto
            }
        }
    }

)

const actions = {one_chapter}

export default actions