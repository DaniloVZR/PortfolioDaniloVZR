import { textAboutMe } from "@/constants";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="pt-10 border-t-2 border-slate-800">
      <h1 className="heading tracking-normal w-auto p-10">About<span className="text-purple-primary">{' '}Me</span></h1>
      <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-8 items-center py-[5rem] border-b-2 border-slate-800">
        <div className="flex-1 relative">
          <div className="relative text-lg font-normal space-y-5 z-10 cursor-default">
            {textAboutMe.map((paragraph, index) => (
              <div key={index} className="flex justify-center items-center z-10 relative">
                <span
                  className="mr-5 p-4 rounded-full text-2xl ease-in-out hover:scale-125 duration-300 "
                  style={{
                    background: "rgb(0, 0, 0, 0.5)"
                  }}>{paragraph.emoji}</span>
                <p>{paragraph.text}</p>
              </div>
            ))}
          </div>
          <div className="absolute z-0 left-[-50%] top-0 w-[70%] h-[60%] rounded-full purple__gradient" />
          <div className="absolute z-0 left-[-50%] bottom-0 w-[70%] h-[60%] rounded-full white__gradient" />
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center">
          <div
            className="rounded-full overflow-hidden shadow-2xl ease-in-out hover:scale-110 duration-300"
            style={{ width: 300, height: 300, backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <Image
              src="/Profile-Picture.png"
              alt="Profile picture"
              className="rounded-full w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;