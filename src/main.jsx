import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.jsx'

// import for pages
import MyTaskPage from './page/MyTaskPage.jsx'
import NewsPage from './page/NewsPage.jsx'
import DashBoard from './page/DashBoard.jsx'
import SignUp from './page/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/task',
    element: <MyTaskPage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
 
  {
    path: '/dashboard',
    element: <DashBoard />,
  },
   {
    path: '/signup',
    element: <SignUp />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
