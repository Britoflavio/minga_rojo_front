import { configureStore } from "@reduxjs/toolkit";
import reducermangaForm from "./reducers/mangaForm";
import reducermangasFilter from "./reducers/mangas"


let store = configureStore({
  reducer:{
   formManga:reducermangaForm,
   mangasFilter:reducermangasFilter
  }
})

export default store