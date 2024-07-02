import { textAboutMe } from "@/constants";

const About = () => {
  return (
    <section id="about" className="py-10 border-t-2 border-slate-800">
      <h1 className="heading tracking-normal w-auto p-10">About<span className="text-purple-primary">{' '}Me</span></h1>
      <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-8 items-center">
        <div className="flex-1 relative my-10">
          <div className="relative text-center font-normal z-10 cursor-default md:text-left space-y-5 2xl:space-y-0 2xl:grid 2xl:grid-cols-2 xl:items-start xl:gap-[4rem]">
            {textAboutMe.map((paragraph, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-start items-center z-10 relative rounded-lg">
                <span
                  className="md:mr-5 my-3 p-3 md:p-4 rounded-full sm:text-lg md:text-2xl ease-in-out hover:scale-125 duration-300 md:self-start"
                  style={{
                    background: "rgba(0, 0, 0, 0.5)"
                  }}>{paragraph.emoji}</span>
                <p
                  className="hover:bg-gradient-card p-3 rounded-lg text-sm md:text-lg transition-all"
                >{paragraph.text}</p>
              </div>
            ))}
          </div>
          <div className="absolute z-0 left-[-50%] top-0 w-[70%] h-[60%] rounded-full purple__gradient" />
          <div className="absolute z-0 left-[-50%] bottom-0 w-[70%] h-[60%] rounded-full white__gradient" />
        </div>

        {/* <div className="hidden md:flex flex-1 justify-center items-center">
          <ProfilePicture />
        </div> */}
      </div>
    </section >
  );
};

export default About;