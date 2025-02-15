import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './component/Route.jsx';
import ContextAPI from './component/ContextAPI.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextAPI>
      <RouterProvider router={router} />
    </ContextAPI>
  </StrictMode>,
)
