import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

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
