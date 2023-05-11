import {createBrowserRouter} from "react-router-dom";
import Main from '../App.jsx'
import Layout from '../layouts/Main.jsx'
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx';
import ChaptersForm from "../pages/ChaptersForm.jsx";
import Mangaform from "../pages/MangaForm.jsx"
import MangasCreate from "../pages/Mangas.jsx";



const routes = createBrowserRouter([
    {path: "/",
     element:<Layout/>,
     children:[
        {path:'/', element:<Main/>},
        {path:'/register',element:<Register/>},
        {path:'/login',element:<Login/>},
        {path: '/chapter-form/:id_manga', element:<ChaptersForm/>},
        {path: '/mangas-form',element:<Mangaform/>},
        {path:'/mangas/:page',element:<MangasCreate/>}
    ]}
])
 export default routes