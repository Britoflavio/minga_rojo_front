import {createBrowserRouter} from "react-router-dom";
import Main from '../App.jsx'
import Layouts from '../layouts/Main.jsx'
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx';
import ChaptersForm from "../pages/ChaptersForm.jsx";
import Mangaform from "../pages/MangaForm.jsx"
import Manga from "../pages/Manga.jsx";


const routes = createBrowserRouter([
    {path: "/",
     element:<Layouts/>,
     children:[
        {path:'/', element:<Main/>},
        {path:'/register',element:<Register/>},
        {path:'/login',element:<Login/>},
        {path: '/chapter-form/:id_manga', element:<ChaptersForm/>},
        {path: '/mangas_form',element:<Mangaform/>},
        {path: '/mangas/:id',element:<Manga/>}
    ]}
])

export default routes