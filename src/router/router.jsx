import {createBrowserRouter} from "react-router-dom";
import Main from '../App.jsx'
import Layout from '../layouts/Main.jsx'
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx';
import ChaptersForm from "../pages/ChaptersForm.jsx";
import Mangaform from "../pages/MangaForm.jsx"
import Page_chapters from "../pages/Page_chapters.jsx";
import MangasCreate from "../pages/Mangas.jsx";
import Manga from "../pages/Manga.jsx";
import NewRole from '../pages/NewRole.jsx'
import AdminPanel from "../pages/AdminPanel.jsx";
import NewCompany from "../pages/NewCompany.jsx";
import NewAuthor from "../pages/NewAuthor.jsx";


const routes = createBrowserRouter([
    {path: "/",
     element:<Layout/>,
     children:[
        {path:'/', element:<Main/>},
        {path:'/register',element:<Register/>},
        {path:'/login',element:<Login/>},
        {path: '/chapter-form/:id_manga', element:<ChaptersForm/>},
        {path: '/mangas_form',element:<Mangaform/>},
        {path: '/chapters/:id/:page',element:<Page_chapters/>},
        {path:'/mangas/:page',element:<MangasCreate/>},
        {path: '/mangas/manga/:id',element:<Manga/>},
        {path:'/new-role', element:<NewRole/>},
        {path:'/admin', element: <AdminPanel/>},
        {path:'/new-company',element: <NewCompany/>},
        {path:'/new-author', element: <NewAuthor/>}
    ]}
])
 export default routes