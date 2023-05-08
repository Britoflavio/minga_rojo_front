import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"
import ChaptersForm from "../components/ChaptersForm.jsx";


import Index from "../pages/Index.jsx";





const routes = createBrowserRouter([
    {path: '/',
    element: <App/>,
    children:[
        {path: '/', element:<Index/>},
        {path: '/chapter-form/:id_manga', element:<ChaptersForm/>}
    ]
}
])
export default routes