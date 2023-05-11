import { configureStore } from "@reduxjs/toolkit";
import reading_reducer from './reducers/save_reading'

const store = configureStore({
    reducer:{
        reading: reading_reducer
    }
})

export default store
