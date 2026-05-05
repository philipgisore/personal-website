import { useState } from "react";
import { NavLink } from "react-router-dom";
import profile from "../assets/profile.jpg";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 h-20 bg-[#1a1a1a]">
        
        {/* Avatar */}
        <img
          src={profile}
          alt="Philip Gisore"
          className="rounded-full object-cover flex-shrink-0"
          style={{ width: "48px", height: "48px", minWidth: "48px", minHeight: "48px" }}
        />

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ width: "44px", height: "44px", minWidth: "44px", minHeight: "44px", border: "1px solid rgb(75 85 99)" }}
          className="flex items-center justify-center rounded-xl text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown */}
      <div className={`bg-[#1a1a1a] border-b border-gray-800 transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <nav className="flex flex-col px-6 py-4 gap-1">
          {[
            { label: "Home",     to: "/",         end: true  },
            { label: "About",    to: "/about",    end: false },
            { label: "Projects", to: "/projects", end: false },
            { label: "Contact",  to: "/contact",  end: false },
          ].map(({ label, to, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 rounded-lg text-sm font-medium text-white hover:bg-gray-800"
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}