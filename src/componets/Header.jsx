import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './../AuthContext'  // Importa el contexto de auth

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuth, logout } = useAuth()   // Extrae estado y logout
  const navigate = useNavigate()

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Menú", path: "/menu" },
    { label: "Reserva", path: "/reserva" }, 
    { label: "Contacto", path: "/contacto" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Maneja logout y redirige a home
  const handleLogout = () => {
    logout()
    closeMenu()
    navigate('/')
  }

  return (
    <header className="bg-green-900 sticky top-0 z-50 shadow-lg">
  <nav className="px-4 py-4 md:px-6 lg:px-8">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center">
      
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold tracking-widest text-yellow-400">
        <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">
          Restaurante Andino
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-light text-yellow-400">
        <ul className="flex space-x-6 lg:space-x-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-3 py-2 transition duration-300 transform hover:scale-105 hover:text-yellow-300"
            >
              <Link 
                to={item.path}
                className="block"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón según estado de auth */}
        {isAuth ? (
          <button
            onClick={handleLogout}
            className="bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300"
          >
            Cerrar sesión
          </button>
        ) : (
          <Link 
            to="/login" 
            className="bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300"
          >
            Iniciar sesión
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-yellow-400 hover:text-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-lg p-2"
        aria-label="Toggle menu"
      >
        <svg 
          className={`w-6 h-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
      isMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <div className="pt-4 pb-2 border-t border-green-800 mt-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={closeMenu}
                className="block px-4 py-3 text-yellow-400 hover:text-yellow-300 hover:bg-green-800 rounded-lg transition-all duration-300 text-sm font-light"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón login o logout en móvil */}
        <div className="px-4 pt-4">
          {isAuth ? (
            <button
              onClick={handleLogout}
              className="block w-full text-center bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300"
            >
              Cerrar sesión
            </button>
          ) : (
            <Link 
              to="/login"
              onClick={closeMenu}
              className="block w-full text-center bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </div>
  </nav>
</header>
  )
}

export default Header
