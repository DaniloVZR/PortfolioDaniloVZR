import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-custom-gradient flex flex-col justify-center items-center ">
      <Navbar />
      <Hero />
      <main className="mx-auto px-5 md:px-[10rem]">
        <About />
      </main>
    </div>
  );
}
