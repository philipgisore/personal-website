import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-[#1a1a1a] text-gray-200">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}