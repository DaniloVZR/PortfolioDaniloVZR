import { socialMedia } from "@/constants";
import AceternityButton from "./ui/AceternityButton";
import { RiPhoneFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer id="contact" className="pt-16 pb-10 bg-black w-full">
      <div className="px-[4rem] md:px-[12rem] xl:px-[15rem]">
        <div>
          <h1 className="heading tracking-normal py-10">
            ¡Contáctame!
          </h1 >
          <div className="flex justify-center items-center flex-col gap-8 mb-8">
            <p className="text-slate-300 text-center w-2/3">
              Estoy listo para contribuir a tu equipo y llevar tus proyectos al siguiente nivel. No dudes en ponerte en contacto conmigo para discutir cómo puedo aportar valor a tu empresa. <strong>¡Hablemos pronto!</strong>
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <AceternityButton
                text="+57 313 5339222"
                icon={<RiPhoneFill size="1.2rem" />}
                reverse={true}
                classNameText="text-lg"
              />
              <AceternityButton
                text="Medellín, Colombia"
                icon={<FaLocationDot size="1.2rem" />}
                reverse={true}
                classNameText="text-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-0 justify-between items-center border-t-2 border-slate-800 pt-4">
          <div>
            <p className="text-sm text-slate-400">Copyright © {new Date().getFullYear()} Danilo Urrego David</p>
          </div>
          <div>
            <ul className="flex gap-2">
              {socialMedia.map((e) => (
                <li key={e.id} className="text-slate-400 text-sm">
                  <a href={e.link} target="_blank" rel="noopener noreferrer">
                    <e.icon size="2.8rem" className="rounded-full hover:bg-white hover:text-black p-2 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;