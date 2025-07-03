import React from "react";

const navItems = [
  { name: "Gallery", href: "/gallery" },
  { name: "Prices for services", href: "/services" },
  { name: "About us", href: "/aboutus" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = window.location.pathname;
  return (
    <nav className="fixed w-full z-40 transition-all duration-300">
      <div
        className={`flex items-center justify-between px-10 py-7 md:px-15 md:py-9 bg-[#1E0C06] rounded-b-3xl md:rounded-b-[50px] ${
          pathname === "/" ? "bg-transparent" : "background-shadow "
        }`}
      >
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="/"
        >
          <span className="relative z-10">
            <img
              src="../images/logo.png"
              alt=""
              className="w-[80px] h-[36px] md:w-[100px] md:h-[40px]"
            />
          </span>
        </a>
        {/* desktop navbar */}
        <div className="hidden md:flex space-x-8  text-shadow-md">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-[#F5F5F5] hover:text-[#A3B8D7] transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile navbar */}
        <div className="md:hidden ">
          <img
            src="../images/nav-icon.png"
            alt=""
            className="h-[23px] w-[20px]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
