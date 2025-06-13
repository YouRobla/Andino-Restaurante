import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ReservaForm = ({ onReservaCreada }) => {
  const [form, setForm] = useState({
    fecha: "",
    hora: "",
    numero_personas: 1,
    mensaje_adicional: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Asumo que el token está en localStorage
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error al crear reserva");
      }
      const data = await res.json();
      Swal.fire("¡Éxito!", "Reserva creada correctamente", "success");
      setForm({
        fecha: "",
        hora: "",
        numero_personas: 1,
        mensaje_adicional: "",
      });
      onReservaCreada(data.reserva);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Fecha</label>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          required
          className="w-full rounded border px-3 py-2"
          disabled={loading}
        />
      </div>

      <div>
        <label className="block text-gray-700">Hora</label>
        <input
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
          required
          className="w-full rounded border px-3 py-2"
          disabled={loading}
        />
      </div>

      <div>
        <label className="block text-gray-700">Número de personas</label>
        <input
          type="number"
          name="numero_personas"
          value={form.numero_personas}
          onChange={handleChange}
          min="1"
          required
          className="w-full rounded border px-3 py-2"
          disabled={loading}
        />
      </div>

      <div>
        <label className="block text-gray-700">Mensaje adicional</label>
        <textarea
          name="mensaje_adicional"
          value={form.mensaje_adicional}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
          rows="3"
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-400 text-emerald-900 py-2 rounded font-semibold hover:bg-yellow-300 transition"
      >
        {loading ? "Enviando..." : "Enviar Reserva"}
      </button>
    </form>
  );
};

const ReservaList = ({ reservas, onActualizar }) => {
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEditarClick = (reserva) => {
    setEditId(reserva.id);
    setEditForm({
      fecha: reserva.fecha,
      hora: reserva.hora,
      numero_personas: reserva.numero_personas,
      mensaje_adicional: reserva.mensaje_adicional || "",
      estado: reserva.estado,
    });
  };

  const handleCancelar = () => {
    setEditId(null);
    setEditForm({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((f) => ({ ...f, [name]: value }));
  };

  const handleGuardar = async () => {
    try {
      const res = await fetch(`/api/reservas/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(editForm),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error al actualizar reserva");
      }
      const data = await res.json();
      Swal.fire("¡Actualizado!", "Reserva actualizada correctamente", "success");
      onActualizar(data.reserva);
      setEditId(null);
      setEditForm({});
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  if (reservas.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No tienes reservas.</p>;
  }

  return (
    <div className="overflow-x-auto mt-8">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-3 py-2">Fecha</th>
            <th className="border border-gray-300 px-3 py-2">Hora</th>
            <th className="border border-gray-300 px-3 py-2">Personas</th>
            <th className="border border-gray-300 px-3 py-2">Mensaje</th>
            <th className="border border-gray-300 px-3 py-2">Estado</th>
            <th className="border border-gray-300 px-3 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) =>
            editId === reserva.id ? (
              <tr key={reserva.id}>
                <td className="border border-gray-300 px-2 py-1">
                  <input
                    type="date"
                    name="fecha"
                    value={editForm.fecha}
                    onChange={handleChange}
                    className="w-full rounded border px-2 py-1"
                  />
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <input
                    type="time"
                    name="hora"
                    value={editForm.hora}
                    onChange={handleChange}
                    className="w-full rounded border px-2 py-1"
                  />
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <input
                    type="number"
                    name="numero_personas"
                    value={editForm.numero_personas}
                    onChange={handleChange}
                    min="1"
                    className="w-full rounded border px-2 py-1"
                  />
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <input
                    type="text"
                    name="mensaje_adicional"
                    value={editForm.mensaje_adicional}
                    onChange={handleChange}
                    className="w-full rounded border px-2 py-1"
                  />
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  <span className={`capitalize font-semibold ${
                    editForm.estado === "pendiente"
                      ? "text-yellow-500"
                      : editForm.estado === "confirmada"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}>
                    {editForm.estado}
                  </span>
                </td>
                <td className="border border-gray-300 px-2 py-1 space-x-2">
                  <button
                    onClick={handleGuardar}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={handleCancelar}
                    className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={reserva.id}>
                <td className="border border-gray-300 px-3 py-2">{reserva.fecha}</td>
                <td className="border border-gray-300 px-3 py-2">{reserva.hora}</td>
                <td className="border border-gray-300 px-3 py-2 text-center">{reserva.numero_personas}</td>
                <td className="border border-gray-300 px-3 py-2">{reserva.mensaje_adicional}</td>
                <td className="border border-gray-300 px-3 py-2 capitalize text-center">
                  <span className={`font-semibold ${
                    reserva.estado === "pendiente"
                      ? "text-yellow-500"
                      : reserva.estado === "confirmada"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}>
                    {reserva.estado}
                  </span>
                </td>
                <td className="border border-gray-300 px-3 py-2 space-x-2">
                  <button
                    onClick={() => handleEditarClick(reserva)}
                    className="bg-yellow-400 text-emerald-900 px-3 py-1 rounded hover:bg-yellow-300"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

const ReservaPage = () => {
  const [reservas, setReservas] = useState([]);
  const [cargando, setCargando] = useState(false);

  const fetchReservas = async () => {
    setCargando(true);
    try {
      const res = await fetch("/api/reservas", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (!res.ok) throw new Error("No se pudieron cargar las reservas");
      const data = await res.json();
      setReservas(data);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  const handleReservaCreada = (nuevaReserva) => {
    setReservas((old) => [...old, nuevaReserva]);
  };

  const handleReservaActualizada = (reservaActualizada) => {
    setReservas((old) =>
      old.map((r) => (r.id === reservaActualizada.id ? reservaActualizada : r))
    );
  };

  return (
    <div className="h-[90vh] bg-gray-50">
      {/* Header */}
      <div className="px-4 pt-8 pb-4 md:pt-12 md:pb-8">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center tracking-wide">
          Reservas
        </h2>
        <p className="text-gray-600 text-center mt-2 text-sm md:text-base">
          Realiza tu reserva y administra las existentes
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Form Section */}
            <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 flex items-center">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <ReservaForm onReservaCreada={handleReservaCreada} />
              </div>
            </div>

            {/* List Section */}
            <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 overflow-auto">
              {cargando ? (
                <p className="text-center text-gray-500">Cargando reservas...</p>
              ) : (
                <ReservaList reservas={reservas} onActualizar={handleReservaActualizada} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section - Optional */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Aquí podrías poner info extra o contacto */}
      </div>
    </div>
  );
};

export default ReservaPage;
