import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <div className="relative bg-custom-gradient flex flex-col justify-center items-center overflow-hidden">
      <Navbar />
      <Hero />
      <main className="px-[4rem] md:px-[12rem] xl:px-[15rem]">
        <About />
        <Experience />
        <Projects />
        <Stack />
      </main>
      <Footer />
    </div >
  );
}
