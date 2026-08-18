import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { infoPages } from './content/pages'
import { AdminLoginPage } from './pages/AdminLoginPage'
import { AdminNewsPage } from './pages/AdminNewsPage'
import { HomePage } from './pages/HomePage'
import { InfoPage } from './pages/InfoPage'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {infoPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<InfoPage path={page.path} />}
            />
          ))}
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/noticias" element={<AdminNewsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
