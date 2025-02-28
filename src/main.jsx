import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Home from './Pages/Home/Home'
import Taskpage from './Pages/Cadastro-Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home  />
  },
  {
    path: '/task',
    element:<Taskpage  />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
