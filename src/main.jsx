import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
const App = React.lazy(() => import('./App.jsx'))
import { Toaster } from 'react-hot-toast'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './details/Details.jsx'
import Loading from './components/Loading.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loading></Loading>}><App></App></Suspense>
  },
  {
    path: '/projects/:id',
    element: <Details></Details>,
    loader: ({ params }) => fetch(`https://portfolio-server-sage-rho.vercel.app/projects/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <RouterProvider router={router} />
      <Toaster />
   
  </StrictMode>,
)
