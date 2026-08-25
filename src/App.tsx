import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { infoPages } from './content/pages'
import { AdminLoginPage } from './pages/AdminLoginPage'
import { AdminNewsPage } from './pages/AdminNewsPage'
import { HomePage } from './pages/HomePage'
import { InfoPage } from './pages/InfoPage'
import { ProposalsHub } from './proposals/ProposalsHub'
import { TemucoCinematic } from './proposals/TemucoCinematic'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter
        basename={import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.slice(0, -1)}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/propuestas" element={<ProposalsHub />} />
          <Route path="/propuesta-a" element={<Navigate to="/propuestas" replace />} />
          <Route path="/propuesta-b" element={<TemucoCinematic />} />
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
