import { Outlet } from "react-router";
import NavBar from "../UI/NavBar";
import ProtectedRoute from "../Auth/ProtectedRoute";

function AppLayout() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <NavBar />
      <ProtectedRoute />
    </main>
  );
}

export default AppLayout;
