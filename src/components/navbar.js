import React from "react";
function Navbar({ openNav, setOpenNav }) {
  const navLinks = [
    {
      path: "#about",
      title: "About",
    },
    {
      path: "#services",
      title: "Services",
    },
    {
      path: "#work",
      title: "Work",
    },
    {
      path: "#contact",
      title: "Contact",
    },
  ];
  return (
    <nav className="navbar shadow-md">
      <div className={`container mx-auto  items-center flex justify-between`}>
        <div className="nav-header ">
          <div className="border-2 rounded-full inline-block p-2 border-green ">
            <img
              src="/assets/logo.svg"
              className="w-6 h-6 text-green"
              alt="logo"
            />
          </div>
        </div>
        <div className=" md:hidden">
          <button
            className="px-2 py-2 mr-auto"
            onClick={() => setOpenNav(!openNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block nav-items ml-auto">
          
          <ul className="flex">
            {navLinks.map((each) => {
              return (
                <li className="nav-list-item">
                  <a href={each.path}>{each.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
