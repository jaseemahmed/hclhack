import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // eslint-disable-next-line no-debugger
  debugger;
  const token = sessionStorage.getItem("token");
  const isAuthenticated = token && token.length > 0;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
