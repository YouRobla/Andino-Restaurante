import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoute = ({ children }) => {
  const { isAuth, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  return !isAuth ? children : <Navigate to="/" replace />; // o a donde quieras redirigir al logeado
};

export default PublicRoute;
