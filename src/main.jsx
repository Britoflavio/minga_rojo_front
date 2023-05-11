import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import routes from './router/router.jsx'
import store from '../store/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
     <RouterProvider router={routes} />
    </Provider>
)
