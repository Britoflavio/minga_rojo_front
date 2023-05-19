import { configureStore } from "@reduxjs/toolkit";
import reading_reducer from './reducers/save_reading'
import reducermangaForm from './reducers/mangaForm'
import reducermangasFilter from './reducers/mangas'
import reducerOneManga from './reducers/one_manga'
import reducerOneChapter from './reducers/one_chapter'
import reducerAuthors from './reducers/authors'
import reducerCompanies from './reducers/companies'

const store = configureStore({
    reducer:{
        reading: reading_reducer,
        formManga:reducermangaForm,
        mangasFilter:reducermangasFilter,
        oneManga:reducerOneManga,
        oneChapter:reducerOneChapter,
        authors:reducerAuthors,
        companies:reducerCompanies
    }
})

export default store
