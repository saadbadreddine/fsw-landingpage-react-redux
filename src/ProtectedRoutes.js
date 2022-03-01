import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const isAuth = JSON.parse(localStorage.getItem("user"));
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
