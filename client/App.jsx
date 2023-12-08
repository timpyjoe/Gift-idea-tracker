import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppProvider from './utils/AppProvider';
import { Header, ProtectedRoute } from './components';


import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';

export default function App(){

  return (
   <>
   <HomePage/>
   </>
  )
}
