import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Menu from './pages/Menu'
import Layout from './Layout'
import ReservePage from './pages/ReservePage'
import ContactPage from "./pages/ContactPage"

import LoginPage from './pages/LoginPage'
import Register from './componets/Register'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><IndexPage /></Layout>} />

        {/* Rutas protegidas: solo usuarios autenticados */}
        <Route 
          path="/menu" 
          element={
            <PrivateRoute>
              <Layout><Menu /></Layout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/reserva" 
          element={
            <PrivateRoute>
              <Layout><ReservePage /></Layout>
            </PrivateRoute>
          } 
        />

        <Route path="/contacto" element={<Layout><ContactPage/></Layout>} />

        {/* Rutas públicas para no autenticados */}
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <Layout><LoginPage/></Layout>
            </PublicRoute>
          } 
        />
        <Route 
          path="/register" 
          element={
            <PublicRoute>
              <Layout><Register/></Layout>
            </PublicRoute>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
