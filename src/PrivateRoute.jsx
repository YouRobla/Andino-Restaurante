import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Ajusta ruta

const PrivateRoute = ({ children }) => {
  const { isAuth, loading } = useAuth();

  if (loading) return <div>Cargando...</div>; // O spinner

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
