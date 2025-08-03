import { Navigate, Outlet } from "react-router";
import { useData } from "../context/DataContext";

function ProtectedRoute() {
  const { data } = useData();

  return <>{!data ? <Navigate to={"/"} /> : <Outlet />}</>;
}

export default ProtectedRoute;
