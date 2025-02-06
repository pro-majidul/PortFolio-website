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
    path : '/details/:id',
    element : <Details></Details>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
    <Toaster />
  </StrictMode>,
)
