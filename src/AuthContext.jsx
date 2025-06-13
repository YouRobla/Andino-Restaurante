import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const AuthContext = createContext();

const fakeBackend = {
  users: [
    { id: 1, name: "Juan Pérez", email: "juan@mail.com", password: "123456" },
  ],
  login: async ({ email, password }) => {
    await new Promise((r) => setTimeout(r, 500));

    const user = fakeBackend.users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) throw new Error("Credenciales inválidas");

    const token = "fake-jwt-token-" + Math.random();

    return { token, user };
  },
  register: async ({ name, email, password }) => {
    await new Promise((r) => setTimeout(r, 500));

    if (fakeBackend.users.find((u) => u.email === email)) {
      throw new Error("El email ya está registrado");
    }

    const newUser = {
      id: fakeBackend.users.length + 1,
      name,
      email,
      password,
    };

    fakeBackend.users.push(newUser);
    const token = "fake-jwt-token-" + Math.random();

    return { token, user: newUser };
  },
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(
    token ? JSON.parse(localStorage.getItem("user")) : null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { token, user } = await fakeBackend.login({ email, password });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setToken(token);
      setUser(user);

      // ✅ Alerta de éxito
      Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: `Hola ${user.name}, sesión iniciada correctamente.`,
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (e) {
      setError(e.message);

      // ❌ Alerta de error
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: e.message,
      });

      throw e;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { token, user } = await fakeBackend.register({ name, email, password });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setToken(token);
      setUser(user);

      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: `Bienvenido, ${user.name}!`,
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (e) {
      setError(e.message);

      Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: e.message,
      });

      throw e;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);

    Swal.fire({
      icon: "info",
      title: "Sesión cerrada",
      text: "Has cerrado sesión exitosamente.",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{ token, user, isAuth: !!user, login, logout, register, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
