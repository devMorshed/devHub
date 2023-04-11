import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom'
import Home from './pages/Home'
import Jobdetails from './pages/Jobdetails'
import Statistics from './pages/Statistics'
import Blogs from './pages/Blogs'
import AppliedJobs from './pages/AppliedJobs'
import Errorpage from './pages/Errorpage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        
      },
      {
        path: '/applied',
        element: <AppliedJobs />,
      },
      {
        path: '/jobs/:id',
        element: <Jobdetails />,
        
      },
      {
        path: '/statistics',
        element: <Statistics/>,
      },
      {
        path: '/blogs',
        element: <Blogs/>,
      }
    ]
  },
  {
    path: '*',
    element: <Errorpage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={ router} />
)
