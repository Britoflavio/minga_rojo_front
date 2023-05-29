import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import store from './store/store'
import routes from './router/router.jsx'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
)
