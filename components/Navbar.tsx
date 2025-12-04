"use client";
import { Button } from "./ui/MovingBorder";
import { useState } from "react";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { t } = useLanguage();
  const [showNavbar, setShowNavbar] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolled past 80% of viewport height
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.8) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setMenu(false); // Close mobile menu when returning to hero
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop */}
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-3 sm:top-5 -translate-x-1/2 z-50 w-[95%] sm:w-auto max-w-6xl transition-all">
            <Button
              duration={4000}
              borderRadius="1rem"
              className="w-full"
            >

              {showNavbar && (
                <div
                  className="hidden md:flex items-center gap-4">
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
                </div>
              )}
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}

      {/* Mobile Menu */}
      <nav className="fixed top-3 sm:top-5 z-50 w-[95%] sm:w-auto max-w-6xl md:invisible">
        <Button
          duration={4000}
          borderRadius="1rem"
          className="w-full"
        >
          <div className="md:hidden">
            {menu ? (
              <div className="py-2">
                <div className="px-6 pb-2 border-b border-slate-700">
                  <div
                    onClick={handleMenu}
                    className="text-purple-primary hover:text-white transition-colors flex justify-center"
                  >
                    <RiCloseLine size="1.5rem" />
                  </div>
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
                  <div className="px-4 pt-2 border-t border-slate-700">
                    <LanguageSwitcher />
                  </div>
                </ul>
              </div>
            ) : (
              <div
                onClick={handleMenu}
                className="px-5 py-3 flex items-center justify-between gap-4 text-white hover:text-purple-primary transition-colors w-full"
              >
                <div className="flex items-center gap-2">
                  <RiMenuFill size="1.2rem" />
                </div>
              </div>
            )}
          </div>
        </Button>
      </nav>
    </>
  );
};

export default Navbar;