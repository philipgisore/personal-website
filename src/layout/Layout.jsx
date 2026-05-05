import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-[#1a1a1a] text-gray-200">
      <Sidebar />
      <MobileHeader />
      <main className="flex-1 pt-28 md:pt-0">
        <Outlet />
      </main>
    </div>
  );
}