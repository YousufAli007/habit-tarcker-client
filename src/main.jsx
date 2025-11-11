import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import Authporvider from './Context/Authporvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authporvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </Authporvider>
  </StrictMode>
);
