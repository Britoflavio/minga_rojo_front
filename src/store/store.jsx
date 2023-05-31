import { configureStore } from "@reduxjs/toolkit";
import reducerReading from './reducers/save_reading'
import reducermangaForm from './reducers/mangaForm'
import reducermangasFilter from './reducers/mangas'
import reducerOneManga from './reducers/one_manga'
import reducerOneChapter from './reducers/one_chapter'
import categoriesRead from "./reducers/categories"
import reducermangaRead from "./reducers/mangaud"
import reducerToken from "./reducers/token"
import reducerAuthors from "./reducers/authors"
import reducerCompanies from "./reducers/companies"
import reducerDonate from "./reducers/donate"

const store = configureStore({
    reducer:{
        reading: reducerReading,
        formManga:reducermangaForm,
        mangasFilter:reducermangasFilter,
        oneManga:reducerOneManga,
        oneChapter:reducerOneChapter,
        categories: categoriesRead,
        manga: reducermangaRead,
        user:reducerToken,
        authors:reducerAuthors,
        companies:reducerCompanies,
        donate:reducerDonate
    }
})

export default store
