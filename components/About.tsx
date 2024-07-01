import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="pt-10 border-t-2 border-slate-800">
      <h1 className="heading tracking-normal w-auto p-10">About<span className="text-purple-primary">{' '}Me</span></h1>
      <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-8 items-center py-[5rem] border-b-2 border-slate-800">
        <div className="flex-1 text-lg font-normal space-y-5">
          <p>🤠 I am a passionate and committed Frontend Web Developer seeking my first job as a developer.</p>
          <p>🧠 Currently, I am focused on my training through the SoyHenry programming bootcamp, oriented towards web development, where I am acquiring valuable skills in the latest technologies and trends in the field, as well as soft skills.</p>
          <p>🌟 I also have one year of experience in the IT sector as a Systems Assistant, which has provided me with a solid technical foundation. Additionally, I hold a professional degree in Information Systems Programming from Politécnico Jaime Isaza Cadavid and have a B2 English certificate with 600 hours of study at Comfama.</p>
          <p>😉 I consider myself to have valuable soft skills for web development, such as the ability to work in a team, solve problems, learn quickly, and pay attention to detail. I am also a proactive, adaptable person with a strong interest in collaborating with organizational goals and ensuring excellence in every project.</p>
        </div>
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="rounded-full overflow-hidden shadow-2xl" style={{ width: 300, height: 300, backgroundColor: 'rgba(0,0,0,0.5)' }}>
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