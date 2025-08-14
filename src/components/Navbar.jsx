import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-mid/60 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-glow/20 shadow-glow grid place-items-center">
            <span className="text-glow font-bold">R</span>
          </div>
          <span className="text-lg font-semibold">Rakshitha</span>
        </div>
        <ul className="flex gap-5 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end
                className={({ isActive }) =>
                  `px-2 py-1 rounded-lg transition ${
                    isActive
                      ? "text-white bg-glow/20 shadow-glow"
                      : "text-dim hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
