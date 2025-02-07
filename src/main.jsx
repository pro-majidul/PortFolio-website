import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './details/Details.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
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
