import { configureStore } from "@reduxjs/toolkit";
import reading_reducer from './reducers/save_reading'
import reducermangaForm from './reducers/mangaForm'
import reducermangasFilter from './reducers/mangas'
import reducerOneManga from './reducers/one_manga'
import reducerOneChapter from './reducers/one_chapter'
import categoriesRead from "./reducers/categories"
import manga_read from "./reducers/mangaud"
import reducerToken from "./reducers/token"

const store = configureStore({
    reducer:{
        reading: reading_reducer,
        formManga:reducermangaForm,
        mangasFilter:reducermangasFilter,
        oneManga:reducerOneManga,
        oneChapter:reducerOneChapter,
        categories: categoriesRead,
        manga: manga_read,
        user:reducerToken
    }
})

export default store
