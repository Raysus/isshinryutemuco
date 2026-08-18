import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { AdminLoginPage } from './pages/AdminLoginPage'
import { AdminNewsPage } from './pages/AdminNewsPage'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/noticias" element={<AdminNewsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
