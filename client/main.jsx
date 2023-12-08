import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import HomePage from "./pages/HomePage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Logout from "./pages/Logout.jsx";
import User from "./pages/User.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Auth from './components/Auth.jsx';



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
        path: 'signup',
        element: <AuthPage />,
      },
      {
        path: 'signin',
        element: <Auth />
      },
      {
        path: 'user',
        element: <User />,
      },
      {
        path: 'logout',
        element: <Logout />
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

);
