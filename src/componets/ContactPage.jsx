// src/components/ContactPage.jsx
import React from "react";

const ContactPage = () => {
  return (
    <div>
        <section className="bg-green-900 text-yellow-400 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Columna izquierda: Información */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-gray-800">
          <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
          <p className="mb-6 text-gray-600">
            En Restaurante Andino queremos escucharte. Ya sea para hacer una reserva,
            conocer nuestros horarios o hacer una sugerencia, estamos aquí para ti.
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-800 mb-2">📍 Dirección</h3>
            <p>Av. de los Andes 123, Cuzco, Perú</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-800 mb-2">🕒 Horarios</h3>
            <p>Lunes a Domingo: 12:00 p.m. - 10:00 p.m.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-800 mb-2">📞 Reservas</h3>
            <p>Teléfono: +51 987 654 321</p>
            <p>Correo: reservas@restauranteandino.pe</p>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Contacto</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Asunto
              </label>
              <input
                type="text"
                placeholder="Consulta o motivo del mensaje"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                rows="5"
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-800 text-yellow-200 font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactPage;
