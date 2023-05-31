import {createBrowserRouter, Navigate} from "react-router-dom";
import Main from '../App.jsx'
import Layout from '../layouts/Main.jsx'
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx';
import ChaptersForm from "../pages/ChaptersForm.jsx";
import Mangaform from "../pages/MangaForm.jsx"
import Page_chapters from "../pages/Page_chapters.jsx";
import MangasCreate from "../pages/Mangas.jsx";
import Manga from "../pages/Manga.jsx";
import EditChapter from "../pages/EditChapter.jsx";
// let token = () => localStorage.getItem('token')
// let user = JSON.parse(localStorage.getItem('user'))
// console.log(user.role);


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
        {path: '/mangas/:page',element:<MangasCreate/>},
        {path: '/mangas/manga/:id',element:<Manga/>},
        // {path: '/edit/:id_manga',element:user.role == 1 ||user.role == 2 && token() ? <EditChapter/> : <Navigate to="/"/> }
        
    ]}
])
export default routes