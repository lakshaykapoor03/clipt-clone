import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import { Button } from "@/components/ui/button"
import LandingPage from './Pages/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout>
      <LandingPage/>
    </MainLayout>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
