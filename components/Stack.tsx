"use client";
import { techStack } from "@/constants";
import { DotBg } from "./ui/DotBg";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Stack = () => {

  const { t } = useLanguage();

  return (
    <section id="Stack" className="pt-12 sm:pt-16 pb-20 sm:pb-28 border-t-2 border-slate-800">
      <h1 className="heading tracking-normal px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10 text-3xl sm:text-4xl lg:text-5xl">
        {t('stack.title')}
      </h1>
      <div className="relative flex justify-center items-center my-6 sm:my-8 lg:my-10 px-4 sm:px-6">
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full max-w-7xl">
          {techStack.map((stack) => (
            <div
              className="relative flex-1 border border-gray-800 py-6 sm:py-8 px-6 sm:px-8 lg:px-10 rounded-2xl z-1 hover:border-gray-400 duration-300"
              key={stack.title}
            >
              <div className="relative z-10">
                <h1 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">{stack.title}</h1>
                <ul className="grid justify-center gap-4 sm:gap-5 lg:gap-6 grid-cols-3 place-items-center">
                  {stack.items.map((item) => (
                    <li
                      className="flex flex-col h-max gap-2 sm:gap-3 justify-normal items-center group"
                      key={item.id}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center transition-transform group-hover:scale-110 relative">
                        <Image
                          src={`/TechStack/${item.id}-icon.svg`}
                          alt={item.id}
                          fill
                          sizes="56px"
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-xs sm:text-sm bg-gray-primary py-1 px-2 sm:px-3 rounded-full whitespace-nowrap group-hover:bg-purple-primary/20 transition-colors">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <DotBg />
            </div>
          ))}
        </div>
        <div className="absolute z-0 left-[-50%] top-0 w-[70%] h-[60%] rounded-full blue__gradient" />
        <div className="absolute z-0 left-[-50%] bottom-0 w-[70%] h-[60%] rounded-full white__gradient" />
        <div className="absolute z-0 right-[-50%] top-0 w-[70%] h-[60%] rounded-full purple__gradient" />
        <div className="absolute z-0 right-[-50%] bottom-0 w-[70%] h-[60%] rounded-full white__gradient" />
      </div>
    </section>
  );
};

export default Stack;