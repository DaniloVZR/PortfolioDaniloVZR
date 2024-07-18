"use client";
import { navItems } from "@/constants";
import { Button } from "./ui/MovingBorder";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className="my-1 fixed top-5 z-50">
      <Button
        duration={4000}
        borderRadius="1rem"
      >
        {/* Arreglar li dentro de ul */}
        <ul className="hidden md:flex justify-center items-center w-full">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex-1 flex my-3 text-white hover:text-purple-primary transition-colors duration-300 px-10 border-r-2 last:border-none border-gray-300">
              <li className="font-medium text-base flex-1">
                {item.name}
              </li>
            </a>
          ))}
        </ul>

        {
          menu ? (
            <div>
              <ul className="md:flex justify-center items-center w-full pb-3">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex-1 flex flex-col my-3 text-white hover:text-purple-primary transition-colors duration-300 px-10">
                    <a href={item.link} onClick={handleMenu} className="font-medium text-base flex-1">
                      {item.name}
                    </a>
                  </li>
                ))}
                <div
                  className="hover:text-purple-primary transition-colors duration-300 font-medium text-base flex-1"
                  onClick={handleMenu}
                >
                  Close
                </div>
              </ul>
            </div>
          ) : (
            <div
              className={`md:hidden px-5 py-2`}
              onClick={handleMenu}
            >
              <RiMenuFill size="1.2rem" />
            </div>
          )

        }
      </Button>
    </div>
  );
};

export default Navbar;