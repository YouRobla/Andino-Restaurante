import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../AuthContext"; // importa el context que te pasé
import Swal from 'sweetalert2';
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Usando el mock de login del contexto
      await login(form.email, form.password);
      navigate("/dashboard"); // Redirige a dashboard u otra página segura

      /* 
      // Cuando tengas backend, descomenta esta petición y comenta la línea anterior
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw data;

      localStorage.setItem("token", data.access_token);
      navigate("/dashboard");
      */

    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center bg-amber-100">
      <form
        onSubmit={handleSubmit}
        className="bg-emerald-900 backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-sm border border-yellow-400"
      >
        <h2 className="text-yellow-300 text-3xl font-light mb-6 text-center tracking-wider">
          Iniciar Sesión
        </h2>

        {error && (
          <div className="bg-yellow-100/10 text-yellow-500 text-sm rounded px-4 py-2 mb-4 text-center border border-yellow-300/20">
            {error}
          </div>
        )}

        <label className="block text-yellow-200 text-sm mb-1">Correo electrónico</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded-md bg-emerald-950 text-yellow-100 border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
          disabled={loading}
        />

        <label className="block text-yellow-200 text-sm mb-1">Contraseña</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-6 rounded-md bg-emerald-950 text-yellow-100 border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
          disabled={loading}
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-emerald-950 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          disabled={loading}
        >
          {loading ? "Cargando..." : "Ingresar"}
        </button>

        {/* Enlace a Registro */}
        <p className="text-yellow-200 text-sm mt-6 text-center">
          ¿No tienes una cuenta?{" "}
          <Link
            to="/register"
            className="text-yellow-400 underline hover:text-yellow-300 transition"
          >
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
