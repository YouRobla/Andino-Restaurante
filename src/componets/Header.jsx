import { Link } from 'react-router-dom'

const Header = () => {
  // Diccionario de rutas
  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Horarios", path: "/horarios" },
    { label: "Menú", path: "/menu" },
    { label: "Reserva", path: "/formulario" }, // formulario como reserva
    { label: "Contacto", path: "/contacto" },
    { label: "Acerca de", path: "/acerca" }
  ]

  return (
    <header className="bg-green-900 p-10">
      <nav>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-widest text-yellow-400">
            Restaurante Andino
          </div>
          <ul className="flex space-x-6 text-sm font-light text-yellow-400">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer px-2 py-1 hover:border-t-2 hover:border-b-2 hover:border-yellow-400 transition duration-300"
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
