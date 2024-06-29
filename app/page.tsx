import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-custom-gradient flex flex-col justify-center items-center mx-auto sm:px-10 px-5">
      <Navbar />
      <Hero />
    </main>
  );
}
