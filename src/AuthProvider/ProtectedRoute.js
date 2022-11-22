import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider.js";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to="/nologin" />;
  }
  return children;
};


export default ProtectedRoute