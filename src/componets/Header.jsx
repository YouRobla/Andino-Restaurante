import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div>
            <header>
      <nav className="bg-green-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo con imagen */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo Restaurante Andino" className="h-12 w-auto" />
            <span className="text-2xl font-bold tracking-widest text-yellow-400 font-light">
              Restaurante Andino
            </span>
          </div>

          {/* Menú con navegación */}
          <ul className="flex space-x-6 text-sm font-light text-yellow-400">
            <li><Link to="/" className="px-2 py-1 hover:border-t-2 hover:border-b-2 hover:border-yellow-400 transition duration-300">Inicio</Link></li>
            <li><Link to="/horarios" className="px-2 py-1 hover:border-t-2 hover:border-b-2 hover:border-yellow-400 transition duration-300">Horarios</Link></li>
            <li><Link to="/menu" className="px-2 py-1 hover:border-t-2 hover:border-b-2 hover:border-yellow-400 transition duration-300">Menú</Link></li>
            <li><Link to="/reserva" className="px-2 py-1 hover:border-t-2 hover:border-b-2 hover:border-yellow-400 transition duration-300">Reserva</Link></li>
            <li><Link to="/contacto" className="px-2 py-1 hover:border-t-2 hover:border-b-2 hover:border-yellow-400 transition duration-300">Contacto</Link></li>
            <li><Link to="/acerca" className="px-2 py-1 hover:border-t-2 hover:border-b-2 hover:border-yellow-400 transition duration-300">Acerca de</Link></li>
          </ul>
        </div>
      </nav>
    </header>
        </div>
  );

}

export default Header