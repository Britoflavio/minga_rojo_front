import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from '../router/mangas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
)
