"use client";
import { Button } from "./ui/MovingBorder";
import { useState } from "react";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.about'), link: "#about" },
    { name: t('nav.experience'), link: "#experience" },
    { name: t('nav.projects'), link: "#projects" },
    { name: t('nav.contact'), link: "#contact" },
  ];

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
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex justify-center items-center">
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
          <div className="pr-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {menu ? (
            <div className="py-2">
              <div className="flex justify-between items-center px-6 pb-3 border-b border-slate-700">
                <LanguageSwitcher />
                <button
                  onClick={handleMenu}
                  className="text-purple-primary hover:text-white transition-colors"
                >
                  <RiCloseLine size="1.5rem" />
                </button>
              </div>
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
            </div>
          ) : (
            <div
              onClick={handleMenu}
              className="px-5 py-3 flex items-center justify-between gap-4 text-white hover:text-purple-primary transition-colors w-full"
            >
              <div className="flex items-center gap-2">
                <RiMenuFill size="1.2rem" />
                <span className="text-sm font-medium">{t('nav.menu')}</span>
              </div>
              <LanguageSwitcher />
            </div>
          )}
        </div>
      </Button>
    </nav>
  );
};

export default Navbar;