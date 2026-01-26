import React, { useState, useEffect } from "react";

const Navbar = ({ openNav, setOpenNav }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "#about", title: "About", id: "01." },
    { path: "#services", title: "Services", id: "02." },
    { path: "#work", title: "Work", id: "03." },
    { path: "#contact", title: "Contact", id: "04." },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-navy/80 backdrop-blur-md h-20 shadow-lg" : "bg-transparent h-24"
      }`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="designer-border p-2 w-10 h-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green w-5 h-5">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none p-0 m-0">
            {navLinks.map((link, i) => (
              <li key={i} className="font-mono text-sm group">
                <a href={link.path} className="flex items-center gap-1 hover:text-green transition-colors">
                  <span className="text-green">{link.id}</span>
                  <span className="text-lightest-slate group-hover:text-green">{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-4 text-xs">
            Resume
          </a>
        </div>

        <div className="md:hidden">
          <button
            className="text-green p-2 focus:outline-none"
            onClick={() => setOpenNav(!openNav)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={openNav ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
