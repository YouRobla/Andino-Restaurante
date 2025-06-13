import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [apiError, setApiError] = useState(null);

  const onSubmit = async (data) => {
    setApiError(null);

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw result;

      alert("Registro exitoso");
      navigate("/login");
    } catch (err) {
      setApiError(err.message || "Ocurrió un error al registrar");
    }
  };

  const password = watch("password");

  return (
    <div className="min-h-[92.1vh] flex items-center justify-center bg-[#5B0F0F] p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-emerald-900/30 backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-sm border border-yellow-400"
      >
        <h2 className="text-yellow-400 text-3xl font-light mb-6 text-center tracking-wider">
          Crear Cuenta
        </h2>

        {apiError && (
          <div className="bg-yellow-100/10 text-yellow-300 text-sm rounded px-4 py-2 mb-4 text-center border border-yellow-300/20">
            {apiError}
          </div>
        )}

        {/* Nombre */}
        <label className="block text-yellow-200 text-sm mb-1">Nombre completo</label>
        <input
          {...register("name", { required: "Este campo es obligatorio" })}
          className="w-full p-2 mb-2 rounded-md bg-emerald-950 text-yellow-100 border border-yellow-400/40"
        />
        {errors.name && <p className="text-yellow-300 text-sm mb-2">{errors.name.message}</p>}

        {/* Email */}
        <label className="block text-yellow-200 text-sm mb-1">Correo electrónico</label>
        <input
          type="email"
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Correo no válido",
            },
          })}
          className="w-full p-2 mb-2 rounded-md bg-emerald-950 text-yellow-100 border border-yellow-400/40"
        />
        {errors.email && <p className="text-yellow-300 text-sm mb-2">{errors.email.message}</p>}

        {/* Contraseña */}
        <label className="block text-yellow-200 text-sm mb-1">Contraseña</label>
        <input
          type="password"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "Debe tener al menos 6 caracteres",
            },
          })}
          className="w-full p-2 mb-2 rounded-md bg-emerald-950 text-yellow-100 border border-yellow-400/40"
        />
        {errors.password && <p className="text-yellow-300 text-sm mb-2">{errors.password.message}</p>}

        {/* Confirmación */}
        <label className="block text-yellow-200 text-sm mb-1">Confirmar contraseña</label>
        <input
          type="password"
          {...register("password_confirmation", {
            required: "Este campo es obligatorio",
            validate: (value) =>
              value === password || "Las contraseñas no coinciden",
          })}
          className="w-full p-2 mb-4 rounded-md bg-emerald-950 text-yellow-100 border border-yellow-400/40"
        />
        {errors.password_confirmation && (
          <p className="text-yellow-300 text-sm mb-2">{errors.password_confirmation.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-yellow-400 text-emerald-950 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          Registrarse
        </button>

        <p className="text-yellow-200 text-sm mt-6 text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="text-yellow-400 underline hover:text-yellow-300 transition"
          >
            Inicia sesión aquí
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
