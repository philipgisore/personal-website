import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col justify-between w-64 border-r border-gray-800 p-8 bg-[#1a1a1a] min-h-screen flex-shrink-0">

      <div>
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full overflow-hidden mb-8 border border-gray-700">
          {/* Replace with: <img src="/your-photo.jpg" alt="Philip" className="w-full h-full object-cover" /> */}
          <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
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
              className={({ isActive }) =>
                `block py-2 px-1 text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-500 hover:text-gray-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div>
        {/* Social icons */}
        <div className="flex gap-4 mb-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors" title="LinkedIn">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors" title="GitHub">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a href="mailto:hello@philipgisore.dev"
            className="text-gray-500 hover:text-white transition-colors" title="Email">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Philip Gisore
        </p>
      </div>

    </aside>
  );
}