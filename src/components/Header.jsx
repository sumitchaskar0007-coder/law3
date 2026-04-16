import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(null);

  const navLink =
    "px-5 py-4 font-semibold text-white hover:bg-blue-900 transition rounded-md";

  const menu = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/cells", label: "Cells & Centres" },
    {
      label: "Admissions",
      sub: [
        { to: "/application", label: "Applications" },
        { to: "/academics", label: "Academics" },
      ],
    },
    {
      label: "Udan",
      sub: [
        { to: "/udan/1", label: "Udan 1" },
        { to: "/udan/2", label: "Udan 2" },
        { to: "/udan/3", label: "Udan 3" },
        { to: "/udan/4", label: "Udan 4" },
        { to: "/udan/5", label: "Udan 5" },
        { to: "/udan/6", label: "Udan 6" },
        { to: "/udan/7", label: "Udan 7" },
        { to: "/udan/8", label: "Udan 8" },
      ],
    },
    { to: "/announcement", label: "Announcements" },
    {
      label: "More",
      sub: [
        { to: "/facilities", label: "Facilities" },
        { to: "/library", label: "Library" },
        { to: "/gallery", label: "Gallery" },
        { to: "/blog", label: "Blogs" },
        { to: "/careers", label: "Career" },
      ],
    },
    { to: "/contact", label: "Contact" },
  ];

  const handleDropdown = (label) => {
    setDropdown(dropdown === label ? null : label);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      
      {/* ================= TOP BAR ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-28">
          
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/assets/images/logo/logo1.png"
              alt="Jadhavar College of Law Logo"
              className="h-20 object-contain"
            />
          </Link>

          <div className="text-center hidden md:block leading-tight">
            <p className="text-sm italic">
              “Education for Strength, Intellect & Wisdom”
            </p>
            <h1 className="text-2xl font-bold text-blue-900 mt-1">
              Jadhavar College of Law
            </h1>
            <p className="text-xs mt-1 max-w-xl">
              (Affiliated to Savitribai Phule Pune University, Recognised by
              Government of Maharashtra and Approved by the Bar Council of India,
              New Delhi)
            </p>
          </div>

          <div className="text-sm font-semibold text-blue-900 hidden md:block">
            UDISE: 27250509921/27
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center relative">
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {menu.map((item, idx) =>
              item.sub ? (
                <div key={idx} className="relative">
                  <button
                    onClick={() => handleDropdown(item.label)}
                    className={`${navLink} flex items-center gap-1`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        dropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdown === item.label && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 bg-white text-gray-800 shadow-xl rounded-md overflow-hidden">
                      {item.sub.map((s) => (
                        <NavLink
                          key={s.to}
                          to={s.to}
                          onClick={() => setDropdown(null)}
                          className="block px-4 py-2 hover:bg-blue-50 text-sm"
                        >
                          {s.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${navLink} ${isActive ? "bg-blue-800" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden absolute right-4 text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden bg-blue-950 px-4 pb-4">
            {menu.flatMap((m) => (m.sub ? m.sub : [m])).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-white border-b border-blue-900"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}