import {createBrowserRouter} from "react-router-dom";
import Main from '../../App.jsx'
import Layout from '../../layouts/Main.jsx'
import Register from '../../pages/Register.jsx'
import Login from '../../pages/Login.jsx';

const routes = createBrowserRouter([
    {path: "/",
     element:<Layout/>,
     children:[
        {path:'/', element:<Main/>},
        {path:'/register',element:<Register/>},
        {path:'/login',element:<Login/>},
    ]}
])
 export default routes