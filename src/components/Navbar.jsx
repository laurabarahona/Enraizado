import { useState } from "react";

/* iconos inline */
const HamburgerIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white text-black fixed top-0 left-0 z-40 shadow-sm border-b-2 border-[#9BAA7E]">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <a href="/" className="group">
            <img
              src="/logo-web-enraizado.png"
              alt="Enraizado"
              style={{
                height: "4.5rem",
                transition: "filter 0.3s ease",
              }}
              className="group-hover:[filter:drop-shadow(0_4px_16px_rgba(155,170,126,0.9))]"
            />
          </a>
          {/* Hamburguesa (sin <button>) */}
          <span
            role="button"
            tabIndex={0}
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={toggle}
            onKeyDown={handleKey}
            className="
              md:hidden cursor-pointer
              text-[#9BAA7E] hover:text-[#9BAA7E]
              focus:outline-none
            "
          >
            {open ? <CloseIcon /> : <HamburgerIcon />}
          </span>

          {/* Menú escritorio */}
          <ul className="hidden md:flex text-sm font-medium h-20">
            {["Inicio", "Servicios", "Nosotras", "Contacto"].map((item) => (
              <li key={item} className="relative h-full group flex items-center">
                <a
                  href="#"
                  className="relative z-10 flex items-center h-full px-6 !text-black no-underline"
                >
                  {item}
                </a>
                <span
                  className="
                    absolute inset-0 bg-[#9BAA7E]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    -z-10
                  "
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Panel móvil */}
      <div
        className={`
          fixed top-20 right-0 h-[calc(100vh-5rem)] w-full max-w-xs
          bg-white shadow-xl z-30
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <ul className="flex flex-col text-base font-medium">
          {["Inicio", "Servicios", "Nosotras", "Contacto"].map((item) => (
            <li key={item} className="relative group">
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="relative block px-6 py-4 !text-black no-underline"
              >
                {item}
                <span
                  className="
                    absolute inset-0 bg-[#9BAA7E]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    -z-10
                  "
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Fondo oscuro */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}