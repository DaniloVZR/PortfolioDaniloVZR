import { BackgroundBeams } from "./ui/BackgroundBeams";

const Hero = () => {
  return (
    <div className="h-[100vh] w-full overflow-hidden">
      <div className="flex h-full justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="w-[40rem] mr-10 text-center">
            <p className="text-gray-500">Welcome to my portfolio</p>
            <h1 className="text-[2rem] md:text-[3rem] font-bold">Danilo Urrego David</h1>
            <h2 className="text-xl md:text-2xl mb-10 text-[#b936c0] font-extrabold">Frontend Developer</h2>
          </div>
        </div>
        <div className="absolute h-[100vh] w-full top-0 left-0">
          <BackgroundBeams />
        </div>
      </div>
    </div>
  );
};

export default Hero;
