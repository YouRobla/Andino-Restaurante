import React, { useState } from 'react';
import { ChefHat, Star, Clock, Utensils } from 'lucide-react';
import Header from '../componets/header';

const Menu = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('desayuno');
  const [carrito, setCarrito] = useState([]);
  const [opcionCompra, setOpcionCompra] = useState('delivery');

  const agregarAlCarrito = (plato) => {
    setCarrito([...carrito, plato]);
  };

  const categorias = [
    { id: 'desayuno', nombre: 'DESAYUNO' },
    { id: 'almuerzo', nombre: 'ALMUERZO' },
    { id: 'todo-el-dia', nombre: 'TODO EL DÍA' },
    { id: 'cena', nombre: 'CENA' },
    { id: 'postre', nombre: 'POSTRE' },
    { id: 'vinos', nombre: 'VINOS' },
    { id: 'cocteles', nombre: 'CÓCTELES' },
    { id: 'bebidas', nombre: 'BEBIDAS' },
    { id: 'cerveza', nombre: 'CERVEZA' },
    { id: 'brunch-fin-semana', nombre: 'BRUNCH FIN DE SEMANA' }
  ];

  const menuItems = {
    desayuno: {
      'RINCÓN SALUDABLE': [
        {
          nombre: 'AVENA NOCTURNA',
          descripcion: 'arándanos, avena laminada, semillas de cáñamo...',
          precio: 17,
          imagen: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop'
        },
        // ... otros platos
      ]
    },
    almuerzo: {
      'ENTRADAS': [
        {
          nombre: 'CEVICHE CLÁSICO',
          descripcion: 'pescado del día, leche de tigre...',
          precio: 32,
          imagen: 'https://images.unsplash.com/photo-1563379091-20e9d0bf3384?w=300&h=200&fit=crop'
        }
      ]
    },
    cena: {
      'ESPECIALIDADES': [
        {
          nombre: 'SALMÓN A LA PARRILLA',
          descripcion: 'salmón atlántico, quinua...',
          precio: 52,
          imagen: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop'
        }
      ]
    }
  };

  const seccionActual = menuItems[categoriaActiva] || {};

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* SECCIÓN MENÚ */}
        <div className="md:col-span-2">
          {Object.entries(menuItems).map(([categoriaNombre, secciones]) => (
            <div key={categoriaNombre} className="mb-12">
              <h2 className="text-2xl font-bold mb-4 capitalize text-emerald-700">{categoriaNombre}</h2>
              {Object.entries(secciones).map(([seccionNombre, platos]) => (
                <div key={seccionNombre} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">{seccionNombre}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {platos.map((plato, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                        <img src={plato.imagen} alt={plato.nombre} className="w-full h-40 object-cover" />
                        <div className="p-4">
                          <h4 className="text-lg font-bold text-slate-900">{plato.nombre}</h4>
                          <p className="text-sm text-slate-600 mb-2">{plato.descripcion}</p>
                          <p className="text-emerald-600 font-semibold">S/ {plato.precio}</p>
                          <button
                            onClick={() => agregarAlCarrito(plato)}
                            className="mt-2 px-4 py-1 bg-emerald-500 text-white rounded hover:bg-emerald-600"
                          >
                            Agregar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* FORMULARIO DE COMPRA */}
        <div className="bg-white p-6 rounded-xl shadow-lg sticky top-6 h-fit">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Tu Pedido</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-600 mb-1">¿Cómo deseas tu pedido?</label>
            <select
              value={opcionCompra}
              onChange={(e) => setOpcionCompra(e.target.value)}
              className="w-full border border-slate-300 rounded px-3 py-2"
            >
              <option value="delivery">Delivery</option>
              <option value="reservar">Reservar para comer en el local</option>
            </select>
          </div>

          <ul className="space-y-2 max-h-60 overflow-y-auto mb-4">
            {carrito.map((item, idx) => (
              <li key={idx} className="flex justify-between text-sm text-slate-700">
                <span>{item.nombre}</span>
                <span>S/ {item.precio}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg font-semibold text-slate-800 mb-4">Total: S/ {total}</p>

          <button className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">
            Confirmar {opcionCompra === 'delivery' ? 'Delivery' : 'Reserva'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
