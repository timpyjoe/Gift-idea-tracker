import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppProvider from './utils/AppProvider';

import { Header, ProtectedRoute, GifteeForm } from './components';
import { HomePage, AuthPage, LogoutPage, UserPage, GifteePage } from './pages/index'


import 'bootstrap/dist/css/bootstrap.min.css';
import GifteeEditPage from './pages/GifteeEditPage';


export default function App() {

  return (

    <AppProvider>

      <Header />
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authpage" element={<AuthPage />} />
          <Route path="/giftee/:id" element={<GifteePage />} />
          <Route path="/giftee/:id/edit" element={<GifteeEditPage />} />
          <Route path="/user" element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          } />

          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </div>

    </AppProvider>

  )
}
