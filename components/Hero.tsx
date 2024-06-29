import Image from "next/image";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Hero = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center relative">
      <div className="flex justify-center items-center z-10">
        <div className="w-[40rem] mr-10">

          <h1 id="Nombre" className="text-[3rem] font-bold">Danilo Urrego David</h1>
          <h2 className="text-2xl mb-10 text-[#b936c0] font-extrabold">Frontend Developer</h2>
        </div>
        <div className="flex justify-center items-center rounded-full overflow-hidden shadow-2xl" style={{ width: 350, height: 350, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <Image
            src="/Profile-Picture.png"
            alt="Profile picture"
            className="rounded-full w-full h-full object-cover"
            width={340}
            height={340}
          />
        </div>
      </div>
      <div className="absolute h-[100vh] w-full top-0 left-0">
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Hero;
