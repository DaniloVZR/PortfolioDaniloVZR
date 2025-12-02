"use client"

import { socialMedia } from "@/constants";
import AceternityButton from "./ui/AceternityButton";
import { RiPhoneFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="pt-12 sm:pt-16 pb-8 sm:pb-10 bg-black w-full">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto">
        <div>
          <h1 className="heading tracking-normal py-6 sm:py-8 lg:py-10 text-3xl sm:text-4xl lg:text-5xl">
            ¡Contáctame!
          </h1>
          <div className="flex justify-center items-center flex-col gap-6 sm:gap-8 mb-6 sm:mb-8">
            <p className="text-slate-300 text-center w-full sm:w-5/6 md:w-3/4 lg:w-2/3 text-sm sm:text-base leading-relaxed px-4 sm:px-0">
              Estoy listo para contribuir a tu equipo y llevar tus proyectos al siguiente nivel. No dudes en ponerte en contacto conmigo para discutir cómo puedo aportar valor a tu empresa. <strong>¡Hablemos pronto!</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
              <div className="w-full sm:w-auto">
                <AceternityButton
                  text="+57 313 5339222"
                  icon={<RiPhoneFill className="w-4 h-4 sm:w-5 sm:h-5" />}
                  reverse={true}
                  classNameText="text-sm sm:text-base lg:text-lg"
                  className="w-full"
                />
              </div>
              <div className="w-full sm:w-auto">
                <AceternityButton
                  text="Medellín, Colombia"
                  icon={<FaLocationDot className="w-4 h-4 sm:w-5 sm:h-5" />}
                  reverse={true}
                  classNameText="text-sm sm:text-base lg:text-lg"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-0 justify-between items-center border-t-2 border-slate-800 pt-4 sm:pt-6">
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm text-slate-400">
              Copyright © {currentYear || "..."} Danilo Urrego David
            </p>
          </div>
          <div>
            <ul className="flex gap-2 sm:gap-3">
              {socialMedia.map((e) => (
                <li key={e.id} className="text-slate-400">
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={e.id}
                  >
                    <e.icon
                      className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full hover:bg-white hover:text-black p-2 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;