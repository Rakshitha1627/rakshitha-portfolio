import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-mid/60 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="h-8 w-8 rounded-full bg-glow/20 shadow-glow grid place-items-center">
            <span className="text-glow font-bold">R</span>
          </div>
          <span className="text-lg font-semibold">Rakshitha</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-5 text-sm">
          {["Home", "About", "Experience", "Projects", "Contact"].map((page) => (
            <li key={page}>
              <Link
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                className="px-2 py-1 rounded-lg text-dim hover:text-white hover:bg-white/5 transition"
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
