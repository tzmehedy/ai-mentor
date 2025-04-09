import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import router from './Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
 import { ToastContainer} from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Root></Root>
      </RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
