import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
// import Projects from "@/components/Projects";
import Contact from "@/app/components/Contact";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}