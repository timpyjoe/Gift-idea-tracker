import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppProvider from './utils/AppProvider';

import { Header, ProtectedRoute, GifteeForm } from './components';
import { HomePage, AuthPage, Logout, User, GifteePage } from './pages/'

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  return (

    <AppProvider>

      <Header />
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authpage" element={<AuthPage />} />

          <Route path="/user" element={
            <ProtectedRoute>
              <GifteePage />
              <GifteeForm />
              <User />
            </ProtectedRoute>
          } />

          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>

    </AppProvider>

  )
}
