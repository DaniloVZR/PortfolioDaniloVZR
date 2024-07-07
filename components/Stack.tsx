import { techStack } from "@/constants";
import { DotBg } from "./ui/DotBg";

const Stack = () => {
  return (
    <section id="Stack" className="py-10 border-t-2 border-slate-800">
      <h1 className="heading tracking-normal p-10">
        Stack
      </h1>
      <div className="relative flex justify-center items-center my-10">
        <div className="relative flex flex-col 2xl:grid 2xl:grid-cols-3 gap-[4rem] w-full">
          {techStack.map((stack) => (
            <div className="relative flex-1 border border-gray-800 py-8 px-10 rounded-2xl z-1">
              <div className="relative z-10">
                <h1 className="text-2xl font-bold text-center m-5">{stack.title}</h1>
                <ul className="grid justify-center mt-8 gap-5 grid-cols-3  2xl:gap-10 2xl:mt-16 place-items-center">
                  {stack.items.map((item) => (
                    <li className="flex flex-col h-max gap-3 justify-normal items-center" key={item.id}>
                      <img
                        className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
                        src={`TechStack/${item.id}-icon.svg`}
                        alt={item.id}
                      />
                      <span className="text-xs md:text-sm bg-gray-primary py-1 px-3 rounded-full">{item.name}</span>
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
    </section >
  );
};

export default Stack;