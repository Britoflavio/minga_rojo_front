import { createAction } from "@reduxjs/toolkit";

const mangasFilter = createAction(
    'token', 
    (objeto)=>{     
        return {
            payload:{
                title: objeto.title,
                category: objeto.category_id,
                categoriesChecked: objeto.categoriesChecked
            }
        }
    }
)
const actions = {mangasFilter}
export default actions