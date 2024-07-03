import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-custom-gradient flex flex-col justify-center items-center overflow-hidden">
      <Navbar />
      <Hero />
      <main className="px-[4rem] md:px-[12rem] xl:px-[15rem]">
        <About />
        <Experience />
      </main>
    </div>
  );
}
