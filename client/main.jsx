import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import HomePage from "./pages/HomePage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import GifteePage from './pages/GifteePage.jsx';
// import { LogoutPage } from './pages/index.js';



// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'authpage',
        element: <AuthPage />,
      },

      {
        path: 'user',
        element: <UserPage />,
      },
      {
        path: 'logout',
        element: <LogoutPage />
      },
      {
        path: 'giftee',
        element: <GifteePage />
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

);
