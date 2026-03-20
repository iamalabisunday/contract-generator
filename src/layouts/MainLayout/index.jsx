import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";

export default function MainLayout() {
  return (
    <div>
      <Sidebar />
      {/* Navbar and Main section */}
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
