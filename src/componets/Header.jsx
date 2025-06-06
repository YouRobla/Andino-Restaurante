const Header = () => {
    return (
        <header>
            (
    <nav className="bg-green-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-widest text-yellow-400">
          Restaurante Andino
        </div>
        <ul className="flex space-x-6 text-sm font-light text-yellow-400">
          {["Inicio", "Horarios", "Menú", "Reserva", "Contacto", "Acerca de"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-2 py-1 hover:border-t-2 hover:border-b-2 hover:border-yellow-400 transition duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  ); 
        </header>
  );

}

export default Header