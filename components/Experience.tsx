"use client";
import { Meteors } from "./ui/MeteorsCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Job } from "@/types";

const Experience = () => {
  const { t } = useLanguage();

  // Obtener los trabajos traducidos
  const jobs = t('experience.jobs') as unknown as Job[];

  return (
    <section id="experience" className="py-12 sm:py-16 border-t-2 border-slate-800">
      <h1 className="heading tracking-normal w-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10 text-3xl sm:text-4xl lg:text-5xl">
        {t('experience.title')}
      </h1>
      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 my-6 sm:my-8 lg:my-10 px-4 sm:px-6">
        {
          jobs.map((job, index) => (
            <div className="w-full relative group" key={index}>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-purple-primary transform scale-[0.80] rounded-lg blur-2xl transition-all duration-300 group-hover:blur-3xl" />
              <div className="w-full relative bg-gray-primary border border-gray-800 px-5 sm:px-6 lg:px-8 py-6 sm:py-7 lg:py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start">
                <h1 className="text-lg sm:text-xl font-bold rounded-lg mb-2">
                  {job.job}
                </h1>
                <h5 className="mb-3 sm:mb-4 text-slate-500 text-sm sm:text-base">{job.title}</h5>

                <div className="text-xs sm:text-sm md:text-base text-slate-400 mb-4 relative">
                  {
                    Array.isArray(job.text) ? (
                      <ul className="list-disc list-inside space-y-2">
                        {job.text.map((item: string, index: number) => (
                          <li key={index} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed">{job.text}</p>
                    )
                  }
                </div>

                <Meteors number={20} />
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Experience;