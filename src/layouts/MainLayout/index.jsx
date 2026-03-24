import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
