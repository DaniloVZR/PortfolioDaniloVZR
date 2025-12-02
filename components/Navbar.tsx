"use client";
import { navItems } from "@/constants";
import { Button } from "./ui/MovingBorder";
import { useState } from "react";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  const handleLinkClick = () => {
    setMenu(false);
  }

  return (
    <nav className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto max-w-6xl">
      <Button
        duration={4000}
        borderRadius="1rem"
        className="w-full"
      >
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center">
          {navItems.map((item, index) => (
            <li key={index} className="flex-1">
              <a
                href={item.link}
                className="block px-6 lg:px-10 py-3 text-white hover:text-purple-primary transition-colors duration-300 border-r-2 last:border-none border-gray-300 text-sm lg:text-base font-medium text-center"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {menu ? (
            <div className="py-2">
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <li key={index} className="border-b border-slate-700 last:border-none">
                    <a
                      href={item.link}
                      onClick={handleLinkClick}
                      className="block px-6 py-3 text-white hover:text-purple-primary hover:bg-slate-800/50 transition-colors duration-300 font-medium text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleMenu}
                className="w-full px-6 py-3 text-purple-primary hover:text-white hover:bg-slate-800/50 transition-colors duration-300 font-medium text-sm flex items-center justify-center gap-2"
              >
                <RiCloseLine size="1.2rem" />
                Close
              </button>
            </div>
          ) : (
            <button
              onClick={handleMenu}
              className="px-5 py-3 flex items-center justify-center gap-2 text-white hover:text-purple-primary transition-colors w-full"
            >
              <RiMenuFill size="1.2rem" />
              <span className="text-sm font-medium">Menu</span>
            </button>
          )}
        </div>
      </Button>
    </nav>
  );
};

export default Navbar;