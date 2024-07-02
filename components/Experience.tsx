import { textExperience } from "@/constants";
import { Meteors } from "./ui/MeteorsCard";

const Experience = () => {
  return (
    <section id="experience" className="py-10 border-t-2 border-slate-800">
      <h1 className="heading tracking-normal w-auto p-10">
        Exper<span className="text-purple-primary">ience</span>
      </h1>
      <div className="flex flex-col xl:grid grid-cols-2 gap-10 my-10">
        {
          textExperience.map((experience) => (
            <div className="w-full relative group">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-purple-primary transform scale-[0.80] rounded-lg blur-2xl transition-all duration-300 group-hover:blur-3xl" />
              <div className="w-full relative bg-gray-primary border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start">
                <h1 className="text-xl font-bold rounded-lg mb-2">
                  {experience.job}
                </h1>
                <h5 className="mb-4 text-slate-500">{experience.title}</h5>

                <div className="text-sm font-normal md:text-base text-slate-400 mb-4 relative">
                  {
                    Array.isArray(experience.text) ? (
                      <ul className="list-disc list-inside">
                        {experience.text.map((item, index) => (
                          <li key={index} className="mb-2">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{experience.text}</p>
                    )
                  }
                </div>

                <Meteors number={30} />
              </div>
            </div>
          ))
        }
      </div>
    </section>


  );
};

export default Experience;