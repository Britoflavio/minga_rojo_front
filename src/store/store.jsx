import { configureStore } from "@reduxjs/toolkit";
import reading_reducer from './reducers/save_reading'
import reducermangaForm from './reducers/mangaForm'
import reducermangasFilter from './reducers/mangas'
import reducerOneManga from './reducers/one_manga'
import reducerOneChapter from './reducers/one_chapter'
import read_chapters from "./reducers/chapters"


const store = configureStore({
    reducer:{
        reading: reading_reducer,
        formManga:reducermangaForm,
        mangasFilter:reducermangasFilter,
        oneManga:reducerOneManga,
        oneChapter:reducerOneChapter,
        chapters: read_chapters


    }
})

export default store
