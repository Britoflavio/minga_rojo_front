import {createBrowserRouter } from "react-router-dom";
import Main from '../src/App.jsx'
import Layout from '../src/layouts/Main.jsx'
import MangasNew from "../src/pages/MangaForm.jsx";


const routes = createBrowserRouter([
  { path: '/',element:<Layout/>,
  children:[
    {path:'/',element:<Main/>},
    {path: '/mangas-form',element:<MangasNew/>}
  ]}
])

export default routes;
